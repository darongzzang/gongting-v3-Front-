import './Signup.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import { useDispatch} from 'react-redux';
import { loginUser } from "./_actions/user_actions";

function SignupInfo() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordCheck, setPasswordCheck] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(false);
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
    const onPasswordCheckHandler = (event) => {
        const passwordCheckValue = event.currentTarget.value;
        setPasswordCheck(passwordCheckValue);
        checkPasswordCheckValid(passwordCheckValue);
    }
    const onSubmitHandler = (event) => {
        // 리프레시 방지
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);
        console.log('PasswordCheck', PasswordCheck);

        checkValid();
        dispatch(loginUser({email: Email, password: Password, passwordcheck: PasswordCheck}));
    }
    const checkEmailValid = () => {
        const isValid = Email.includes("@");
        setIsValidEmail(isValid);
        checkButtonActivation();
    }
    const checkPasswordValid = () => {
        const isValid = Password.length >= 7;
        setIsValidPassword(isValid);
        checkButtonActivation();
    }
    const checkPasswordCheckValid = () => {
        const isValid = (Password === PasswordCheck);
        setIsValidPasswordCheck(isValid);
        checkButtonActivation();
    }

    const checkButtonActivation = () => {
        const buttonDisabled = (isValidEmail && isValidPassword && isValidPasswordCheck);
        setButtonDisabled(buttonDisabled);
    }
    const checkValid = async () => {
        try {
            const response = await axios.post('', {email: Email, password: Password});
            const isValid = response.data.isValid;

        } catch(error) {
            console.error('Error checking validity:', error);
        }
    }
   

    return (
        <div className='SignupInfoBody'>
            <p className='titleText'>
                공팅을 시작하기 위해<br/>
                아래 정보를 입력해주세요
            </p>
            <div className='inputBoxes'>
                <div className='userInfoBox'>
                    <p className='userInfoBoxTitle'>
                        이메일
                    </p>
                    <p className='inputBoxSub'>
                        추후 로그인 시 아이디로 사용되어요
                    </p>
                    <input type='email' 
                            value={Email}
                            onBlur={() => checkEmailValid(Email)}
                            onChange={onEmailHandler}
                            placeholder='이메일을 입력해주세요'>
                    </input>
                </div>
                <div className='userInfoBox'>
                    <p className='userInfoBoxTitle'>
                        비밀번호
                    </p>
                    <p className='inputBoxSub'>
                        영문, 숫자, 특수문자가 모두 들어간 8-16글자
                    </p>
                    <input type='password' 
                            value={Password}
                            onBlur={() => checkPasswordValid(Password)}
                            onChange={onPasswordHandler}
                            placeholder='비밀번호를 입력해주세요'>
                    </input>
                </div>
                <div className='userInfoBox'>
                    <p className='userInfoBoxTitle'>
                        비밀번호 확인
                    </p>
                    <input type='password'
                        value={PasswordCheck}
                        onBlur={() => checkPasswordCheckValid(Password)}
                        onChange={onPasswordCheckHandler} 
                            placeholder='비밀번호를 한번 더 입력해주세요'>

                    </input>
                </div>
            </div>
            <div className='bottom'>
                <button className= "infoActiveBtn" 
                       /* 데이터 전송하는 곳 */
                       formAction='' 
                       disabled={buttonDisabled}
                       onClick={onSubmitHandler}
                       >
                    <Link to ='' disabled={buttonDisabled}>공팅 시작하기</Link>
                </button>
            </div>
        </div>
    );
}
  
  
export default SignupInfo;