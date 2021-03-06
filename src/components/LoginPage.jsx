import React from 'react'
import FontAwesome from 'react-fontawesome';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            doLogin: false,
            loginError: ''
        }
    }

    // Handles input username + password changes
    handleChange = e => {
        const { value, name } = e.target;

        this.setState(() => ({
            [name]: value
        }))
    }

    // Handle login (Awaiting backend)
    handleSubmit = (target, e) => {
        this.setState(() => ({
            doLogin: true
        }))

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

        /*
            IMPORTANT:
            - If the user did NOT log in (ex. wrong username / password), set the doLogin to false, 
            so the animation will run backwards. Then give the user an error message using the loginError state.
            - The backwards animation is not complete, and will probably have to wait until backend login is done
        */
    }

    render() {
        return (
            <div className='LoginPage'>
                <div className={this.state.doLogin ? 'login-container hide' : 'login-container'}>
                    <div className='cover'>
                        <h3><span>Login</span><span>Custonote</span></h3>
                    </div>
                    <div className='social-bar'>
                        <div className='login login-facebook' onClick={() => this.handleSubmit('fb')}>
                            <div className='social-icon'>
                                <FontAwesome
                                    className='icon icon'
                                    name='facebook'
                                    size='2x'
                                />
                            </div>
                            <div className='text-container'>
                                <p>Login with Facebook</p>
                            </div>
                        </div>
                        <div className='login login-google' onClick={() => this.handleSubmit('google')}>
                            <div className='social-icon'>
                                <FontAwesome
                                    className='icon icon'
                                    name='google'
                                    size='2x'
                                />
                            </div>
                            <div className='text-container'>
                                <p>Login with Google</p>
                            </div>
                        </div>
                        <div className='login login-github' onClick={() => this.handleSubmit('github')}>
                            <div className='social-icon'>
                                <FontAwesome
                                    className='icon icon'
                                    name='github'
                                    size='2x'
                                />
                            </div>
                            <div className='text-container'>
                                <p>Login with Github</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={(e) => this.handleSubmit('form', e)}>
                        <input value={this.state.username} type='text' name='username' placeholder='Username' onChange={this.handleChange} />
                        <input value={this.state.password} type='password' name='password' placeholder='Password' onChange={this.handleChange} />
                        <button>Login</button>
                    </form>
                </div>

                <div className={this.state.doLogin ? 'loader show' : 'loader'}>
                    <h2>Logging you in..</h2>
                </div>
            </div>
        )
    }
}

export default LoginPage;