import React, { Component } from 'react'
import './SignIn.css'
// import db from '../../data.json'



const initState = {
  email    : '',
  password : ''
};

class SignIn extends Component {

  constructor () {
    super()
    this.state = initState;
  }



  handleValue = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name] : value })
  };

  submitForm = (event) => {
    event.preventDefault()
    
    const { email , password } = this.state;
    console.log('Client Data:' , { email , password })

    /*  */
    // let user = db.find( user => (user.email === email));
    // if (user) { console.log('User:', user, '√') }
    /*  */
    
    this.setState({ ...initState })
  };



  render () {
    const { email , password } = this.state;
    const { handleValue , submitForm } = this;

    return (
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
        <div className="img-comp">
          <img 
            src="/assets/images/photo-1518020382113-a7e8fc38eac9.jfif" 
            alt="register-img"
          />
        </div>
      </main>
    );
  }

}



export default SignIn



/* 
            <div class="group">
              <input 
                type="text" 
                name="text" 
                class="text input"
                autocomplete="off"
                autofocus
              />
              <label for="text" class="border">
                <span class="text">
                  Text
                </span>
              </label>
            </div>
*/