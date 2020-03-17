

import React, { Component } from 'react';
import { Dropdown, Form, Button, Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Images from '../Images/Images';
import allStatesList from '../../../AuthPage/components/SignUp/all-states-list.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateDog.css'

const initState = {
  name: '',
  breed: '',
  gender: '',
  age: '',
  weight: '',
  spayedNeutered: '',
  rabiesVaccine: '',
  bordatellaVaccine: '',
  parvovirusVaccine: '',
  distemperVaccine: '',
  personality: '',
};

class CreateDog extends Component {

  constructor() {
    super()
    this.state = initState;
  }



  handleValue = (event) => {
    const { name, type, checked, value } = event.target;
    // console.log("name " + name);
    // console.log("type " + type);
    // console.log("checked " + checked);
    // console.log("value " + value);


    const valType = (type === 'checkbox') ? checked : value;

    // console.log('Target:', name, '—', checked, '—', value)
    // console.log( 'Input:' , valType )

    this.setState({ [name]: valType })
  };

  submitForm = (event) => {
    event.preventDefault()

    console.log('Dog Data:', this.state);
    // this.setState({ ...initState })

  };

  render() {

    const {
      name,
      breed,
      gender,
      age,
      weight,
      spayedNeutered,
      rabiesVaccine,
      bordatellaVaccine,
      parvovirusVaccine,
      distemperVaccine,
      personality,
    } = this.state;
    const {
      handleValue,
      submitForm
    } = this;


    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 poochCard">

            <Form>
              <Form.Group id="addPoochImage">
                <h3>Attach pooch's profile picture</h3>
                <Images click={this.fileSelected} upload={this.fileUpload} img={this.state.imgId} />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formPoochName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text"
                    className="poochName"
                    name="name"
                    placeholder="enter name"
                    autoComplete="off"
                    // value={name}
                    onChange={handleValue}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formPoochBreed">
                  <Form.Label>Breed:</Form.Label>
                  <Form.Control type="text"
                    className="poochBreed"
                    name="breed"
                    placeholder="enter breed"
                    autoComplete="off"
                    // value={breed}
                    onChange={handleValue} />
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
                    // value={gender}
                    onChange={handleValue}>
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
                    // value={age}
                    onChange={handleValue}
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
                    // value={weight}
                    onChange={handleValue}
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
                  <Form.Label>Spayed/Neutered?</Form.Label>
                  <Form.Control as="select"
                    className="poochSpayedNeutered"
                    name="spayedNeutered"
                    placeholder="enter spayed/neutered state"
                    autoComplete="off"
                    // value={weight}
                    onChange={handleValue}
                  >
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>

              </Form.Row>

              <Form.Row>


              </Form.Row>


              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submitForm}>
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
