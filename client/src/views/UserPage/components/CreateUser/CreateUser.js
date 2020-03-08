import React, { Component } from 'react'
import './CreateUser.css'



const initState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  city: '',
  states: '',
  phone: '',
};

class CreateUser extends Component {

  constructor() {
    super()
    this.state = initState;
  }



  handleValue = (event) => {
    const { name, value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name]: value })
  };

  submitForm = (event) => {
    event.preventDefault()

    console.log('User Data:', this.state)

    this.setState({ ...initState })
  };




  render() {

    const {
      first_name,
      last_name,
      city,
      state,
      phone
    } = this.state;
    const {
      handleValue,
      submitForm
    } = this;



    return (
      <section className="component">
        <h2>This page displays your information.</h2>

        <form onSubmit={submitForm}>
          <fieldset>
            <legend>User Form</legend>

            <div>
              <label htmlFor="first_name">
                *First Name:
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="enter here"
                autoComplete="off"
                value={first_name}
                onChange={handleValue}
                autoFocus
              // required
              />
            </div>

            <div>
              <label htmlFor="last_name">
                *Last Name:
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="enter here"
                autoComplete="off"
                value={last_name}
                onChange={handleValue}
              // required
              />
            </div>

            <div>
              <label htmlFor="city">
                *City:
              </label>
              <input
                type="text"
                name="city"
                placeholder="enter city"
                autoComplete="off"
                value={city}
                onChange={handleValue}
              // required
              />
            </div>

            <div>
              <label htmlFor="state">
                *State:
              </label>
              <input
                type="text"
                name="state"
                placeholder="enter state"
                autoComplete="off"
                value={state}
                onChange={handleValue}
              // required
              />
            </div>

            <div>
              <label htmlFor="phone">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                placeholder="enter your phone #"
                autoComplete="off"
                value={phone}
                onChange={handleValue}
              // required
              />
            </div>

            <input
              type="submit"
              name="save"
              className="save-btn"
              value="SAVE"
            />
          </fieldset>
        </form>
      </section>
    );

  }

}



export default CreateUser

/*
= User Model =
- interests []
- pets []
- image ???
- subscription ...
*/