import React, { Component } from 'react'
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

  // componentDidMount () { console.log('Login Props:' , this.props) }

  /* POST Request - login valid user */
  loginUser = async (data) => {
    try {
      
      const result = await axios.post('/user/login', data);
      console.log('API Result:' , result.data)
      
      if ( result.data.error ) {
      
        console.log('Denied:' , result.data.error)
      
      } else if ( !result.data.user ) {
        console.log(
          'Denied:' , 
          result.data.info.message
        )
        this.setState({ 
          message : result.data.info.message
        })
      } else {

        this.setState({ ...initState })
        const query = `?user_id=${result.data.user._id}`;
        
        this.props.setAuth( result.data.auth )
        this.props.history.push({
          pathname: '/user',
          search: query
        })
        
      }

    } catch (err) { console.log(err) }
  };


  /* targets & handles each value change */
  handleValueChange = (event) => {
    const { name, value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name] : value });
  };

  /* submit user data to axios */
  submitForm = (event) => {
    event.preventDefault()
    const { email, password } = this.state;
    console.log('Client Data:', { email , password })
    this.loginUser({ email , password })
  };

  render() {
    const { email , password , message } = this.state;
    const { handleValueChange , submitForm } = this;



    return (
      <div className="main-body">
        <div className="container" align="center">
          <main className="login-page">
            <h2>Login Page</h2>
            <form
              className="form"
              onSubmit={ submitForm }
            >
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
                <label htmlFor="email" className="border">
                  <span className="text">
                    Email
                </span>
                </label>
              </div>
              
              <div>
                <input
                  type="text"
                  name="password"
                  className="password input"
                  autoComplete="off"
                  value={ password }
                  onChange={ handleValueChange }
                />
                <label htmlFor="password" className="border">
                  <span className="text">
                    Password
                </span>
                </label>
              </div>

              <br />

              <input
                type="submit"
                name="login"
                className="login-btn"
                value="Log In"
              />
            </form>
            <div>
              { message && <p>{ message }</p> }
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default SignIn