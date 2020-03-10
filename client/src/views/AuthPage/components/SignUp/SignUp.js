import React, { Component } from 'react'
import './SignUp.css'
// import db from '../../data.json'
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
};

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = initState;
  }

  //gets all states from the json file for States in USA
  statesListOption = () => {
    return allStatesList.map((state, id) => (
      <option
        key={id}
        value={state.abbreviation}
      >{state.name}
      </option>
    ));
  };

  // createUser = async (data) => {
  //   try {
      
  //     let em = data.email;
  //     const lookupEmail = await axios.get(`/user/getByEmail/${em}`);
  //     console.log(lookupEmail);
  //     if (lookupEmail) {
  //       alert('email already registered');
  //     } else {
  //       const result = await axios.post(
  //         '/user/createNewUser', {
  //         firstName: data.firstName,
  //         lastName: data.lastName,
  //         password: data.password,
  //         email: data.email,
  //         City: data.City,
  //         State: data.states,
  //         phone: data.phone
  //       });
  //       console.log('API Result:', result.data);
  //     }

  //   } catch (err) { 
  //     console.log(err.message) 
  //   }
  // };

/*  */
  createUser = async (data) => {
    try {

      const result = await axios.post('/user/sign-up', data);
      console.log('API Result:', result.data)

      if ( result.data.error ) {
        console.log('Denied:', result.data.error)
      } else if ( ! result.data.user ) {
        console.log('Denied:', result.data.info.message)
      } else {

        this.setState({ ...initState }) 
        console.log('props:', this.props.history)
        this.props.history.push('/user/auth/sign-in')

      }
    
    } catch (err) { console.log(err) }
  };
/*  */

  //handles every on change value
  handleValueChange = (event) => {
    const { name, value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name] : value })
  };

  submitForm = (event) => {
    event.preventDefault()

    const userData = this.state;
    console.log('Client Data:', userData)

    this.createUser(userData)
    // this.setState({ ...initState })
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      City,
      States,
      phone
    } = this.state;
    const {
      handleValueChange,
      submitForm
    } = this;

    return (
      <div className="main-body">
        <main className="register-page">
          <h2>Register Page</h2>
          <form
            className="form"
            onSubmit={submitForm}
          >
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
                <span className="text">
                  Email *
              </span>
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
                <span className="text">
                  Password *
              </span>
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
                <span className="text">
                  First Name *
              </span>
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
                <span className="text">
                  Last Name *
              </span>
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
                <span className="text">
                  City *
              </span>
              </label>
            </div>

            <select
              form="State"
              name="State"
              className="State"
              defaultValue={States}
              onChange={handleValueChange}
            >
              <option hidden>— Select State * —</option>
              { this.statesListOption() }
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
                <span className="text">
                  Phone
                </span>
              </label>
            </div>

            <br />

            <input
              type="submit"
              name="sign_up"
              className="sign-up-btn"
              value="SIGN-UP"
            />
          </form>
        </main>
      </div>
    );
  }

}



export default SignUp