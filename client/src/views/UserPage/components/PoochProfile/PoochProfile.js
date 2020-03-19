import React from 'react'
import './PoochProfile.css'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'


function PetInfo() {
  return (
    <div>
      <div className="container mb-3 justify-content-center">
        <h2>Your pet's will be displayed here.</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 poochCard">

            <Card style={{ width: 'auto', height: 'auto' }}>
              <Card.Title className="cardTitleDog dogName" id="name">The dog name goes here </Card.Title>
              <Card.Title className="cardTitle2 dogPersonality" id="personality">The dog Personality goes here The dog Personality goes here The dog Personality goes here The dog Personality goes here The dog Personality goes here The dog Personality goes here The dog Personality goes herev </Card.Title>
              <Card.Body className="cardMain row no-gutters justify-content-center">
                <ListGroup className="list-group col-6">
                  <ListGroupItem className="dogBreed" id="breed"><strong>Breed: </strong> The dog breed goes here </ListGroupItem>
                  <ListGroupItem className="dogGender" id="gender"><strong>Gender: </strong> The dog gender goes here </ListGroupItem>
                  <ListGroupItem className="dogAge" id="age"><strong>Age: </strong> The dog age goes here </ListGroupItem>
                  <ListGroupItem className="dogWeight" id="weight"><strong>Weight: </strong> The dog weight goes here </ListGroupItem>
                  <ListGroupItem className="dogSpayedNeutered" id="spayedNeutered"><strong>Spayed/Neutered: </strong> state goes here </ListGroupItem>
                  <ListGroupItem className="rabiesVaccine" id="rabies"><strong>Rabies Vaccine: </strong> Status </ListGroupItem>
                  <ListGroupItem className="bordatellaVacciner" id="bordatella"><strong>Bordatella Vaccine: </strong> Status</ListGroupItem>
                  <ListGroupItem className="parvovirusVaccine" id="parvovirus"><strong>Parvo Vaccine: </strong> Status </ListGroupItem>
                  <ListGroupItem className="distemperVaccine" id="distemper"><strong>Distemper Vaccine: </strong>Status </ListGroupItem>
                </ListGroup>

                <ListGroup className="list-group col-6">
                  <Card.Img className="dogImage" />
                </ListGroup>
              </Card.Body>

              <Card.Body className="cardFooter">
                <Card.Link className="btn btn-large editDog" href="#">Edit</Card.Link>
                <Card.Link className="btn btn-large saveDog" href="#">Save</Card.Link>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    </div >

  );
}


export default PetInfo