import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css'
import axios from 'axios';



const initState = {
  email: '',
  password: '',
  message: ''
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  /* check login props */
  // componentDidMount () { console.log('Login Props:' , this.props) }

  /* POST Request - login valid user */
  loginUser = async (data) => {
    try {

      const result = await axios.post('/user/login', data);
      console.log('API Result:' , result.data)
      
      if ( result.data.error ) {
      
        console.log('Denied:' , result.data.error)
      
      } else if ( !result.data.user ) {
        console.log('Denied:' , result.data.info.message)
        this.setState({ 
          message : result.data.info.message
        })
      } else {

        this.setState({ ...initState })
        const query = `?user_id=${result.data.user._id}`;

        this.props.setAuth(result.data.auth)
        this.props.history.push({
          pathname: '/user',
          search: query
        })

      }

    } catch (err) { console.log(err) }
  };


  /* targets & handles each value change */
  handleValueChange = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name]: value });
  };

  /* submit user data to axios */
  submitForm = (event) => {
    event.preventDefault()
    
    const { email , password } = this.state;
    console.log('Client Data:' , { email , password })
    this.loginUser({ email , password })
  };

  render() {
    const { email, password, message } = this.state;
    const { handleValueChange, submitForm } = this;



    return (
      <main className="login-page auth-page">
        <div className="login-content">
          <h2>Login Page</h2>
          
          {/* display error */}
          <div className="input-message">
            { 
              (typeof message === 'string') && (
                <p className="text error">
                  { message }
                </p>
              )
            }
          </div>
          
          {/* login form */}
          <form
            className="form"
            onSubmit={ submitForm }
          >
            {/* EMAIL */}
            <div className="group">
              <input
                type="text"
                name="email"
                className="email input"
                autoComplete="off"
                autoFocus
                value={ email }
                onChange={ handleValueChange }
              />
              <label htmlFor="email" className="borders">
                <span className="text">
                  Email
                </span>
              </label>
            </div>
            
            {/* PASSWORD */}
            <div className="group">
              <input
                type="password"
                name="password"
                className="password input"
                autoComplete="off"
                value={ password }
                onChange={ handleValueChange }
              />
              <label htmlFor="password" className="borders">
                <span className="text">
                  Password
                </span>
              </label>
            </div>

            <br />

            {/* login btn */}
            <input
              type="submit"
              name="login"
              className="auth-btn login-btn"
              value="Log In"
              // disabled
            />
          </form>
          
          {/* caption */}
          <p className="text-caption">
            <span>
              New to Pooch Match?
            </span>
            <br/>
            <Link to="/user/auth/sign-up">
              Create an account
            </Link>
          </p>
        </div>
      </main>
    );
  }
}

export default SignIn