import React, { useState } from "react";
import axios from 'axios';
import "./Dmypage.css";

import Mypageheader from "../components/Mypageheader";

function Dmypage(props) {

    const [Password, SetPassword] = useState("");
    const [Name, SetName] = useState("");
    const [Num, SetNum] = useState("");
  
    const passwordHandler = (e) => {
      e.preventDefault();
      SetPassword(e.target.value);
    };
  
    const nameHandler = (e) => {
      e.preventDefault();
      SetName(e.target.value);
    };

    const numHandler = (e) => {
        e.preventDefault();
         SetNum(e.target.value);
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      let body = {
        pass : Password,
        name : Name,
        num : Num
      };
  
      axios
        .post("/api/mypage", body)
        .then((res) => console.log(res));
    };
  

  return (
    <>
      <Mypageheader />
        <div id="dmypage">
            <div id="information">
                <p>회원정보</p>
            </div>
            <div id="indivinfo">
                <div id="infoId">
                    <div class="text">아이디</div>
                    <div class="info">test2</div>
                </div> <br /> <br />
                <form onSubmit={submitHandler}>
                    <div id="infoPw">
                        <div class="text">비밀번호</div>
                        <div class="info">test2</div>
                    </div> <br /><br />
                    <div id="infoName">
                        <div class="text">이름</div>
                        <div class="info">홍길동</div>
                    </div> <br /><br />
                    <div id="infoNum">
                        <div class="text">전화번호</div>
                        <div class="info">010-1111-2222</div>
                    </div> <br />
                    <input type="submit" value="수정" id="button" />
                </form>
            </div>
        </div>
    </>
  );
}

export default Dmypage;
