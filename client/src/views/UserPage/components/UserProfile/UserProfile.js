import React, { Component } from "react";
import "./UserProfile.css";
import axios from "axios";
import Images from "../Images/Images";
import allStatesList from "../../../AuthPage/components/SignUp/all-states-list.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, FormGroup } from "react-bootstrap";
import Interests from '../Interests/Interests'

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
  imgLocation: "",
  _id: "",
  holder: "",
  interestsHolder: [],
  dogWalks: false,
  playDates: false,
  breed: false,
  dogSit: false,
  adoption: false,
  fostering: false
};

class UserProfile extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  //when someone uploads an image
  fileSelected = event => {
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
      imgId: this.state.imgId,
      imgLocation: this.state.imgLocation,
      _id: this.state._id,
      holder: this.state.holder,
      interestsHolder: this.state.interestsHolder,
      dogWalks: this.state.dogWalks,
      playDates: this.state.playDates,
      breed: this.state.breed,
      dogSit: this.state.dogSit,
      adoption: this.state.adoption,
      fostering: this.state.fostering
    }

    this.setState(data);
  };

  //upload file
  fileUpload = async event => {
    event.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.imgs, this.state.imgs.name);
    await axios.post("/addImage/file", fd).then(result => {
      axios.post(`/user/addImage/${this.state._id}`, {
        imgs: result.data.data._id
      });
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
        imgLocation: this.state.imgLocation,
        _id: this.state._id,
        holder: this.state.holder,
        interestsHolder: this.state.interestsHolder,
        dogWalks: this.state.dogWalks,
        playDates: this.state.playDates,
        breed: this.state.breed,
        dogSit: this.state.dogSit,
        adoption: this.state.adoption,
        fostering: this.state.fostering
      }
      this.setState(data);
    });
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get("User_id");
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
      imgLocation: location.data.data,
      _id: this.state._id,
      holder: this.state.holder,
      interestsHolder: this.state.interestsHolder,
      dogWalks: this.state.dogWalks,
      playDates: this.state.playDates,
      breed: this.state.breed,
      dogSit: this.state.dogSit,
      adoption: this.state.adoption,
      fostering: this.state.fostering
    }

    this.setState(data);
  };

  async componentDidMount() {
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get("user_id");
    let user = await axios.get(`/user/getById/${userId}`);
    let data = user.data;
    if (data.imgs) {
      let image = await axios.get(`/addImage/${data.imgs}`);
      const newState = {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        City: data.City,
        State: data.State,
        email: data.email,
        Interests: data.Interests,
        Pets: data.pets,
        imgs: data.imgs,
        phone: data.phone,
        imgId: data.imgs,
        imgLocation: image.data.data,
        _id: userId,
        holder: this.state.holder,
        interestsHolder: this.state.interestsHolder,
        dogWalks: this.state.dogWalks,
        playDates: this.state.playDates,
        breed: this.state.breed,
        dogSit: this.state.dogSit,
        adoption: this.state.adoption,
        fostering: this.state.fostering
      }
      this.setState(newState);
    } else {
      const newState = {
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        City: data.City,
        State: data.State,
        email: data.email,
        Interests: data.Interests,
        Pets: data.pets,
        imgs: this.state.imgs,
        phone: data.phone,
        imgId: this.state.imgId,
        imgLocation: this.state.imgLocation,
        _id: userId,
        holder: this.state.holder,
        interestsHolder: this.state.interestsHolder,
        dogWalks: this.state.dogWalks,
        playDates: this.state.playDates,
        breed: this.state.breed,
        dogSit: this.state.dogSit,
        adoption: this.state.adoption,
        fostering: this.state.fostering
      }
      this.setState(newState);
    }
    console.log(this.state)
  }

  //hold value for each input
  handleValue = async event => {
    const { name, value } = await event.target;
    this.setState({ [name]: value });
  };

  //changes the state and database for updating profile
  submitForm = async event => {
    event.preventDefault();
    const { name } = await event.target;
    this.setState({ [name]: this.state.holder });
    if (name !== "Interests" && name !== "Pets") {
      this.updateDatabase(name);
    }
  };

  //update database for all categories except interests and pets
  updateDatabase = async name => {
    await axios.post(`/user/update${name}/${this.state._id}`, {
      [name]: this.state.holder
    });
    let id = `change${name}`;
    if (id !== "changeState") {
      document.getElementById(id).value = "";
    }
  };

  //handle all the check marks for interests
  handleCheck = async event => {
    event.preventDefault();
    let interestName = "interestsHolder";
    let { name, value } = event.target;
    this.setState({ [name]: event.target.checked });
    let interests = this.state.Interests;
    let interestsHolder = this.state.interestsHolder;
    if (interests.length < 1) {
      if (interestsHolder.length < 1) {
        this.setState({
          [interestName]: [...this.state.interestsHolder, value]
        });
      } else {
        for (let i = 0; i < interestsHolder.length; i++) {
          if (interestsHolder[i] === value) {
            i = interestsHolder.length;
          } else if (
            interestsHolder[i] !== value &&
            i === interestsHolder.length - 1
          ) {
            this.setState({
              [interestName]: [...this.state.interestsHolder, value]
            });
          }
        }
      }
    } else {
      for (let i = 0; i < interests.length; i++) {
        if (interests[i] === value) {
          i = interests.length;
        } else if (interests[i] !== value && i === interests.length - 1) {
          this.setState({
            [interestName]: [...this.state.interestsHolder, value]
          });
        }
      }
    }
  };

  //adding all interests into the database
  addChecked = async e => {
    e.preventDefault();
    let interests = [];
    let holder = "interestsHolder";
    let interestName = "Interests";
    for (let i = 0; i < this.state.interestsHolder.length; i++) {
      if (this.state.interestsHolder[i] !== null) {
        interests.push(this.state.interestsHolder[i]);
      }
    }
    await axios.post(`/user/addInterests/${this.state._id}`, {
      Interests: interests
    });
    let user = await axios.get(`/user/getById/${this.state._id}`);
    this.setState({
      [holder]: [],
      [interestName]: user.Interests
    });
  }

  /* displays all states in <option> tag */
  displayStatesListOption = () => {
    return allStatesList.map((state, id) => (
      <option key={id} value={state.abbreviation} name="holder">
        {state.name}
      </option>
    ));
  };

  showInterests = () => {
    return this.state.Interests.map(interests => (
      <h6>{interests}</h6>
    ));
  }

  render() {
    return (
      <section className="component">
        {/* <h2>This page displays your information.</h2> */}

        <form>
          <fieldset>
            <div>
              <legend>User Profile</legend>
            </div>

            <div className="container userProfileForm mt-3">
              <div className="row justify-content-center mb-3">
                <div className="userImage col-sm-8" id="userImage">
                  <Images
                    click={this.fileSelected}
                    upload={this.fileUpload}
                    img={this.state.imgId}
                  />
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="firstNameData col-sm-7" id="firstName">
                  <strong>First Name: </strong> {this.state.firstName}
                </div>

                <div className="dropdown">
                  {/* id="dropdownMenuButton" */}
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="firstName"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changefirstName">First Name</label>
                    <input
                      onChange={this.handleValue}
                      type="text"
                      className="form-control"
                      id="changefirstName"
                      placeholder="First Name"
                      name="holder"
                    />
                    <button
                      onClick={this.submitForm}
                      type="submit"
                      className="btn btn-primary"
                      name="firstName"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="lastNameData col-sm-7" id="lastName">
                  <strong>Last Name: </strong> {this.state.lastName}
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="lastName"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changelastName">Last Name</label>
                    <input
                      onChange={this.handleValue}
                      type="text"
                      className="form-control"
                      id="changelastName"
                      placeholder="Last Name"
                      name="holder"
                    />
                    <button
                      onClick={this.submitForm}
                      type="submit"
                      className="btn btn-primary"
                      name="lastName"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="passwordData col-sm-7" id="password">
                  <strong>Password: </strong> Hidden for privacy
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="password"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changepassword">New Password</label>
                    <input
                      onChange={this.handleValue}
                      type="text"
                      className="form-control"
                      id="changepassword"
                      placeholder="New Password"
                      name="holder"
                    />
                    <button
                      onClick={this.submitForm}
                      type="submit"
                      className="btn btn-primary"
                      name="password"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="cityData col-sm-7" id="city">
                  <strong>City: </strong> {this.state.City}
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="City"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changeCity">City</label>
                    <input
                      onChange={this.handleValue}
                      type="text"
                      className="form-control"
                      id="changeCity"
                      placeholder="City"
                      name="holder"
                    />
                    <button
                      onClick={this.submitForm}
                      type="submit"
                      className="btn btn-primary"
                      name="City"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="stateData col-sm-7" id="state">
                  <strong>State: </strong> {this.state.State}
                </div>
                <div className="dropdown">
                  <FormGroup>
                    <Dropdown>
                      <Dropdown.Toggle className="modifyBtn stateBtn">
                        Edit<i className="far fa-edit"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <label htmlFor="changeState">State</label>
                        <div>
                          <select
                            form="State"
                            name="holder"
                            className="State"
                            defaultValue=""
                            onChange={this.handleValue}
                          >
                            <option hidden>— Select State * —</option>
                            {this.displayStatesListOption()}
                          </select>
                          <button
                            onClick={this.submitForm}
                            type="submit"
                            className="btn btn-primary"
                            name="State"
                          >
                            Save
                          </button>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </FormGroup>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="emailData col-sm-7" id="email">
                  <strong>Email: </strong> {this.state.email}
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="email"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changeemail">New Email</label>
                    <input
                      onChange={this.handleValue}
                      type="text"
                      className="form-control"
                      id="changeemail"
                      placeholder="email"
                      name="holder"
                    />
                    <button
                      onClick={this.submitForm}
                      type="submit"
                      className="btn btn-primary"
                      name="email"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="interestsData col-sm-7" id="interests"><strong>Interests: </strong> <Interests _id={this.state._id} /></div>

                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="interests"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changeinterests">Interests</label>
                    <div className="form-check">
                      <input onChange={this.handleCheck} type="checkbox" className="form-check-input" checked={this.state.dogWalks} value="Dog Walks" name="dogWalks" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Dog Walks</label>
                    </div>
                    <div className="form-check">
                      <input onChange={this.handleCheck} type="checkbox" className="form-check-input" checked={this.state.playDates} value="Play Dates" name="playDates" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Play Dates</label>
                    </div>
                    <div className="form-check">
                      <input onChange={this.handleCheck} type="checkbox" className="form-check-input" checked={this.state.breed} value="Breed" name="breed" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Breed</label>
                    </div>
                    <div className="form-check">
                      <input onChange={this.handleCheck} type="checkbox" className="form-check-input" checked={this.state.checked} value="Dog Sit" name="dogSit" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Dog Sit</label>
                    </div>
                    <div className="form-check">
                      <input onChange={this.handleCheck} type="checkbox" className="form-check-input" checked={this.state.adoption} value="Adoption" name="adoption" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Adoption</label>
                    </div>
                    <div className="form-check">
                      <input onChange={this.handleCheck} type="checkbox" className="form-check-input" checked={this.state.fostering} value="Fostering" name="fostering" />
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Fostering</label>
                    </div>
                    <button onClick={this.addChecked} type="submit" className="btn btn-primary" name="Interests">Save</button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="petsData col-sm-7" id="pets">
                  <strong>Pets: </strong> {this.state.Pets}
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="pets"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changepets">New Pets</label>
                    <input
                      onChange={this.handleValue}
                      type="text"
                      className="form-control"
                      id="changepets"
                      placeholder="New Pet"
                      name="holder"
                    />
                    <button
                      onClick={this.submitForm}
                      type="submit"
                      className="btn btn-primary"
                      name="pets"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="phoneData col-sm-7" id="phone">
                  <strong>Phone #: </strong> {this.state.phone}
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle modifyBtn"
                    type="button"
                    data-toggle="dropdown"
                    name="phone"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changephone">New Phone Number</label>
                    <input
                      onChange={this.handleValue}
                      type="text"
                      className="form-control"
                      id="changephone"
                      placeholder="Phone Number"
                      name="holder"
                    />
                    <button
                      onClick={this.submitForm}
                      type="submit"
                      className="btn btn-primary"
                      name="phone"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default UserProfile;
