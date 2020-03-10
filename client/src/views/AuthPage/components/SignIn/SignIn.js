import React, { Component } from 'react'
import './SignIn.css'
// import db from '../../data.json'
import axios from 'axios';
import Auth from '../../../../auth/Auth.js';

import Header from "../../../../components/Header/Header"

const initState = {
  email    : '',
  password : ''
};

class SignIn extends Component {

  constructor () {
    super()
    this.state = initState;
  }

  loginUser = async (data) => {
    try {

      const result = await axios.post('/user/login' , data);
      console.log('API Result:', result.data)

      if ( result.data.error ) {
        console.log('Denied:', result.data.error)
      } else if ( ! result.data.user ) {
        console.log('Denied:', result.data.info.message)
      } else {

        const localAuth = result.data.isAuth;
        Auth.updateLocalAuth( localAuth )
        // localStorage.setItem('localAuth',localAuth);

        this.setState({ ...initState })  
        // console.log('props:', this.props.history)
        this.props.history.push('/user')
      
      }

    } catch (err) { console.log(err.message) }
  };



  handleValue = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name] : value })
  };

  submitForm = (event) => {
    event.preventDefault()
    
    const { email , password } = this.state;
    console.log('Client Data:' , { email , password })
    
    this.loginUser({ email , password })
    // this.setState({ ...initState })
  };



  render () {
    const { email , password } = this.state;
    const { handleValue , submitForm } = this;

    return (
      <div className="main-body">
       {/* <Header /> */}
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
              onChange={ handleValue }
            />
            <label htmlFor="email" className="border">
              <span className="text">
                Email
              </span>
            </label>
          </div>

          <div className="group">
            <input 
              type="text" 
              name="password" 
              className="password input"
              autoComplete="off"
              value={ password }
              onChange={ handleValue }
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
            value="LOGIN"
          />
        </form>
      </main>
    </div>
    );
  }

}



export default SignIn



