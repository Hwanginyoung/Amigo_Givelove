import React, { useState }  from "react";
import "./DonateGoods.css";
// import DaumPostcode from 'react-daum-postcode';
import Donateheader from "../components/Donateheader";
import Inventory from "./Inventory";
import Post from '../components/Post';

function DonateGoods() {
  const [enroll_company, setEnroll_company] = useState({
    address:'',
  });

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
      setEnroll_company({
          ...enroll_company,
          [e.target.name]:e.target.value,
      })
  }

  const handleComplete = (data) => {
      setPopup(!popup);
  }
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
            <input id='address' type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                        <button id='find' onClick={handleComplete}>찾기</button><br />
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}

            <input type="text" id="detailaddress"></input>
            

          </div>
          <button id="donate">기부하기</button>
          <p id="warnning">※ 단체의 상황과 물건상태에 따라 거부될 수 도 있습니다. ※</p>
        </div>
    </>
  );
}

export default DonateGoods;