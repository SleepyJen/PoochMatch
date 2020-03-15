import React, { Component } from 'react';
import { Dropdown, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import Images from '../Images/Images';
import allStatesList from '../../../AuthPage/components/SignUp/all-states-list.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateDog.css'

const initState = {
  name: '',
  breed: '',
  species: '',
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
    const valType = (type === 'checkbox') ? checked : value;

    // console.log('Target:', name, '—', checked, '—', value)
    // console.log( 'Input:' , valType )

    this.setState({ [name]: valType })
  };

  submitForm = (event) => {
    event.preventDefault()

    console.log('Dog Data:', this.state)
    this.setState({ ...initState })
  };



  render() {

    const {
      name,
      breed,
      species,
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
      <section className="component">
        <h2>Fill out this form to add your pooch</h2>

        <form onSubmit={submitForm}>
          <fieldset>
            <legend>Pooch Form</legend>

            <div>
              <Images click={this.fileSelected} upload={this.fileUpload} img={this.state.imgId} />
            </div>

            <div>
              <label htmlFor="name">
                Pooch's Name:
              </label>
              <input
                type="text"
                className="poochName"
                placeholder="enter name"
                autoComplete="off"
                value={name}
                onChange={handleValue}
                autoFocus
              // required
              />
            </div>



            <div>
              <label htmlFor="breed">
                Pooch's Breed:
              </label>
              <input
                type="text"
                className="poochBreed"
                placeholder="enter breed"
                autoComplete="off"
                value={breed}
                onChange={handleValue}
              // required
              />
            </div>

            <div>
              <label htmlFor="gender">
                Gender:
              </label>
              <input
                type="text"
                className="poochGender"
                placeholder="enter gender"
                autoComplete="off"
                value={gender}
                onChange={handleValue}
              // required
              />
            </div>

            <div>
              <label htmlFor="age">
                Age:
              </label>
              <input
                type="number"
                className="poochAge"
                placeholder="enter age"
                autoComplete="off"
                value={age}
                onChange={handleValue}
                min="0"
              // required
              />
            </div>

            <div>
              <label htmlFor="weight">
                Weight:
              </label>
              <input
                type="number"
                className="poochWeight"
                placeholder="enter weight"
                autoComplete="off"
                value={weight}
                onChange={handleValue}
                min="0"
              // required
              />
            </div>

            <div>
              <input
                type="checkbox"
                className="poochSpayedNeutered"
                value={spayedNeutered}
                onChange={handleValue}
              // required
              />
              <label htmlFor="spayedNeutered">
                Spayed/Neutered
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                className="poochRabiesVaccine"
                value={rabiesVaccine}
                onChange={handleValue}
              // required
              />
              <label htmlFor="rabiesVaccine">
                Rabies Vaccine
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                className="poochBordatellaVaccine"
                value={bordatellaVaccine}
                onChange={handleValue}
              // required
              />
              <label htmlFor="bordatellaVaccine">
                Bordatella Vaccine
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                className="poochParvovirusVaccine"
                value={parvovirusVaccine}
                onChange={handleValue}
              // required
              />
              <label htmlFor="parvovirusVaccine">
                Parvovirus Vaccine
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                className="poochDistemperVaccine"
                value={distemperVaccine}
                onChange={handleValue}
              // required
              />
              <label htmlFor="distemperVaccine">
                Distemper Vaccine
              </label>
            </div>

            <div>
              <label htmlFor="personality">
                Personality:
              </label>
              <input
                type="text"
                className="poochPersonality"
                placeholder="enter personality"
                autoComplete="off"
                value={personality}
                onChange={handleValue}
              // required
              />
            </div>

            <input
              type="submit"
              name="save"
              className="save-btn"
              value="SAVE"
            />
          </fieldset>
        </form>
      </section>
    );
  }

}

export default CreateDog
