import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'
import allStatesList from './all-states-list.json'
import axios from 'axios';



const initState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cPassword: '',
  City: '',
  State: '',
  phone: '',
  error: ''
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }


  /* POST request - register new user */
  createUser = async (data) => {
    try {
      const result = await axios.post("/user/sign-up", data);
      console.log("API Result:", result.data);

      if (result.data.error) {
        console.log(
          // 'Denied:', result.data.error.errors
          'Denied:', result.data.error
        )
        this.setState({
          // error : result.data.error.errors
          error : result.data.error
        })

      } else if (!result.data.user) {
        console.log(
          'Denied:', result.data.info.message
        )
        this.setState({
          error : result.data.info.message
        })

      } else {

        this.setState({ ...initState })
        this.props.history.push('/user/auth/sign-in')

      }
    } catch (err) { console.log(err) }
  };

  /* targets & handles each value change */
  handleValueChange = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name] : value });
  };


  /* submit user data to axios */
  submitForm = (event) => {
    event.preventDefault()

    const userData = this.state;
    console.log("Client Data:", userData);
    this.createUser(userData)
  };

  /* displays all states in <option> tag */
  displayStatesListOption = () => {
    return allStatesList.map( (state , id) => (
      <option key={id} value={ state.abbreviation }>
        { state.name }
      </option>
    ));
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      cPassword,
      City,
      State,
      phone,
      error
    } = this.state;
    const {
      handleValueChange,
      submitForm
    } = this;

    return (
      <main className="register-page auth-page">
        <div className="register-content">
          <h2>Register Page</h2>

          {/* display error */}
          <div className="input-message">
            { 
              (typeof error === 'string') && (
                <p className="text error">
                  { error }
                </p>
              )
            }
          </div>

          {/* register form */}
          <form 
            className="reg-form form" 
            // onSubmit={ submitForm }
          >
            {/* FIRST NAME */}
            <div className="grid-first-name group">
              <input
                type="text"
                name="firstName"
                className="firstName input"
                autoComplete="off"
                value={ firstName }
                onChange={ handleValueChange }
                autoFocus
              />
              <label htmlFor="firstName" className="borders">
                <span className="text">
                  First Name *
                </span>
                {
                  (
                    (typeof error === 'object') &&
                    error.firstName
                  ) && 
                  (
                    <span className="text error">
                      { error.firstName.msg }
                    </span>
                  ) 
                }
              </label>
            </div>
            
            {/* LAST NAME */}
            <div className="grid-last-name group">
              <input
                type="text"
                name="lastName"
                className="lastName input"
                autoComplete="off"
                value={ lastName }
                onChange={ handleValueChange }
              />
              <label htmlFor="lastName" className="borders">
                <span className="text">
                  Last Name *
                </span>
                {
                  (
                    (typeof error === 'object') &&
                    error.lastName
                  ) &&
                  (
                    <span className="text error">
                      { error.lastName.msg }
                    </span>
                  ) 
                }
              </label>
            </div>

            {/* EMAIL */}
            <div className="grid-email group">
              <input
                type="text"
                name="email"
                className="email input"
                autoComplete="off"
                value={ email }
                onChange={ handleValueChange }
              />
              <label htmlFor="email" className="borders">
                <span className="text">
                  Email *
                </span>
                {
                  (
                    (typeof error === 'object') &&
                    error.email
                  ) &&
                  (
                    <span className="text error">
                      { error.email.msg }
                    </span>
                  ) 
                }
              </label>
            </div>

            {/* PASSWORD */}
            <div className="grid-password group">
              <input
                type="text"
                name="password"
                className="password input"
                autoComplete="off"
                value={ password }
                onChange={ handleValueChange }
              />
              <label htmlFor="password" className="borders">
                <span className="text">
                  Password *
                </span>
                {
                  (
                    (typeof error === 'object') &&
                    error.password
                  ) &&
                  (
                    <span className="text error">
                      { error.password.msg }
                    </span>
                  ) 
                }
              </label>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="grid-cPassword group">
              <input
                type="text"
                name="cPassword"
                className="cPassword input"
                autoComplete="off"
                value={ cPassword }
                onChange={ handleValueChange }
              />
              <label htmlFor="cPassword" className="borders">
                <span className="text">
                  Confirm Password *
                </span>
                {
                  (
                    (typeof error === 'object') &&
                    error.cPassword
                  ) &&
                  (
                    <span className="text error">
                      { error.cPassword.msg }
                    </span>
                  ) 
                }
              </label>
            </div>

            {/* CITY */}
            <div className="grid-City group">
              <input
                type="text"
                name="City"
                className="City input"
                autoComplete="off"
                value={ City }
                onChange={ handleValueChange }
              />
              <label htmlFor="City" className="borders">
                <span className="text">
                  City *
                </span>
              </label>
            </div>
            
            {/* STATE */}
            <div className="grid-State">
              <select
                form="State"
                name="State"
                className="State input"
                defaultValue={ State }
                onChange={ handleValueChange }
              >
                <option hidden>— Select State * —</option>
                { this.displayStatesListOption() }
              </select>
            </div>

            {/* PHONE */}
            <div className="grid-phone group">
              <input
                type="number"
                name="phone"
                className="phone input"
                autoComplete="off"
                value={ phone }
                onChange={ handleValueChange }
                min="0"
              />
              <label htmlFor="phone" className="borders">
                <span className="text">
                  Phone
                </span>
              </label>
            </div>
          </form>

          {/* register btn --- */}
          <button
            type="submit"
            name="sign-up"
            className="auth-btn sign-up-btn"
            onClick={ submitForm }
          >Sign Up
          </button>

          <br/>
          <br/>

          {/* caption */}
          <p className="text-caption">
            <span>
              Have an account?
            </span>
            <br/>
            <Link to="/user/auth/sign-in">
              Login now
            </Link>
          </p>
        </div>
      </main>
    );
  }
}

export default SignUp;



/* 
<br/>

<div className="grid-btn">
  <input
    type="submit"
    name="sign-up"
    className="auth-btn sign-up-btn"
    value="Sign Up"
    // disabled
  />
</div>
</form> 
*/