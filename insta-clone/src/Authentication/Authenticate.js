import React from 'react'

const Authenticate = App => Login =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({
                    loggedIn: false
                })
            } else {
                this.setState({
                    loggedIn: true
                })
                window.localStorage.clear()
            }
        }

        render() {
            if (this.state.loggedIn === false) {
                return <Login />
            } else {
                return <App />
            }
        }
    }


export default Authenticate   