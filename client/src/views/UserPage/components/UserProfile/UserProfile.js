import React, { Component } from "react";
import "./UserProfile.css";
import axios from 'axios';
import Images from '../Images/Images';
import allStatesList from '../../../AuthPage/components/SignUp/all-states-list.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, FormGroup } from 'react-bootstrap';

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
  holder: ""
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
      imgId: this.state.imgId,
      imgLocation: this.state.imgLocation,
      _id: this.state._id,
      holder: this.state.holder
    }
    this.setState(data);
  }

  //upload file
  fileUpload = async (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append('image', this.state.imgs, this.state.imgs.name);
    await axios.post('/addImage/file', fd).then(result => {
      axios.post(`/user/addImage/${this.state._id}`, { imgs: result.data.data._id });
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
        holder: this.state.holder
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
      imgLocation: location.data.data,
      _id: this.state._id,
      holder: this.state.holder
    }
    this.setState(data);
  }


  async componentDidMount() {
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get('user_id');
    let user = await axios.get(`/user/getById/${userId}`);
    let data = user.data;
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
      holder: this.state.holder
    }
    this.setState(newState);
    console.log(this.state);
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
    if (name !== 'Interests' && name !== 'Pets') {
      this.updateDatabase(name);
    }
  };

  updateDatabase = async name => {
    await axios.post(`/user/update${name}/${this.state._id}`, { [name]: this.state.holder });
    let id = `change${name}`;
    if (id !== 'changeState') {
      document.getElementById(id).value = '';
    }
    console.log(this.state);
  }

  /* displays all states in <option> tag */
  displayStatesListOption = () => {
    return allStatesList.map((state, id) => (
      <option
        key={id}
        value={state.abbreviation}
        name="holder"
      >{state.name}
      </option>
    ));
  };

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
                <div className="dropdown">
                  {/* id="dropdownMenuButton" */}
                  <button className="btn dropdown-toggle modifyBtn" type="button" data-toggle="dropdown" name="firstName" aria-haspopup="true" aria-expanded="false">
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changefirstName">First Name</label>
                    <input onChange={this.handleValue} type="text" className="form-control" id="changefirstName" placeholder="First Name" name="holder" />
                    <button onClick={this.submitForm} type="submit" className="btn btn-primary" name="firstName">Save</button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="lastNameData col-sm-7" id="lastName"><strong>Last Name: </strong> {this.state.lastName}</div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle modifyBtn" type="button" data-toggle="dropdown" name="lastName" aria-haspopup="true" aria-expanded="false">
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changelastName">Last Name</label>
                    <input onChange={this.handleValue} type="text" className="form-control" id="changelastName" placeholder="Last Name" name="holder" />
                    <button onClick={this.submitForm} type="submit" className="btn btn-primary" name="lastName">Save</button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="passwordData col-sm-7" id="password"><strong>Password: </strong> Hidden for privacy</div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle modifyBtn" type="button" data-toggle="dropdown" name="password" aria-haspopup="true" aria-expanded="false">
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changepassword">New Password</label>
                    <input onChange={this.handleValue} type="text" className="form-control" id="changepassword" placeholder="New Password" name="holder" />
                    <button onClick={this.submitForm} type="submit" className="btn btn-primary" name="password">Save</button>
                  </div>
                </div>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="cityData col-sm-7" id="city"><strong>City: </strong> {this.state.City}</div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle modifyBtn" type="button" data-toggle="dropdown" name="City" aria-haspopup="true" aria-expanded="false">
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changeCity">City</label>
                    <input onChange={this.handleValue} type="text" className="form-control" id="changeCity" placeholder="City" name="holder" />
                    <button onClick={this.submitForm} type="submit" className="btn btn-primary" name="City">Save</button>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="stateData col-sm-7" id="state"><strong>State: </strong> {this.state.State}</div>
                <div className="dropdown">
                  <FormGroup>
                    <Dropdown>
                      <Dropdown.Toggle className="modifyBtn">
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
                          <button onClick={this.submitForm} type="submit" className="btn btn-primary" name="State">Save</button>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </FormGroup>
                </div>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="emailData col-sm-7" id="email"><strong>Email: </strong> {this.state.email}</div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle modifyBtn" type="button" data-toggle="dropdown" name="email" aria-haspopup="true" aria-expanded="false">
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changeemail">New Email</label>
                    <input onChange={this.handleValue} type="text" className="form-control" id="changeemail" placeholder="email" name="holder" />
                    <button onClick={this.submitForm} type="submit" className="btn btn-primary" name="email">Save</button>
                  </div>
                </div>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="interestsData col-sm-7" id="interests"><strong>Interests: </strong> {this.state.Interests}</div>
                <button className="btn dropdown modifyBtn" type="button" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="petsData col-sm-7" id="pets"><strong>Pets: </strong> {this.state.Pets}</div>
                <button className="btn dropdown modifyBtn" type="button" data-toggle="dropdown" >
                  Edit<i className="far fa-edit"></i>
                </button>

              </div>

              <div className="row justify-content-center mb-3">
                <div className="phoneData col-sm-7" id="phone"><strong>Phone #: </strong> {this.state.phone}</div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle modifyBtn" type="button" data-toggle="dropdown" name="phone" aria-haspopup="true" aria-expanded="false">
                    Edit<i className="far fa-edit"></i>
                  </button>
                  <div className="dropdown-menu p-1">
                    <label htmlFor="changephone">New Phone Number</label>
                    <input onChange={this.handleValue} type="text" className="form-control" id="changephone" placeholder="Phone Number" name="holder" />
                    <button onClick={this.submitForm} type="submit" className="btn btn-primary" name="phone">Save</button>
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
