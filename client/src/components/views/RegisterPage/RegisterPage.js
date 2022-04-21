import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import {useNavigate} from 'react-router-dom';


function RegisterPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault(); //회원 가입을 클릭할 때마다 페이지가 refresh 되는 것을 막기 위해서
  
  if (Password !== ConfirmPassword ) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    
  //state에 담겨 있는 email과 password.. 를 서버로 보내기 위해서
  let body = {
        email: Email,
        password: Password,
        name: Name
    } 

    dispatch(registerUser(body))
    .then(response => {
      if(response.payload.success) {
        navigate("/login")
      } else {  
        alert('Failed to sign up')
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
          <label>Name</label>
          <input type="text" value={Name} onChange={onNameHandler}/>
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler}/>
          <label>Confirm Password</label>
          <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
          <br/>
          <button type="submit">
            회원 가입
          </button>
        </form>
    </div>
  )
}

export default RegisterPage