import React, { Component } from 'react'
import './SignUpPage.css'
// import db from '../../data.json'
import axios from 'axios';



const initState = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  city: '',
  state: '',
  phone: '',
  // c_password: ''
};

class SignUpPage extends Component {

  constructor () {
    super()
    this.state = initState;
  }



  createUser = async (data) => {
    try {
      const result = await axios.post(
        '/user/createNewUser' , data
      );
      console.log('API Test:',result.data)
    } catch (err) {
      console.log(err)
    }
  };

  handleValue = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name]: value })
  };

  submitForm = (event) => {
    event.preventDefault()

    // const { email , password } = this.state;
    const user_data = this.state;
    console.log('Client Data:', { ...user_data })

    /*  */
    // let user = db.find( user => (user.email === email));
    // if (!user) {
    //   console.log('User: ——— √')
    //   db.push({ id:++db.length , email , password })
    //   console.log(db)
    // }
    /*  */

    this.createUser(user_data)
    this.setState({ ...initState  })
  };



  render () {
    const { 
      email      , password, 
      first_name , last_name, 
      city , state , phone  
    } = this.state;
    const { handleValue, submitForm } = this;

    return (
      <main className="register-page">
        <h2>Register Page</h2>
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
              value={ password }
              onChange={ handleValue }
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
              name="first_name" 
              className="first_name input"
              autoComplete="off"
              value={ first_name }
              onChange={ handleValue }
            />
            <label htmlFor="first_name" className="border">
              <span className="text">
                First Name *
              </span>
            </label>
          </div>

          <div className="group">
            <input 
              type="text" 
              name="last_name" 
              className="last_name input"
              autoComplete="off"
              value={ last_name }
              onChange={ handleValue }
            />
            <label htmlFor="last_name" className="border">
              <span className="text">
                Last Name *
              </span>
            </label>
          </div>

          <div className="group">
            <input 
              type="text" 
              name="city" 
              className="city input"
              autoComplete="off"
              value={ city }
              onChange={ handleValue }
            />
            <label htmlFor="city" className="border">
              <span className="text">
                City *
              </span>
            </label>
          </div>

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

          <div className="group">
            <input 
              type="text" 
              name="phone" 
              className="phone input"
              autoComplete="off"
              value={ phone }
              onChange={ handleValue }
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
            className="sign-up"
            value="SIGN-UP"
          />
        </form>
        <div className="img-comp">
          <img 
            src="/assets/images/photo-1534351450181-ea9f78427fe8.jfif" 
            alt="register-img"
          />
        </div>
      </main>
    );
  }

}



export default SignUpPage



/* 
< value=""    onchange="this.setAttribute('value', this.value);" />
*/



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