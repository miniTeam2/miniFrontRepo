import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import * as style from "./SignupPageStyle"

const ServerURl = 'http://localhost:4000/api/userdata'

function LoginPage(){
    const navigate = useNavigate();

    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    const [email, setemail] = useState('');
    const [nickname,setNickname] = useState('');

    const handlePostData = async () => {
      try {
        const response = await axios.post(ServerURl, {
          nickname: email,
          username: id,
          password: pw,
          email: email,
        });
        console.log(response.data); // 서버의 응답 데이터 확인
        alert('회원가입이 완료되었습니다! 로그인을 다시 해주세요 :)')
        navigate('/login')
      } catch (error) {
        console.error(error);
      }
    };

    function changeButton(){
        pw.length >= 5 ? setButton(false) : setButton(true);
    }

    const [button,setButton] = useState(false);

    const gotoMain = () => {
        navigate('/');
    }
  
    return(
        <style.Wrapper>
            <style.Container>
                <style.LoginStyle>
                    <style.InputStyle>
                        <style.MyblogText>Sign up</style.MyblogText>
                        <style.SignupTextStyle>아이디</style.SignupTextStyle>
                        <style.InputBox
                            placeholder="아이디를 입력하세요"
                            id="id"
                            className="login"
                            onChange={e => {
                            setId(e.target.value);
                            }}
                            onKeyUp={changeButton}
                        />
                        <style.SignupTextStyle>비밀번호</style.SignupTextStyle>
                        <style.InputBox
                            type="password"
                            placeholder="비밀번호"
                            id="password"
                            className="login"
                            onChange={e => {
                            setPw(e.target.value);
                            }}
                            onKeyUp={changeButton}
                        />
                        <style.SignupTextStyle>비밀번호 확인</style.SignupTextStyle>
                       <style.InputBox
                            type="password"
                            placeholder="비밀번호 확인"
                            id="pswCheck"
                            className="pswCheck"
                            onChange={e => {
                            setPw(e.target.value);
                            }}
                            onKeyUp={changeButton}
                        />
                        <style.SignupTextStyle>이메일</style.SignupTextStyle>
                       <style.InputBox
                            type="email"
                            placeholder="이메일을 입력하세요"
                            id="email"
                            className="email"
                            onChange={e => {
                            setNickname(e.target.value);
                            }}
                        />
                        <style.SignupTextStyle>닉네임</style.SignupTextStyle>
                       <style.InputBox
                            type="nickname"
                            placeholder="닉네임을 입력하세요"
                            id="nickname"
                            className="nickname"
                            onChange={e => {
                            setNickname(e.target.value);
                            }}
                        />
                    </style.InputStyle>
                    <style.SignupDiv>
                      <style.SignupButton
                        title="Create an Account"
                        onClick={handlePostData}
                        >Sign up!</style.SignupButton>
                    </style.SignupDiv>
                </style.LoginStyle>
           </style.Container>
        </style.Wrapper>
    )
}

export default LoginPage;