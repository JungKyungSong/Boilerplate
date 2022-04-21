import React, {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function LandingPage() {

  let navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/hello') //서버로 보냄
    .then(response => console.log(response.data)) //서버로부터 res를 받은 후 콘솔에 "안녕하세요" (data) 보여줌
  }, [])
  

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(response => {
      if(response.data.success) {
        navigate('/login')
      }
      else {
        alert('Failed to logout')
      }
    })
  }

  return (
    <div style={{display:'flex', justifyContent :'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>
        로그아웃
      </button>
    </div>
  )
}

export default LandingPage