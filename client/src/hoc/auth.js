/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {auth} from '../_actions/user_action';
import {useNavigate} from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null) {

    //adminRoute를 안 쓰면 null, true라고 쓰면 관리자만 출입 가능한 페이지
    //option
    //null => 아무나 출입 가능한 페이지
    //true => 로그인한 유저만 출입 가능한 페이지
    //false => 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck() {

        let navigate = useNavigate();
        
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {

                //로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        navigate('/login')
                    }
                } else {
                    //로그인 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    } else {
                        if(option === false) {
                        navigate('/')
                        }
                    }
                }
            })
        }, [dispatch, navigate])
        return (
            <SpecificComponent/>
        )
    }
    return AuthenticationCheck
}