import React from "react";
import "./DonateMoney.css";
import {useNavigate} from 'react-router-dom';
import Donateheader from "../components/Donateheader";

function DonateMoney() {
  
  let navigate=useNavigate();

  return (
    <>
      <Donateheader />
      <div id="donatemoney">
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

        <div id="payment">
          <div id="text">기부금 결제</div>
          <div class="info">
            <div>기부금액 </div>
            <input></input>
            <p id="amounttext">원</p>
          </div>
          <div class="info">
            <div>은행명 </div>
            <select>
              <option>은행선택</option>
              <optgroup class="text" label="국내은행" />
              <option value="국민은행">국민은행</option>
              <option value="기업은행">기업은행</option>
              <option value="농협은행">농협은행</option>
              <option value="신한은행">신한은행</option>
              <option value="산업은행">산업은행</option>
              <option value="우리은행">우리은행</option>
              <option value="한국씨티은행">한국씨티은행</option>
              <option value="하나은행">하나은행</option>
              <option value="SC제일은행">SC제일은행</option>
              <option value="경남은행">경남은행</option>
              <option value="광주은행">광주은행</option>
              <option value="대구은행">대구은행</option>
              <option value="부산은행">부산은행</option>
              <option value="새마을금고">새마을금고</option>
              <option value="신협중앙회">신협중앙회</option>
              <option value="우체국">우체국</option>
              <option value="전북은행">전북은행</option>
              <option value="제주은행">제주은행</option>
              <option value="케이뱅크">케이뱅크</option>
              <option value="토스뱅크">토스뱅크</option>
              <optgroup />
              <optgroup class="text" label="해외은행" />
              <option value="도이치은행">도이치은행</option>
              <option value="뱅크오브아메리카">뱅크오브아메리카</option>
              <option value="중국건설은행">중국건설은행</option>
              <option value="중국공상은행">중국공상은행</option>
              <option value="중국은행">중국은행</option>
              <option value="BNP파리바은행">BNP파리바은행</option>
              <option value="HSBC은행">HSBC은행</option>
              <option value="JP모간체이스은행">JP모간체이스은행</option>
              <optgroup />
            </select>
          </div>
          <div class="info">
            <div>계좌번호 </div>
            <input></input> 
            <p id="acnumtext">※ 기호 “-”없이 숫자만 입력하세요.<br/>휴대폰 번호로 된 계좌는 자동이체 되지 않습니다.</p>
          </div>
          <div class="info">
            <div>예금주 성명 </div>
            <input></input> 
          </div>
          <div class="info">
            <div>예금주 생년월일 </div>
            <input placeholder="ex) oooo.oo.oo"></input> 
          </div>
        </div>
        <button onClick={()=>{ navigate('/Main') }}>기부하기</button>
      </div>
    </>
  );
}

export default DonateMoney;