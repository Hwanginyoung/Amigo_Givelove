import React from "react";
import "./Gmypage.css";

import Mypageheader from "../components/Mypageheader";

function Gmypage() {
  return (
    <>
      <Mypageheader />
        <div id="gmypage">
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
                        <div class="text">비밀번호</div>
                        <div class="info">test2</div>
                    </div> <br /><br />
                    <div id="infoKnam">
                        <div class="text">한국명</div>
                        <div class="info">test2</div>
                    </div> <br /><br />
                    <div id="infoEnam">
                        <div class="text">영문명</div>
                        <div class="info">test2</div>
                    </div> <br /><br />
                    <div id="infoNum">
                        <div class="text">연락처</div>
                        <div class="info">test2</div>
                    </div> <br /><br />
                    <div id="infoAdrs">
                        <div class="text">주소</div>
                        <div class="info">test2</div>
                    </div> <br /><br />
                    <div id="infoCeo">
                        <div class="text">대표자명</div>
                        <div class="info">test2</div>
                    </div> <br /><br />
                    <div id="infoBnum">
                        <div class="text">사업자등록번호</div>
                        <div class="info">test2</div>
                    </div> <br />
                    <input type="button" value="수정" id="button"/>
                </div>
            </div>
        </div>
    </>
  );
}

export default Gmypage;