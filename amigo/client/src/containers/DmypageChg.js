import React from "react";
import "./DmypageChg.css";
import {useNavigate} from 'react-router-dom';

import Mypageheader from "../components/Mypageheader";

function DmypageChg() {

    let navigate=useNavigate();

  return (
    <>
      <Mypageheader />
        <div id="Dchange">
            <div id="information">
                <p>회원정보</p>
            </div>
            <div id="indivinfo">
                <div id="infoId">
                    <div class="text">아이디</div>
                    <div class="info">test2</div>
                </div> <br /> <br />
                <form action="" method="post">
                    <div id="infopw">
                        <div class="text">기존 비밀번호</div>
                        <input type="password"/> <input type="submit" value="확인" id="pwck"/>
                    </div> <br />
                    <div id="infopw">
                        <div class="text">변경할 비밀번호</div>
                        <input type="password"/>
                    </div> <br />
                    <div id="infoName">
                        <div class="text">이름</div>
                        <input />
                    </div> <br />
                    <div id="infoNum">
                        <div class="text">전화번호</div>
                        <input />
                    </div> <br />
                    <input type="submit" value="완료" id="button" onClick={()=>{ navigate('/Dmypage') }}/>
                </form>
            </div>
        </div>
    </>
  );
}

export default DmypageChg;
