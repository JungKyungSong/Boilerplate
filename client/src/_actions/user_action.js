import axios from "axios";
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types';

export function loginUser(dataToSubmit){ //받은 email과 password.. 를 넣음

    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data) //서버에서 받은 data를 request에 저장

    //request를 reducer로 보내기
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit){ //받은 email과 password.. 를 넣음

    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data) //서버에서 받은 data를 request에 저장

    //request를 reducer로 보내기
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth(){ 

    const request = axios.get('/api/users/auth')
    .then(response => response.data) //서버에서 받은 data를 request에 저장

    //request를 reducer로 보내기
    return {
        type: AUTH_USER,
        payload: request
    }
}