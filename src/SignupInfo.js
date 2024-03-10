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

    //입력값 확인
    const checkEmailValid = () => {
        const isValid = Email.includes("@");
        setIsValidEmail(isValid);
        checkButtonActivation();
    }
    const checkPasswordValid = () => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        const isValid = regex.test(Password);
        setIsValidPassword(isValid);
        checkButtonActivation();
    }
    const checkPasswordCheckValid = () => {
        const isValid = (Password === PasswordCheck);
        setIsValidPasswordCheck(isValid);
        checkButtonActivation();
    }

    const checkValid = async () => {
        try {
            const response = await axios.post('', {email: Email, password: Password});
            const isValid = response.data.isValid;

        } catch(error) {
            console.error('Error checking validity:', error);
        }
    }
    // const emailExist = () => {
    //     if(이메일이 이미 있다면){
    //         isEmailAlreadyExists(true);
    //     }
    //     else {
    //         isEmailAlreadyExists(false);
    //     }
    // }

    //버튼 활성화
    const checkButtonActivation = () => {
        const buttonDisabled = (isValidEmail && isValidPassword && isValidPasswordCheck);
        setButtonDisabled(buttonDisabled);
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
                    <p className={`${Email && !isValidEmail ? 'invalidText' : 'inputBoxSub'}`}>
                        {Email && !isValidEmail ? '이메일을 다시 확인해주세요' : '추후 로그인 시 아이디로 사용되어요'}
                    </p>
                    <input type='email' 
                            className={`${Email && !isValidEmail ? 'invalid' : 'userInfoBoxInput'}`}
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
                    <p className={`${Password && !isValidPassword ? 'invalidText' : 'inputBoxSub'}`}>
                        {Password && !isValidPassword ? '다시 한번 비밀번호를 확인해주세요' : '영문, 숫자, 특수문자가 모두 들어간 8-16글자'}
                    </p>
                    <input type='password' 
                            className={`${Password && !isValidPassword ? 'invalid' : 'userInfoBoxInput'}`}
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
                    <p className={`${PasswordCheck && !isValidPasswordCheck ? 'invalidText' : 'inputBoxSub'}`}>
                        {PasswordCheck && !isValidPasswordCheck ? '비밀번호와 일치하지 않아요' : ''}
                    </p>
                    <input type='password'
                        className={`${PasswordCheck && !isValidPasswordCheck ? 'invalid' : 'userInfoBoxInput'}`}
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
                       disabled={!isValidEmail || !isValidPassword || !isValidPasswordCheck}
                       onClick={onSubmitHandler}
                       >
                    <Link to ='' >공팅 시작하기</Link>
                </button>
            </div>
        </div>
    );
}
  
  
export default SignupInfo;