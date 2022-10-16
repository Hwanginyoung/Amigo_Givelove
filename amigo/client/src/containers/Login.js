import React from 'react';
import LoginImg from '../image/LoginImg.png';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Login.css";

function Login() {

  let navigate=useNavigate();

  return (
    <>
    <div id="loginpage">
            <img src={LoginImg} id="LoginImg" alt="LoginImg" />
        <div id="loginInput">
            <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
            <p id="loginText">로그인</p>
            <form action="http://localhost:5000/userAuth/login" method="post">
              <div id="id">아이디</div>
              <input></input>
              <div id="password">비밀번호</div>
              <input type="password"></input>
              <br />
              <button id="loginButton" type="submit">로그인</button>
            </form>
            <p id="Q">아직 회원이 아닌신가요?<button onClick={()=>{ navigate('/signup') }}>회원가입</button></p>
        </div>
    </div>
    </>
  );
}

export default Login;
