import React, { Component } from 'react'
import './UserProfile.css'



class UserProfile extends Component {
 
  constructor () {
    super()

    this.state = {
      // email: '',
      // password: '',
      first_name: '',
      last_name: '',
      city: '',
      state: '',
      phone: '',
    };
  }



  handleValue = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name] : value })
  };

  submitForm = (event) => {
    event.preventDefault()

    console.log('User:', this.state)
    
    this.setState({ 
      // email: '', 
      password: '',
      first_name: '', 
      last_name: '',
      city: '',
      state: '',
      phone: ''
    })
  };




  render () {

    // email ,
    // password,
    const { 
      first_name , last_name,
      city , state, phone
    } = this.state;
    const { 
      handleValue , submitForm 
    } = this;


    return (
      <main className="component">
        <h2>New User Page</h2>

        <form onSubmit={ submitForm }>
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
                value={ first_name }
                onChange={ handleValue }
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
                value={ last_name }
                onChange={ handleValue }
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
                value={ city }
                onChange={ handleValue }
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
                value={ state }
                onChange={ handleValue }
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
                value={ phone }
                onChange={ handleValue }
                // required
              />
            </div>

            <input
              type="submit"
              name="submit"
              value="SUBMIT"
            />
          </fieldset>
        </form>
      </main>
    );

  }

}



export default UserProfile

/* 
= User Model =
- interests []
- pets []
- image ???
- subscription ...
*/