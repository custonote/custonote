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

    // Handle login (Awaiting backend)
    handleSubmit = (target, e) => {
        switch(target) {
            case 'form':
                console.log('FORM LOGIN');
                e.preventDefault();
                // Form login code here
                break;
            case 'fb':
                console.log('LOGIN FACEBOOK');
                // Facebook login code here
                break;
            case 'google':
                console.log('GOOGLE LOGIN');
                // Google login code here
                break;
            case 'github':
                console.log('GITHUB LOGIN');
                // Github login code here
                break;
            default:
                console.log('Sorry, your login request was not recognized.');
                break;
        }
    }

    render() {
        return (
            <div className='LoginPage'>
                <div className='login-container'>
                    <div className='cover'>
                        <h3><span>Login</span><span>Custonote</span></h3>
                    </div>
                    <div className='social-bar'>
                        <div className='login login-facebook' onClick={() => this.handleSubmit('fb')}>
                            <p>Login with Facebook</p>
                        </div>
                        <div className='login login-google' onClick={() => this.handleSubmit('google')}>
                            <p>Login with Google</p>
                        </div>
                        <div className='login login-github' onClick={() => this.handleSubmit('github')}>
                            <p>Login with Github</p>
                        </div>
                    </div>
                    <form onSubmit={(e) => this.handleSubmit('form', e)}>
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