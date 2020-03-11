import React, { Component } from "react";
import "./UserProfile.css";
import axios from 'axios';

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

  async componentDidMount() {
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get('User_id');
    let user = await axios.get(`/user/getById/${userId}`);
    let data = user.data;
    console.log(data);
    const newState = {
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      City: data.City,
      State: data.State,
      email: data.email,
      Interests: data.Interests,
      Pets: data.pets,
      imgs: "",
      phone: data.phone
    }
    this.setState(newState);
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
              <div className="firstName" id="firstName"><strong>First Name: </strong> {this.state.firstName}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="lastName" id="lastName"><strong>Last Name: </strong> {this.state.lastName}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="password" id="password"><strong>Password: </strong> Hidden for privacy
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="city" id="city"><strong>City: </strong> {this.state.City}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="state" id="state"><strong>State: </strong> {this.state.State}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>
            <div>
              <div className="email" id="email"><strong>Email: </strong> {this.state.email}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>

            <div>
              <div className="interests" id="interests"><strong>Interests: </strong> {this.state.Interests}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>

            <div>
              <div className="pets" id="pets"><strong>Pets: </strong> {this.state.Pets}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
                </button>
              </div>
            </div>

            <div>
              <div className="phone" id="phone"><strong>Phone #: </strong> {this.state.phone}
                <button className="btn dropdown-toggle modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i class="far fa-edit"></i>
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
