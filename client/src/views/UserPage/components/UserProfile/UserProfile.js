import React, { Component } from "react";
import "./UserProfile.css";
import axios from 'axios';
import Images from '../Images/Images';

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
  phone: "",
  imgId: "",
  imgLocation: ""
};

class UserProfile extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  //when someone uploads an image
  fileSelected = (event) => {
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      City: this.state.City,
      State: this.state.State,
      email: this.state.email,
      Interests: this.state.Interests,
      Pets: this.state.Pets,
      imgs: event.target.files[0],
      phone: this.state.phone,
      imgId: "",
      imgLocation: ""
    }
    this.setState(data);
  }

  //upload file
  fileUpload = async (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append('image', this.state.imgs, this.state.imgs.name);
    await axios.post('/addImage/file', fd).then(result => {
      let data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        City: this.state.City,
        State: this.state.State,
        email: this.state.email,
        Interests: this.state.Interests,
        Pets: this.state.Pets,
        imgs: this.state.imgs,
        phone: this.state.phone,
        imgId: result.data.data._id,
        imgLocation: ""
      }
      this.setState(data);

    });
    console.log(this.state);
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get('User_id');
    await axios.post(`/user/addImage/${userId}`, {
      imgs: this.state.imgId
    });
    let location = await axios.get(`/addImage/${this.state.imgId}`);
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      City: this.state.City,
      State: this.state.State,
      email: this.state.email,
      Interests: this.state.Interests,
      Pets: this.state.Pets,
      imgs: this.state.imgs,
      phone: this.state.phone,
      imgId: this.state.imgId,
      imgLocation: location.data.data
    }
    this.setState(data);
  }


  async componentDidMount() {
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get('User_id');
    let user = await axios.get(`/user/getById/${userId}`);
    let data = user.data;
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
      phone: data.phone,
      imgId: "",
      imgLocation: ""
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

    return (
      <section className="component">
        {/* <h2>This page displays your information.</h2> */}

        <form>
          <fieldset>
            <div>
              <legend>User Profile</legend>
            </div>
            <Images click={this.fileSelected} upload={this.fileUpload} img={this.state.imgId} />
            <div className="container userProfileForm mt-3">
              <div className="row justify-content-center mb-3">
                <div className="firstNameData col-sm-7" id="firstName"><strong>First Name: </strong> {this.state.firstName}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" name="firstName">
                  Edit<i className="far fa-edit"></i>
                </button>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="lastNameData col-sm-7" id="lastName"><strong>Last Name: </strong> {this.state.lastName}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" name="lastName">
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="passwordData col-sm-7" id="password"><strong>Password: </strong> Hidden for privacy</div>
                <button className="btn dropdown modifyBtn " type="button" id="dropdownMenu" data-toggle="dropdown" name="password">
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="cityData col-sm-7" id="city"><strong>City: </strong> {this.state.City}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="stateData col-sm-7" id="state"><strong>State: </strong> {this.state.State}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="emailData col-sm-7" id="email"><strong>Email: </strong> {this.state.email}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="interestsData col-sm-7" id="interests"><strong>Interests: </strong> {this.state.Interests}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="petsData col-sm-7" id="pets"><strong>Pets: </strong> {this.state.Pets}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="phoneData col-sm-7" id="phone"><strong>Phone #: </strong> {this.state.phone}</div>
                <button className="btn dropdown modifyBtn" type="button" id="dropdownMenu" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
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
