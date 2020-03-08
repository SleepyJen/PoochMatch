import React, { Component } from "react";
import "./UserProfile.css";

const initState = {
  firstName: "",
  lastName: "",
  password: "",
  City: "",
  State: "",
  email: "",
  Interests: "",
  Pets: "",
  imgs: "",
  phone: ""
};

class UserProfile extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  handleValue = event => {
    const { name, value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name]: value });
  };

  submitForm = event => {
    event.preventDefault();

    console.log("User Data:", this.state);

    this.setState({ ...initState });
  };

  render() {
    const {
      firstName,
      lastName,
      password,
      City,
      State,
      email,
      Interests,
      Pets,
      imgs,
      phone
    } = this.state;
    const { handleValue, submitForm } = this;

    return (
      <section className="component">
        {/* <h2>This page displays your information.</h2> */}

        <form onSubmit={submitForm}>
          <fieldset>
            <div>
              <legend>User Profile</legend>
              <label htmlFor="firstName">*First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="enter name"
                autoComplete="off"
                value={firstName}
                onChange={handleValue}
                autoFocus
                // required
              />
            </div>

            <div>
              <label htmlFor="lastName">*Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="enter name"
                autoComplete="off"
                value={lastName}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="password">*Password:</label>
              <input
                type="text"
                name="password"
                placeholder="enter password"
                autoComplete="off"
                value={password}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="City">*City:</label>
              <input
                type="text"
                name="City"
                placeholder="enter city"
                autoComplete="off"
                value={City}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="State">*State:</label>
              <input
                type="text"
                name="State"
                placeholder="enter state"
                autoComplete="off"
                value={State}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="email">*Email:</label>
              <input
                type="text"
                name="email"
                placeholder="enter email"
                autoComplete="off"
                value={email}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="Interests">*Interests:</label>
              <input
                type="text"
                name="Interest"
                placeholder="enter interests"
                autoComplete="off"
                value={Interests}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="Pets">*Pets:</label>
              <input
                type="text"
                name="Pet"
                placeholder="enter pets"
                autoComplete="off"
                value={Pets}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="imgs">*Images:</label>
              <input
                type="text"
                name="imgs"
                placeholder="enter image"
                autoComplete="off"
                value={imgs}
                onChange={handleValue}
                // required
              />
            </div>

            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                placeholder="enter phone #"
                autoComplete="off"
                value={phone}
                onChange={handleValue}
                // required
              />
            </div>

            <button
              onClick="save-btn"
              type="submit"
              name="save"
              className="save-btn"
              value="Save"
            >
              Save
            </button>

            <button onClick="edit-btn">Edit</button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default UserProfile;

/*
= User Model =
- interests []
- pets []
- image ???
- subscription ...
*/
