import React from "react";
import "./DonateGoods.css";
// import DaumPostcode from 'react-daum-postcode';
import Donateheader from "../components/Donateheader";
import Inventory from "./Inventory";

function DonateGoods() {

  return (
    <>
        <Donateheader />
        <div id="donategoods">
          <div id="userinfo">
            <div id="text">기부자 정보</div>
            <div class="info">
              <div>기부자명 </div>
              <input></input> 
            </div> 
            <div class="info">
              <div>생년월일 </div>
              <input placeholder="ex) 19980101"></input> 
            </div>
            <div class="info">
              <div>전화번호 </div>
              <input placeholder="ex) 01012345678"></input> 
              <p id="numtext">‘-’ 를 제외한 숫자만 입력해 주세요.</p>
            </div>
          </div>
          
          <div id="donation">
            <div id="text">물품 기증</div>
            <p class="exp">기부할 물품 목록(1개 이상)</p>
            <Inventory />

            <p class="exp" id="adrstext">주소</p>
            <input type="text" id="address" placeholder="주소"></input>
            <input type="button" id="find" value="찾기" onClick=""/> <br/>
            <input type="text" id="detailaddress" placeholder="상세주소"></input>
            

          </div>
          <button id="donate">기부하기</button>
          <p id="warnning">※ 단체의 상황과 물건상태에 따라 거부될 수 도 있습니다. ※</p>
        </div>
    </>
  );
}

export default DonateGoods;