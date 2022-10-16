import React from 'react';
import BlackLogo from '../image/BlackLogo.png';
import {useNavigate} from 'react-router-dom';
import "./Gsignup.css";

function Gsignup() {

  let navigate=useNavigate();

  return (
    <>
      <div id="gsignup">
        <div id="ginput">
          <img src={BlackLogo} id="BlackLogo" alt="BlackLogo" />
          <p id="gsignupText">단체 회원가입</p>

          <div id="kname">기업 한국명</div>
          <input></input>
          <div id="ename">기업 영문명</div>
          <input></input>
          <div id='number'>연락처</div>
          <input placeholder="'-'포함하여 작성"></input>
          <div id='address'>주소</div>
          <input id="addressInput"></input>
          <button class="ckbutton">주소찾기</button> <br />
          <input placeholder='상세주소'></input>
          <div id="name">대표자명</div>
          <input placeholder="한국지사 대표자명 입력"></input>
          <div id="businessNum">사업자 등록번호</div>
          <input placeholder="'-'포함하여 작성"></input>
          <div id="gid">아이디</div>
          <input id="idInput"></input>
          <button class="ckbutton">중복확인</button>
          <div id="gpw">비밀번호</div>
          <input type="password"></input>
          <br />
          <button id="signup">회원가입</button>
          <p id="Q">이미 회원이신가요?<button onClick={()=>{ navigate('/login') }}>로그인</button></p>
          <p id="Q">개인 회원가입이신가요?<button onClick={()=>{ navigate('/signup') }}>개인 회원가입</button></p>
        </div>
      </div>
    </>
  );
}

export default Gsignup;
