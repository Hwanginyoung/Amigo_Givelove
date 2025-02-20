import React, { useState } from 'react';
import './MakeArticle.css';
import {useNavigate} from 'react-router-dom';
import Checkbox from './Checkbox';
import CollectionMethod from './CollectionMethod';
import Post from '../components/Post';

const MakeArticle = () => {
    const [text, setText] = useState('');

    const [save, setSave] = useState('');
 
    const onChange = (e) => {
        setText(e.target.value);
    };

    const [word, setWord] = useState(0)

    let navigate=useNavigate();
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

    // const [fileImage, setFileImage] = useState("");

    // // 파일 저장
    // const saveFileImage = (e) => {
    //     setFileImage(URL.createObjectURL(e.target.files[0]));
    // };

    // // 파일 삭제
    // const deleteFileImage = () => {
    //     URL.revokeObjectURL(fileImage);
    //     setFileImage("");
    // };
    return (
        <div className="MakeArticle">
            <header>
                <div className="name">
                    <p className="title">물품 기부 만들기</p>
                </div>
                <div className='main_text'>
                    <p className='text'>기부 설명</p>
                    <textarea className='explanation' />
                    <p className='text'>기부 받고 싶은 물품 목록</p>
                    <div className='give_thing'>
                        <input className='thing' onChange={onChange} value={text} />
                        <button className='add' onClick={() => {
                            setWord(1)
                            setText('')
                            setSave(text)
                            }}>추가</button>
                        {
                            word===1 ? <div><button>{save}</button></div> : null
                        }
                    </div>
                    <p className='text'>주소</p>
                    <div className='juso'>
                        <input className='address' type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                        <button className='find' onClick={handleComplete}>찾기</button>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                    </div>
                    <input className='address2' />
                    <div className='cartagori'>    
                        <div className='check-container2'>
                            <p className='cartagori_text'>기부 수거 방법</p>
                            <CollectionMethod />
                        </div>
                        <div>
                            <p className='cartagori_text'>카테고리 선택</p>
                            <Checkbox />
                        </div>
                    </div>
                    <p className='text'>이미지<p className='detail_text'>최대 3개까지 등록 가능합니다.</p></p>
                    <div className='under_text'>
                        <div className='pictures'>
                            <label className='image' for='image1'>
                            </label>
                            <input id='image1' type='file' style={{display: "none"}} />
                            <label className='image' for='image2'>
                            </label>
                            <input id='image2' type='file' style={{display: "none"}} />
                            <label className='image' for='image3'>
                            </label>
                            <input id='image3' type='file' style={{display: "none"}} />
                        </div>
                        <div className='button'>
                            <button className='back' onClick={()=>{ navigate('/MoneyDetail') }}>뒤로가기</button>
                            <button className='make_donation'>기부 만들기</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default MakeArticle;