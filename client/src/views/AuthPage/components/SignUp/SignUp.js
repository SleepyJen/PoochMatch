import React, { Component } from 'react'
import './SignUp.css'
import allStatesList from './all-states-list.json'
import axios from 'axios';



const initState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
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
          'Denied:', result.data.error.errors
        )
        this.setState({
          error: result.data.error.errors
        })

      } else if (!result.data.user) {
        console.log(
          'Denied:', result.data.info.message
        )
        this.setState({
          error: result.data.info.message
        })

      } else {

        this.setState({ ...initState })
        this.props.history.push('/user/auth/sign-in')

      }
    } catch (err) {
      console.log(err);
    }
  };

  /* displays all states in <option> tag */
  displayStatesListOption = () => {
    return allStatesList.map((state, id) => (
      <option
        key={id}
        value={state.abbreviation}
      >{state.name}
      </option>
    ));
  };

  /* displays correct error message */
  displayErrors = (err) => {
    if (Array.isArray(err)) {
      return (
        <ul>
          {
            err.map((error, id) => (
              <li key={id}>
                {error.msg}
              </li>
            ))
          }
        </ul>
      );
    }

    if (err && (typeof err === 'string')) {
      return (<p>{err}</p>);
    }
  };

  /* targets & handles each value change */
  handleValueChange = event => {
    const { name, value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name]: value });
  };


  /* submit user data to axios */
  submitForm = (event) => {
    event.preventDefault()

    const userData = this.state;
    console.log("Client Data:", userData);

    this.createUser(userData)
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
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
      <div className="main-body">
        {/* <Header /> */}
        <div className="container" align="center">
          <main className="register-page">
            <h2>Register Page</h2>
            <form className="form" onSubmit={submitForm}>
              <div className="group">
                <input
                  type="text"
                  name="email"
                  className="email input"
                  autoComplete="off"
                  autoFocus
                  value={email}
                  onChange={handleValueChange}
                />
                <label htmlFor="email" className="border">
                  <span className="text">Email *</span>
                </label>
              </div>

              <div className="group">
                <input
                  type="text"
                  name="password"
                  className="password input"
                  autoComplete="off"
                  value={password}
                  onChange={handleValueChange}
                />
                <label htmlFor="password" className="border">
                  <span className="text">Password *</span>
                </label>
              </div>

              <div className="group">
                <input
                  type="text"
                  name="firstName"
                  className="firstName input"
                  autoComplete="off"
                  value={firstName}
                  onChange={handleValueChange}
                />
                <label htmlFor="firstName" className="border">
                  <span className="text">First Name *</span>
                </label>
              </div>

              <div className="group">
                <input
                  type="text"
                  name="lastName"
                  className="lastName input"
                  autoComplete="off"
                  value={lastName}
                  onChange={handleValueChange}
                />
                <label htmlFor="lastName" className="border">
                  <span className="text">Last Name *</span>
                </label>
              </div>

              <div className="group">
                <input
                  type="text"
                  name="City"
                  className="City input"
                  autoComplete="off"
                  value={City}
                  onChange={handleValueChange}
                />
                <label htmlFor="City" className="border">
                  <span className="text">City *</span>
                </label>
              </div>

              <select
                form="State"
                name="State"
                className="State"
                defaultValue={State}
                onChange={handleValueChange}
              >
                <option hidden>— Select State * —</option>
                {this.displayStatesListOption()}
              </select>

              <div className="group">
                <input
                  type="text"
                  name="phone"
                  className="phone input"
                  autoComplete="off"
                  value={phone}
                  onChange={handleValueChange}
                />
                <label htmlFor="phone" className="border">
                  <span className="text">Phone</span>
                </label>
              </div>

              <br />

              <input
                type="submit"
                name="sign_up"
                className="sign-up-btn"
                value="Sign Up"
              />
            </form>
            {this.displayErrors(error)}
          </main>
        </div>
      </div>
    );
  }
}

export default SignUp;
