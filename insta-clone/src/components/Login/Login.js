import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-top: 20%;
    width: 35%;
    margin-left: 35%;
    
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
   

`

const LoginInput = styled.input`
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 5px;
`

const InstaLogo = styled.img`
    width: 35%;
    margin-left: 32%;
    margin-bottom: 25px;

`

const LoginButton = styled.button`
    width: 25%;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-left: 7%;
    padding-right: 7%;
    border-radius: 25px;
    margin-left: 35%;
`

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        const user = this.state.user
        localStorage.setItem('user', user)
        window.location.reload()
    }

    render() {
        return(
            <Wrapper>
                <InstaLogo src = 'http://pngimg.com/uploads/instagram/instagram_PNG12.png' alt =""/>
                <FormWrapper>
                    <LoginInput type = "text" onChange={this.handleChange} name = "user" value = {this.state.user} placeholder="Username">
                    </LoginInput>
                    <LoginInput type = "password" onChange={this.handleChange} name = "password" value = {this.state.password} placeholder= "Password">
                    </LoginInput>
                    <LoginButton onClick = {this.login}>Login</LoginButton>
                </FormWrapper>
            </Wrapper>

        )
    }
}





export default Login