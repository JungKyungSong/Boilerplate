import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); //Login을 클릭할 때마다 페이지가 refresh 되는 것을 막기 위해서
  
  //state에 담겨 있는 email과 password.. 를 서버로 보내기 위해서
  let body = {
        email: Email,
        password: Password
    }
    

  dispatch(loginUser(body)) //loginUser라는 액션을 취함
    .then(response => {
      if(response.payload.loginSuccess) {
        navigate('/') //로그인 후 시작 페이지로 바로 이동
      } else {
        alert('Error')
      }
    })
  }

  return (
    <div style = {{display:'flex', justifyContent :'center', alignItems: 'center',
        width: '100%', height: '100vh'
    }}>
        <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler}/> 
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler}/>
          <br/>
          <button type="submit">
            Login
          </button>
        </form>
    </div>
  )
}

export default LoginPage