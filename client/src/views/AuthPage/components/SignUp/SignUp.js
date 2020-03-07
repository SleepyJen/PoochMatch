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
  states: '',
  phone: '',
};

class SignUp extends Component {

  constructor() {
    super();
    this.state = initState;
  }

  //gets all states from the json file for States in USA
  statesListOpt = () => {
    return allStatesList.map((states, id) => (
      <option
        key={id}
        value={states.abbreviation}
      >{states.name}
      </option>
    ));
  };

  createUser = async (data) => {
    try {

      const result = await axios.post(
        '/user/createNewUser', {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        email: data.email,
        City: data.City,
        State: data.states,
        phone: data.phone
      }
      );
      console.log('API Result:', result.data)
    } catch (err) {
      console.log(err.message)
    }
  };

  //handles every on change value
  handleValue = (event) => {
    const { name, value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name]: value })
  };

  submitForm = (event) => {
    event.preventDefault()

    const user_data = this.state;
    console.log('Client Data:', user_data)

    /*  */
    // let user = db.find( user => (user.email === email));
    // if (!user) {
    //   console.log('User: ——— √')
    //   db.push({ id:++db.length , email , password })
    //   console.log(db)
    // }
    /*  */

    this.createUser(user_data)
    this.setState({ ...initState })
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      City,
      states,
      phone
    } = this.state;
    const {
      handleValue,
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
              onChange={handleValue}
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
              onChange={handleValue}
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
              onChange={handleValue}
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
              onChange={handleValue}
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
              onChange={handleValue}
            />
            <label htmlFor="City" className="border">
              <span className="text">
                City *
              </span>
            </label>
          </div>

          <select
            form="states"
            name="states"
            className="states"
            defaultValue={states}
            onChange={handleValue}
          >
            <option hidden>
              — Select State * —
            </option>
            {
              this.statesListOpt()
            }
          </select>

          <div className="group">
            <input
              type="text"
              name="phone"
              className="phone input"
              autoComplete="off"
              value={phone}
              onChange={handleValue}
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

        {/* <div className="img-comp">
          <img 
            src="/assets/images/photo-1534351450181-ea9f78427fe8.jfif" 

            alt="register-img"
          />
        </div> */}
      </main>
      </div>
    );
  }

}



export default SignUp



/*
            <div className="group">
              <input
                type="text"
                name="___"
                className="___ input"
                autoComplete="off"
                value={ ___ }
                onChange={ handleValue }
              />
              <label htmlFor="___" className="border">
                <span className="___">
                  ___
                </span>
              </label>
            </div>
*/


/*
<div className="group">
<input
  type="text"
  name="state"
  className="state input"
  autoComplete="off"
  value={ state }
  onChange={ handleValue }
/>
<label htmlFor="state" className="border">
  <span className="text">
    State *
  </span>
</label>
</div>
 */