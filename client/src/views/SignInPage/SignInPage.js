import React, { Component } from 'react'
import './SignInPage.css'



class SignInPage extends Component {

  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }



  handleValue = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, value)
    this.setState({ [name] : value })
  };

  submitForm = (event) => {
    event.preventDefault()
    
    const { email, password } = this.state;
    console.log({email , password});
    
    this.setState({ email:'' , password:'' })
  };



  render () {
    const { email , password } = this.state;
    const { handleValue , submitForm } = this;

    return (
      <div className="App">
        <form onSubmit={ submitForm } >
          <fieldset>
            <legend>Class Comp</legend>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              autoComplete="off"
              autoFocus
              value={ email }
              onChange={ handleValue }
              // required
            />
            <br/>
            <input
              type="text"
              name="password"
              placeholder="enter password"
              autoComplete="off"
              value={ password }
              onChange={ handleValue }
              // required
            />
            <br/>
            <input
              type="submit"
              name="submit"
              value="SUBMIT"
            />
          </fieldset>
        </form>
      </div>
    );
  }

}



export default SignInPage