import React from "react";
import "./GmypageChg.css";
import {useNavigate} from 'react-router-dom';

import Mypageheader from "../components/Mypageheader";

function GmypageChg() {
    
    let navigate=useNavigate();
    
  return (
    <>
      <Mypageheader />
        <div id="Gchange">
            <div id="information">
                <p>단체정보</p>
            </div>
            <div id="Groupinfo">
                <div id="infoId">
                    <div class="text">아이디</div>
                    <div class="info">test2</div>
                </div> <br /> <br />
                <div>
                    <div id="infopw">
                        <div class="text">기존 비밀번호</div>
                        <input type="password"/>
                    </div> <br />
                    <div id="infopw">
                        <div class="text">변경할 비밀번호</div>
                        <input type="password"/> <input type="submit" value="확인" id="pwck"/>
                    </div> <br />
                    <div id="infoKnam">
                        <div class="text">한국명</div>
                        <input />
                    </div> <br />
                    <div id="infoEnam">
                        <div class="text">영문명</div>
                        <input />
                    </div> <br />
                    <div id="infoNum">
                        <div class="text">연락처</div>
                        <input />
                    </div> <br />
                    <div id="infoAdrs">
                        <div class="text">주소</div>
                        <input />
                    </div> <br />
                    <div id="infoCeo">
                        <div class="text">대표자명</div>
                        <input />
                    </div> <br />
                    <div id="infoBnum">
                        <div class="text">사업자등록번호</div>
                        <input />
                    </div> <br />
                    <input type="submit" value="완료" id="button" onClick={()=>{ navigate('/Gmypage') }}/>
                </div>
            </div>
        </div>
    </>
  );
}

export default GmypageChg;