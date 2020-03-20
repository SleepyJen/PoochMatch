import React from 'react' // , { useState }
import './MatchProfile.css';
import { Card, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';



function MatchProfile() {

    return (
        <div className="component mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-10 matchProfilecard">
                    <Card style={{ width: 'auto', height: 'auto' }}>

                        <Card.Body>
                            <h2>The following pooch's are associated with this user. <br></br>We feel they are a great match for your pooch!</h2>
                            <Card.Title className="cardTitleUser mb-2 mt-3" id="userMatchCard">User</Card.Title>

                            <div className="row">
                                <ListGroup className="userImage list-group col-4">
                                    <Card.Img variant="top" src="" />
                                </ListGroup>
                                <ListGroup className="list-group col-7">
                                    <ListGroupItem className="name" id="name"><strong>Name: </strong></ListGroupItem>
                                    <ListGroupItem classname="city" id="city"><strong>City: </strong></ListGroupItem>
                                    <ListGroupItem classname="interests" id="interests"><strong>Interests: </strong></ListGroupItem>
                                    <ListGroupItem classname="email" id="email"><strong>Email: </strong></ListGroupItem>
                                </ListGroup>

                            </div>

                            <Card.Text>
                                <Card.Title className=" cardTitlePets mb-2 mt-3" id="petCard">Pets</Card.Title>

                            </Card.Text>
                            <div className="row mb-3">
                                <ListGroup className="list-group col-7 ml-3">
                                    <ListGroupItem className="poochName" id="poochName"><strong>Name: </strong></ListGroupItem>
                                    <ListGroupItem className="dogBreed" id="breed"><strong>Breed: </strong></ListGroupItem>
                                    <ListGroupItem className="dogGender" id="gender"><strong>Gender: </strong></ListGroupItem>
                                    <ListGroupItem className="dogAge" id="age"><strong>Age: </strong> </ListGroupItem>
                                    <ListGroupItem className="dogSpayedNeutered" id="spayedNeutered"><strong>Spayed/Neutered: </strong> </ListGroupItem>
                                </ListGroup>
                                <ListGroup className="userImage list-group col-4">
                                    <Card.Img classname="poochImage" variant="top" src="" />
                                </ListGroup>
                            </div>
                            <div className="row mb-3">
                                <ListGroup className="list-group col-7 ml-3">
                                    <ListGroupItem className="poochName" id="poochName"><strong>Name: </strong></ListGroupItem>
                                    <ListGroupItem className="dogBreed" id="breed"><strong>Breed: </strong></ListGroupItem>
                                    <ListGroupItem className="dogGender" id="gender"><strong>Gender: </strong></ListGroupItem>
                                    <ListGroupItem className="dogAge" id="age"><strong>Age: </strong> </ListGroupItem>
                                    <ListGroupItem className="dogSpayedNeutered" id="spayedNeutered"><strong>Spayed/Neutered: </strong> </ListGroupItem>
                                </ListGroup>
                                <ListGroup className="userImage list-group col-4">
                                    <Card.Img classname="poochImage" variant="top" src="" />
                                </ListGroup>
                            </div>
                        </Card.Body>

                    </Card>
                    <Button variant="primary" className="btn btn-large backDashboard mt-3 mb-3" href="#">Back to Dashboard</Button>
                </div>
            </div>
        </div>
    );

}



export default MatchProfile