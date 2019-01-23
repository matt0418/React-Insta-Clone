import React from 'react'

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
            <div className="login-wrapper">
                <form>
                    <input type = "text" onChange={this.handleChange} name = "user" value = {this.state.user} placeholder="Username">
                    </input>
                    <input type = "password" onChange={this.handleChange} name = "password" value = {this.state.password} placeholder= "Password">
                    </input>
                </form>
                <button onClick = {this.login}>Login</button>
            </div>

        )
    }
}





export default Login