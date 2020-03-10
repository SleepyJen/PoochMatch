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

  // handleValue = event => {
  //   const { name, value } = event.target;
  //   // console.log('Target:', name, '—', value)
  //   this.setState({ [name]: value });
  // };

  // submitForm = event => {
  //   event.preventDefault();
  //   console.log("User Data:", this.state);
  //   this.setState({ ...initState });
  // };

  render() {
    // const {
    //   firstName,
    //   lastName,
    //   password,
    //   City,
    //   State,
    //   email,
    //   Interests,
    //   Pets,
    //   imgs,
    //   phone
    // } = this.state;
    // const { handleValue, submitForm } = this;

    return (
      <section className="component">
        {/* <h2>This page displays your information.</h2> */}

        <form>
          <fieldset>
            <div>
              <legend>User Profile</legend>
            </div>
            <div className="userProfileForm">
              <div className="firstName" id="firstName"><strong>First Name: </strong> The first name goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>
            <div>
              <div className="lastName" id="lastName"><strong>Last Name: </strong> The last name goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>
            <div>
              <div className="password" id="password"><strong>Password: </strong> The password goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>
            <div>
              <div className="city" id="city"><strong>City: </strong> The city goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>
            <div>
              <div className="state" id="state"><strong>State: </strong> The state goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>
            <div>
              <div className="email" id="email"><strong>Email: </strong> The email goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>

            <div>
              <div className="interests" id="interests"><strong>Interests: </strong> The interests goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>

            <div>
              <div className="pets" id="pets"><strong>Pets: </strong> The pets go here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>

            <div>
              <div className="phone" id="phone"><strong>Phone #: </strong> The phone # goes here
              <button class="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Modify
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default UserProfile;
