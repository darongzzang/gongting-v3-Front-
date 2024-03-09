import './Login.css';
import axios from 'axios';
import React, {useState} from 'react';
import Modal from 'react-modal';
import {ModalBg} from 'react-modal'
// import styled from "styled-components";
import { useDispatch} from 'react-redux';
import { loginUser } from "./_actions/user_actions";
import {Link} from "react-router-dom";
// import { isDisabled } from '@testing-library/user-event/dist/utils';

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const dispatch = useDispatch();
    //핸들러
    const onEmailHandler = (event) => {
        const emailValue = event.currentTarget.value;
        setEmail(emailValue);
        checkEmailValid(emailValue);
    }
    const onPasswordHandler = (event) => {
        const passwordValue = event.currentTarget.value;
        setPassword(passwordValue);
        checkPasswordValid(passwordValue);
    }
    const onSubmitHandler = (event) => {
        // 리프레시 방지
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);

        checkValid();
        dispatch(loginUser({email: Email, password: Password}));
    }

    //value 체크
    const checkEmailValid = () => {
        const isValid = Email.includes("@");
        setIsValidEmail(isValid);
        checkButtonActivation();
    }
    const checkPasswordValid = () => {
        const isValid = Password.length >= 5;
        setIsValidPassword(isValid);
        checkButtonActivation();
    }

    const checkButtonActivation = () => {
        const isButtonDisabled = !(isValidEmail && isValidPassword);
        setButtonDisabled(isButtonDisabled);
    }
   
    const checkValid = async () => {
        try {
            const response = await axios.post('', {email: Email, password: Password});
            const isValid = response.data.isValid;

            if(!isValid) {
                setIsModalOpen(true);
            }
        } catch(error) {
            console.error('Error checking validity:', error);
        }
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        
        <div className='background'>
            <div className="LoginLogo">
                <div className='LoginLogoTop'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="47" viewBox="0 0 70 47" fill="none">
  <path d="M1.58512 0H34.5942C43.1027 0 50.0098 6.91137 50.0098 15.4241C50.0098 23.9369 43.1018 30.8483 34.5933 30.8483H22.8022C10.2174 30.8474 0 20.625 0 8.03299V1.58591C0 0.710279 0.709924 0 1.58512 0Z" fill="url(#paint0_linear_2306_79)"/>
  <g filter="url(#filter0_b_2306_79)">
    <path d="M68.4149 47.002L35.4058 47.002C26.8973 47.002 19.9894 40.0906 19.9894 31.5778C19.9894 23.0651 26.8973 16.1537 35.4058 16.1537H47.1969C59.7818 16.1537 70 26.3762 70 38.9681V45.416C70 46.2917 69.2901 47.002 68.4149 47.002Z" fill="#AFA1FF" fill-opacity="0.5"/>
    <path d="M68.4149 46.502L35.4058 46.502C27.1737 46.502 20.4894 39.8147 20.4894 31.5778C20.4894 23.341 27.1737 16.6537 35.4058 16.6537H47.1969C59.5054 16.6537 69.5 26.6521 69.5 38.9681V45.416C69.5 46.0158 69.0137 46.502 68.4149 46.502Z" stroke="url(#paint1_linear_2306_79)"/>
  </g>
  <defs>
    <filter id="filter0_b_2306_79" x="-0.0107422" y="-3.84631" width="90.0107" height="70.8483" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2306_79"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2306_79" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_2306_79" x1="50.0481" y1="31.1684" x2="0.216105" y2="-0.197361" gradientUnits="userSpaceOnUse">
      <stop offset="0.11069" stop-color="#646AFF"/>
      <stop offset="1" stop-color="#7D67FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2306_79" x1="70" y1="47.002" x2="29.6154" y2="14.6943" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B3A6FF"/>
      <stop offset="1" stop-color="white"/>
    </linearGradient>
  </defs>
                    </svg>
                    <p>설레는 만남은 공팅에서</p>
                </div>
                <div className='LoginLogoBtm'>
                    <p>처음 이용하시나요?</p>
                    <Link to='./' >회원가입</Link>
                </div>
            </div>
            <form>
                <div className='inputArea'>
                    <p className='inputText'>이메일</p>
                    <input className="inputBox" 
                           type='email' 
                           value={Email} 
                           onBlur={() => checkEmailValid(Email)} 
                           onChange={onEmailHandler} 
                           placeholder='abs@tukorea.ac.kr'/>
                    <p className='inputText'>비밀번호</p>
                    <input className="inputBox" 
                           type='password' 
                           value={Password} 
                           onBlur={() => checkPasswordValid(Password)} 
                           onChange={onPasswordHandler} 
                           placeholder='비밀번호를 입력해주세요.'/>
                    <button className= "activeBtn" 
                            /* 데이터 전송하는 곳 */
                            formAction='' 
                            disabled={buttonDisabled}
                            onClick={onSubmitHandler}
                            >
                        <Link to ='./'>로그인</Link>
                    </button>
                </div>
            </form>
                <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                    <div className="PassWdMismatch">
                        <p id="PopupText">이메일 또는 비밀번호가 틀렸습니다.</p>
                        <button id="PopupButton">확인</button>
                    </div>
                </Modal>
            <div id='findPasswd'>
                <Link to ="./">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>
    )
}

export default Login;