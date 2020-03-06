import React, { Component } from 'react'
import './DogProfile.css'



const initState = {
  name    : '',
  breed   : '',
  species : '',
  gender  : '',
  age     : '',
  weight  : '',
  spayedNeutered    : '',
  rabiesVaccine     : '',
  bordatellaVaccine : '',
  parvovirusVaccine : '',
  distemperVaccine  : '',
  personality : '',
};

class NewDogPage extends Component {
 
  constructor () {
    super()
    this.state = initState;
  }



  handleValue = (event) => {
    const { name , type , checked , value } = event.target;
    const valType = (type === 'checkbox') ? checked : value;
    
    // console.log('Target:', name, '—', checked, '—', value)
    // console.log( 'Input:' , valType )
    
    this.setState({ [name] : valType })
  };

  submitForm = (event) => {
    event.preventDefault()
    
    console.log('Dog Data:', this.state)
    this.setState({ ...initState })
  };



  render () {

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
        <h2>Dog Profile</h2>

        <form onSubmit={ submitForm }>
          <fieldset>
            <legend>Dog Form</legend>
            
            <div>
              <label htmlFor="name">
                Dog's Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="enter dog's name"
                autoComplete="off"
                value={ name }
                onChange={ handleValue }
                autoFocus
                // required
              />
            </div>
           
            <div>
              <label htmlFor="breed">
                Breed:
              </label>
              <input
                type="text"
                name="breed"
                placeholder="enter breed"
                autoComplete="off"
                value={ breed }
                onChange={ handleValue }
                // required
              />
            </div>

            <div>
              <label htmlFor="species">
                Species:
              </label>
              <input
                type="text"
                name="species"
                placeholder="enter species"
                autoComplete="off"
                value={ species }
                onChange={ handleValue }
                // required
              />
            </div>

            <div>
              <label htmlFor="gender">
                Gender:
              </label>
              <input
                type="text"
                name="gender"
                placeholder="enter gender"
                autoComplete="off"
                value={ gender }
                onChange={ handleValue }
                // required
              />
            </div>
           
            <div>
              <label htmlFor="age">
                Age:
              </label>
              <input
                type="number"
                name="age"
                placeholder="enter age"
                autoComplete="off"
                value={ age }
                onChange={ handleValue }
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
                name="weight"
                placeholder="enter weight"
                autoComplete="off"
                value={ weight }
                onChange={ handleValue }
                min="0"
                // required
              />
            </div>

 
{/*  
            <div>
              <label htmlFor="text" className="text-group">
                text:
              </label>
              <input
                type="text"
                name="text"
                className="text input"
                placeholder="text"
                autoComplete="off"
                defaultValue="text"
                // onChange={ handleValue }
                // required
              />
            </div>

            <label htmlFor="S-N" className="check-group">
              <input 
                type="checkbox"
                name="S---N"
                className="S-N check"
                id="S-N"
                value="button"
              />
              <span className="check-text">
                DOG
              </span>
            </label>
*/}

            <div>
              <input
                type="checkbox"
                name="spayedNeutered"
                value={ spayedNeutered }
                onChange={ handleValue }
                // required
              />
              <label htmlFor="spayedNeutered">
                Spayed/Neutered
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="rabiesVaccine"
                value={ rabiesVaccine }
                onChange={ handleValue }
                // required
              />
              <label htmlFor="rabiesVaccine">
                Rabies Vaccine
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="bordatellaVaccine"
                value={ bordatellaVaccine }
                onChange={ handleValue }
                // required
              />
              <label htmlFor="bordatellaVaccine">
                Bordatella Vaccine
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="parvovirusVaccine"
                value={ parvovirusVaccine }
                onChange={ handleValue }
                // required
              />
              <label htmlFor="parvovirusVaccine">
                Parvovirus Vaccine
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="distemperVaccine"
                value={ distemperVaccine }
                onChange={ handleValue }
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
                name="personality"
                placeholder="enter personality"
                autoComplete="off"
                value={ personality }
                onChange={ handleValue }
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



export default NewDogPage



/* 
= Dog Model =
- images ???
- vaccines []
- species---
*/