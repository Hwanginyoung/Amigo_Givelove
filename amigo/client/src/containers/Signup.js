import React from 'react';
import divSign from '../image/divSign.png';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Signup.css";

function Signup() {

  let navigate=useNavigate();

  return (
    <>
    <div id="signupPage">
            <img src={divSign} id="divSign" alt="divSign" />
        <div id="signupInput">
            <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
            <p id="signupText">개인 회원가입</p>
            <form action="http://localhost:5000/userAuth/join" mehtod="post">
              <div id="id">아이디</div>
              <input id="idInput"></input>
              <button id="ck">중복확인</button>
              <div id="password">비밀번호</div>
              <input id="inputTxt" type="password"></input>
              <div>이름</div>
              <input id="inputTxt"></input>
              <div>전화번호</div>
              <input id="inputTxt" type="num" placeholder='숫자만 입력'></input>
              <br />
              <button id="signupButton">회원가입</button>
            </form>
            <p id="Q">이미 회원이신가요?<button onClick={()=>{ navigate('/login') }}>로그인</button></p>
            <p id="Q">단체 회원가입이신가요?<button onClick={()=>{ navigate('/gsignup') }}>단체 회원가입</button></p>
        </div>
    </div>
    </>
  );
}

export default Signup;
