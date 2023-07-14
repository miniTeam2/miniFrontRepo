import styled from "styled-components"

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const LoginButtonStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    `
 
const LoginStyle = styled.div`
    display: flex;
    justify-content : space-between;
    border: 0.5px solid grey;
    width: 30rem;
    height: 45rem;
    margin: 20px;
    padding: 20px;
    flex-direction: column;
    text-align: center;
    box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.2);
`

const InputStyle = styled.div`
    display: flex;
    justify-content : space-between;
    width: 25rem;
    height: 35rem;
    margin: 20px;
    padding: 20px;
    flex-direction: column;
    `

const MyblogText = styled.p`
    font-size: 20px;
    color: grey;`

const InputBox = styled.input`
    border: 1px solid lightgrey;
    padding-left: 20px;
    width: 25rem;
    height: 2.5rem;
    border-radius: 30px;
`

const LoginHeaderStyle = styled.header`
    border: 1px solid lightgrey;
    width: 30.8rem;
    height: 3rem;
    box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.2);
    margin: 20px;
    color: dimgrey;
    padding-left: 30px;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
`
const LoginHeaderLeft = styled.div`
    color: dimgrey;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
`
const LoginHeaderText = styled.div`
    color: dimgrey;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-text: center;
`
const LoginHeaderRight = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    border-left: 1px solid grey;
    font-size: 25px;
    display: flex;
    width: 4rem;
    justify-content: center;
`
const HeaderImage = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
`

const SignupDiv = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    `

const SignupButton = styled.button`
    font-size: 20px;
    border: none;
    height: 2.5rem;
    width: 20rem;
    background-color: grey;
    color: white;
    cursor: pointer;
    border-radius: 20px;
    `

const SignupTextStyle = styled.p`
  text-align: left;
  font-size: 13px;
  padding-left: 20px;
`

export {Wrapper, Container, 
        LoginButtonStyle, LoginHeaderLeft, LoginHeaderRight, LoginHeaderStyle, LoginStyle, LoginHeaderText,
        InputStyle, MyblogText, InputBox, HeaderImage, SignupButton,SignupTextStyle, SignupDiv}