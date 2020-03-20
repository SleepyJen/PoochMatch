import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import '../PoochProfile/PoochProfile.css';
import PetPic from '../PetPic/PetPic';
import axios from 'axios';

function Pets(props) {
    const [value, modifier] = useState({ Pets: [] });
    useEffect(() => {
        if (props.user !== "") {
            axios.get(`/user/getById/${props.user}`).then(result => {
                let Pets = result.data.Pets;
                let data = [];
                for (let i = 0; i < Pets.length; i++) {
                    const pet = {
                        _id: Pets[i]._id,
                        name: Pets[i].name,
                        breed: Pets[i].breed,
                        gender: Pets[i].gender,
                        age: Pets[i].age,
                        weight: Pets[i].weight,
                        personality: Pets[i].personality,
                        spayedNeutered: "",
                        rabiesVaccine: "",
                        bordatellaVaccine: "",
                        parvovirusVaccine: "",
                        distemperVaccine: ""
                    }
                    Pets[i].spayedNeutered ? pet["spayedNeutered"] = "Yes" : pet["spayedNeutered"] = "No";
                    Pets[i].rabiesVaccine ? pet["rabiesVaccine"] = "Yes" : pet["rabiesVaccine"] = "No";
                    Pets[i].bordatellaVaccine ? pet["bordatellaVaccine"] = "Yes" : pet["bordatellaVaccine"] = "No";
                    Pets[i].parvovirusVaccine ? pet["parvovirusVaccine"] = "Yes" : pet["parvovirusVaccine"] = "No";
                    Pets[i].distemperVaccine ? pet["distemperVaccine"] = "Yes" : pet["distemperVaccine"] = "No";
                    data.push(pet);
                    modifier({ Pets: data });
                }
            });
        }
    }, [props.user]);

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
                                {/* <Card.Img className="dogImage" /> */}
                                <PetPic _id={pet._id} />
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
