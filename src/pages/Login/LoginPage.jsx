import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import axios from 'axios';
import { useEffect } from "react";
import * as style from "./LoginPageStyle";


function LoginPage(){

    const navigate = useNavigate();
    const [id,setId] = useState('');
    const [pw,setPw] = useState('');

    const [IdMsg, setIdMsg] = useState("");
    const [pwMsg, setPwMsg] = useState("");
    const pwCondition = /^[A-Za-z0-9]{6,20}$/;


    // const fetchData = async () => {
    //     try{
    //         const response = await axios.post(ServerURl,loginData)
    //         .then((res) => {
    //         })
    //     } catch(error){
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // },[])

    function changeButton(){
        pw.length >= 5 ? setButton(false) : setButton(true);
    }

    const [button,setButton] = useState(false);

    const gotoMain = (user) => {
        navigate(`/${user.username}`);
    }
    

    const ServerUrl = 'https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/members/login/'

    const handleLogin = async() => {
        try{
            const response = await axios.post(ServerUrl,{
                username: id,
                password: pw
            },
            {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'token',
                },
              }).then(function(response) {
                localStorage.setItem('token',response.data.access)
                console.log(response.data.access)
                alert('성공적으로 로그인 되었습니다!')
                navigate("/")
              })
        }catch(error){
            alert("로그인에 실패하였습니다.")
            console.error(error);
        }
    }
    

    return(
        <style.Wrapper>
            <style.Container>
                <style.LoginStyle>
                    <style.InputStyle>
                        <style.MyblogText>Login</style.MyblogText>
                        <style.InputBox
                            placeholder="아이디을 입력하세요"
                            id="id"
                            className="login"
                            onChange={e => {
                            setId(e.target.value);
                            }}
                        />
                        <style.InputBox
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            id="password"
                            className="login"
                            onChange={e => {
                            setPw(e.target.value);
                            }}
                            onKeyUp={changeButton}
                        />
                    </style.InputStyle>
                    <style.LoginButtonStyle>
                        <style.LoginButton
                            type="button"
                            placeholder="qfs"
                            className="loginButton"
                            disabled={button}
                            onClick={handleLogin}
                        >Login</style.LoginButton>
                    </style.LoginButtonStyle>
                    <style.SignupDiv>
                      <style.SignupButton
                        title="Create an Account"
                        onClick={() => {
                            navigate("/signup");
                         }}
                        >Create an Acctount</style.SignupButton>
                    </style.SignupDiv>
                </style.LoginStyle>
           </style.Container>
        </style.Wrapper>
    )
}

export default LoginPage;