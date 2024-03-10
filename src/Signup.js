import './Signup.css';
import './SignupInfo';
import axios from 'axios';
import React, {useState} from 'react';
import Modal from 'react-modal';
import { useDispatch} from 'react-redux';
import { loginUser } from "./_actions/user_actions";
import {Link} from "react-router-dom";
import checkOffIcon from './assets/Icon/checkOff.svg';
import checkOnIcon from './assets/Icon/checkOn.svg';

function Signup() {
    // const [imageSrc, setImageSrc] = useState("")
    // const [isChecked, setIsChecked] = useState(false);
    const [checkAll, setCheckAll] = useState(false);
    const [checkSep1, setCheckSep1] = useState(false);
    const [checkSep2, setCheckSep2] = useState(false);
    // const dispatch = useDispatch();
    
    
    const handleCheckAll = () => {
        setCheckAll(!checkAll);
        setCheckSep1(!checkAll);
        setCheckSep2(!checkAll);
        // setImageSrc(checkOnIcon);
    }

    const handleCheckSep1 = () => {
        setCheckSep1(!checkSep1);
        setCheckAll(checkSep2 && !checkSep1);
    }
    const handleCheckSep2 = () => {
        setCheckSep2(!checkSep2);
        setCheckAll(checkSep1 && !checkSep2);
    }

    return (
        
        <div className='SignupBody'>
            <div className='top'>
                <p className='titleText'>서비스 이용약관 동의</p>
                <p className='subText'>서비스 시작 및 가입을 위해 먼저<br/>
                가입 및 정보 제공에 동의해 주세요</p>
            </div>
            <div className='bottom'>
                <div className='bottom-input'>
                <div className='checkAll'>
                    <label className='checkAllText' htmlFor='checkAllBox'>
                        <input type='checkbox' id='checkAllBox'checked={checkAll} onChange = {handleCheckAll}>
                        </input>
                        <img src={checkAll ? checkOnIcon : checkOffIcon} alt="Checkbox"/>
                        <p>이용약관 동의(필수)</p>
                    </label>
                    
                </div>
                <div className='line'></div>
                <div className='checkSep'>
                    <label className='checkSepText' htmlFor='checkSepBox1'>
                        <input type='checkbox' id="checkSepBox1" checked={checkSep1} onChange= {handleCheckSep1}>
                        </input>
                        <img src={checkSep1 ? checkOnIcon : checkOffIcon} alt="Checkbox"/>
                        <p>서비스 이용약관(필수)</p>
                    </label>
                    <Link to ='https://www.apple.com/kr/'>
                        {/* 이용약관 링크 */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66602 4L10.4373 7.77124L6.66602 11.5425" stroke="#BDBDBD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className='checkSep'>
                    <label className='checkSepText' htmlFor='checkSepBox2'>
                        <input type='checkbox' id="checkSepBox2" checked={checkSep2} onChange= {handleCheckSep2} >
                        </input>
                        <img src={checkSep2 ? checkOnIcon : checkOffIcon} alt="Checkbox"/>
                        <p>이용약관 동의(필수)</p>
                    </label>
                    <Link to ='https://www.apple.com/kr/'>
                        {/* 이용약관 링크 */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66602 4L10.4373 7.77124L6.66602 11.5425" stroke="#BDBDBD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
                </div>
                <Link to='/SignupInfo' >
                    <button className='nextBtn' disabled={!checkAll}>
                        다음으로
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Signup;

