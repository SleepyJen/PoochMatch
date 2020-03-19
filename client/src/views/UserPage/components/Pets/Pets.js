import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import '../PoochProfile/PoochProfile.css'

function Pets(props) {
    const [value, modifier] = useState({ Pets: [] });
    useEffect(() => {
        let data = [];
        for (let i = 0; i < props.Pets.length; i++) {
            let pet = {
                images: props.Pets[i].images,
                _id: props.Pets[i]._id,
                name: props.Pets[i].name,
                breed: props.Pets[i].breed,
                gender: props.Pets[i].gender,
                age: props.Pets[i].age,
                weight: props.Pets[i].weight,
                spayedNeutered: "",
                rabiesVaccine: "",
                bordatellaVaccine: "",
                parvovirusVaccine: "",
                distemperVaccine: "",
                personality: props.Pets[i].personality
            }
            props.Pets[i].spayedNeutered ? pet.spayedNeutered = "Yes" : pet.spayedNeutered = "No";
            props.Pets[i].rabiesVaccine ? pet.rabiesVaccine = "Yes" : pet.rabiesVaccine = "No";
            props.Pets[i].bordatellaVaccine ? pet.bordatellaVaccine = "Yes" : pet.bordatellaVaccine = "No";
            props.Pets[i].parvovirusVaccine ? pet.parvovirusVaccine = "Yes" : pet.parvovirusVaccine = "No";
            props.Pets[i].distemperVaccine ? pet.distemperVaccine = "Yes" : pet.distemperVaccine = "No";
            data.push(pet);
        }
        modifier({ Pets: data });
    });

    return value.Pets.map((pet, index) => (
        <div key={index} className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 poochCard">
                    <Card style={{ width: 'auto', height: 'auto' }}>
                        <Card.Title className="cardTitleDog dogName" id="name">{pet.name}</Card.Title>
                        <Card.Title className="cardTitle2 dogPersonality" id="personality">{pet.personality}</Card.Title>
                        <Card.Body className="cardMain row no-gutters justify-content-center">
                            <ListGroup className="list-group col-6">
                                <ListGroupItem className="dogBreed" id="breed"><strong>Breed: </strong> {pet.breed} </ListGroupItem>
                                <ListGroupItem className="dogGender" id="gender"><strong>Gender: </strong> {pet.gender} </ListGroupItem>
                                <ListGroupItem className="dogAge" id="age"><strong>Age: </strong> {pet.age} </ListGroupItem>
                                <ListGroupItem className="dogWeight" id="weight"><strong>Weight: </strong> {pet.weight} </ListGroupItem>
                                <ListGroupItem className="dogSpayedNeutered" id="spayedNeutered" name="dogSpayedNeutered"><strong>Spayed/Neutered: </strong> {pet.spayedNeutered} </ListGroupItem>
                                <ListGroupItem className="rabiesVaccine" id="rabies"><strong>Rabies Vaccine: </strong> {pet.rabiesVaccine} </ListGroupItem>
                                <ListGroupItem className="bordatellaVacciner" id="bordatella"><strong>Bordatella Vaccine: </strong> {pet.bordatellaVaccine}</ListGroupItem>
                                <ListGroupItem className="parvovirusVaccine" id="parvovirus"><strong>Parvo Vaccine: </strong> {pet.parvovirusVaccine} </ListGroupItem>
                                <ListGroupItem className="distemperVaccine" id="distemper"><strong>Distemper Vaccine: </strong>{pet.distemperVaccine} </ListGroupItem>
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
    ));
}

export default Pets;
