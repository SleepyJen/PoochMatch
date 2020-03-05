import React, { Component } from 'react'
import './NewDogPage.css'



class NewDogPage extends Component {
 
  constructor () {
    super()

    this.state = {
      name: '',
      breed: '',
      species: '',
      gender: '',
      age: '',
      weight: '',
      spayed_neutered: '',
      personality: '',
    };
  }



  handleValue = (event) => {
    const { name , value } = event.target;
    // console.log('Target:', name, '—', value)
    this.setState({ [name] : value })
  };

  handleCheck = (event) => {
    this.setState({ spayed_neutered : event.target.checked })
  };

  submitForm = (event) => {
    event.preventDefault()
    
    console.log('Dog:', this.state)
    
    this.setState({
      name: '',
      breed: '',
      species: '',
      gender: '',
      age: '',
      weight: '',
      spayed_neutered: '',
      personality: '',
    })
  };


  render () {

    const {
      name   , breed , species,
      gender , age   , weight,
      spayed_neutered , personality
    } = this.state;
    const {
      handleValue , handleCheck , submitForm
    } = this;

    return (
      <main className="component">
        <h2>New God Page</h2>

        <form onSubmit={ submitForm }>
          <fieldset>
            <legend>God Form</legend>
            
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
                // required
              />
            </div>
           
            <div>
              <label htmlFor="spayed_neutered">
                Spayed/Neutered:
              </label>
              <input
                type="checkbox"
                name="spayed_neutered"
                value={ spayed_neutered }
                onChange={ handleCheck }
                // required
              />
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
              name="submit"
              value="SUBMIT"
            />
          </fieldset>
        </form>
      </main>
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