import React from 'react'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit')
    }

    render() {
        return (
            <div className='LoginPage'>
                <div className='login-container'>
                    <div className='cover'>
                        <h3><span>Login</span><span>Custonote</span></h3>
                    </div>
                    <div className='social-bar'>
                        <div className='login login-facebook'>
                            <p>Login with Facebook</p>
                        </div>
                        <div className='login login-google'>
                            <p>Login with Google</p>
                        </div>
                        <div className='login login-github'>
                            <p>Login with Github</p>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Username' />
                        <input type='password' placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;