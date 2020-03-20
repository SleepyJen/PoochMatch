import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateDog.css'

const initState = {
  _id: "",
  imgs: "",
  imgId: "",
  imgLocation: "",
  name: "",
  breed: "",
  gender: "",
  age: "",
  weight: "",
  spayedNeutered: false,
  rabies: false,
  bordatella: false,
  parvovirus: false,
  distemper: false,
  personality: ""
};

class CreateDog extends Component {
  constructor() {
    super()
    this.state = initState;
  }

  //hold value for each input
  handleValue = async event => {
    const { name, value } = event.target;
    if (name === 'spayedNeutered' || name === 'rabies' || name === 'bordatella' || name === 'parvovirus' || name === 'distemper') {
      if (value === 'Yes') {
        console.log(this.state);
        this.setState({ [name]: true });
      }
    } else {
      this.setState({ [name]: value });
    }
  };

  //changes the state and database for updating profile
  submitForm = async event => {
    event.preventDefault();
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get("user_id");
    console.log(this.state);
    await axios.post(`/dog/createPooch`, {
      name: this.state.name,
      breed: this.state.breed,
      gender: this.state.gender,
      age: this.state.age,
      weight: this.state.weight,
      spayedNeutered: this.state.spayedNeutered,
      rabiesVaccine: this.state.rabies,
      bordatellaVaccine: this.state.bordatella,
      parvovirusVaccine: this.state.parvovirus,
      distemperVaccine: this.state.distemper,
      personality: this.state.personality
    }).then(result => {
      console.log(result);
      axios.post(`/user/addPet/${userId}`, {
        Pets: result.data
      });
      alert('Pet Added');
    });

    console.log(this.state);

  };

  render() {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 poochCard">

            <Form>
              {/* <Form.Group id="addPoochImage ">
                <h3>Attach pooch's profile picture</h3>
                <Images click={this.fileSelected} upload={this.fileUpload} img={this.state.imgId} />
              </Form.Group> */}

              <Form.Row>
                <Form.Group as={Col} controlId="formPoochName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text"
                    className="poochName"
                    name="name"
                    placeholder="enter name"
                    autoComplete="off"
                    onChange={this.handleValue}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formPoochBreed">
                  <Form.Label>Breed:</Form.Label>
                  <Form.Control type="text"
                    className="poochBreed"
                    name="breed"
                    placeholder="enter breed"
                    autoComplete="off"
                    onChange={this.handleValue} />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formPoochGender">
                  <Form.Label>Gender:</Form.Label>
                  <Form.Control as="select"
                    className="poochGender"
                    name="gender"
                    placeholder="enter gender"
                    autoComplete="off"
                    onChange={this.handleValue}>
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formPoochAge">
                  <Form.Label>Age:</Form.Label>
                  <Form.Control as="select"
                    className="poochAge"
                    name="age"
                    placeholder="enter age"
                    autoComplete="off"
                    onChange={this.handleValue}
                  >
                    <option></option>
                    <option>Less than 6 months</option>
                    <option>Between 6 months and 1 year</option>
                    <option>Between 1 year and 3 years</option>
                    <option>Between 3 years and 6 years</option>
                    <option>Over 6 years</option>
                  </Form.Control>
                </Form.Group>


                <Form.Group as={Col} controlId="formPoochWeight">
                  <Form.Label>Weight:</Form.Label>
                  <Form.Control as="select"
                    className="poochWeight"
                    name="weight"
                    placeholder="enter weight"
                    autoComplete="off"
                    onChange={this.handleValue}
                  >
                    <option></option>
                    <option>Less than 10 lbs</option>
                    <option>Between 10 and 25 lbs</option>
                    <option>Between 25 and 40 lbs</option>
                    <option>Between 40 and 60 lbs</option>
                    <option>Between 60 and 80 lbs</option>
                    <option>Over 80 lbs</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formSpayedNeutered">
                  <Form.Label>Spayed or Neutered?</Form.Label>
                  <Form.Control as="select"
                    className="poochSpayedNeutered"
                    name="spayedNeutered"
                    placeholder="enter spayed/neutered state"
                    autoComplete="off"
                    onChange={this.handleValue}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formRabies">
                  <Form.Label>Rabies Vaccine?</Form.Label>
                  <Form.Control as="select"
                    className="poochRabies"
                    name="rabies"
                    placeholder="enter rabies vaccine state"
                    autoComplete="off"
                    onChange={this.handleValue}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formBordatella">
                  <Form.Label>Bordatella Vaccine:</Form.Label>
                  <Form.Control as="select"
                    className="poochBordatellaVaccine:"
                    name="bordatella"
                    placeholder="enter Bordatella Vaccine state"
                    autoComplete="off"
                    onChange={this.handleValue}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formParvovirusVaccine">
                  <Form.Label>Parvovirus Vaccine?</Form.Label>
                  <Form.Control as="select"
                    className="poochParvovirus"
                    name="parvovirus"
                    placeholder="enter Parvovirus Vaccine state"
                    autoComplete="off"
                    onChange={this.handleValue}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formDistemperVaccine">
                  <Form.Label>Distemper Vaccine?</Form.Label>
                  <Form.Control as="select"
                    className="poochDistemperVaccine"
                    name="distemper"
                    placeholder="enter Distemper Vaccine state"
                    autoComplete="off"
                    // value={weight}
                    onChange={this.handleValue}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>

              </Form.Row>

              <Form.Group controlId="formPersonality">
                <Form.Label>Pooch's Personality</Form.Label>
                <Form.Control as="textarea"
                  rows="4"
                  className="poochPersonality"
                  name="personality"
                  placeholder="In a few words, describe your pooch's personality"
                  autoComplete="off"
                  maxLength="250"
                  onChange={this.handleValue} />
              </Form.Group>

              <Button variant="primary" className="submitAddPooch" type="submit" onClick={this.submitForm}>
                Submit
                </Button>
            </Form>

          </div>
        </div>
      </div >

    );
  }

}

export default CreateDog
