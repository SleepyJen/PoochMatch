import React, { useEffect, useState } from 'react' // , { useState }
import './MatchProfile.css';
import { Card, Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import Interests from '../UserPage/components/Interests/Interests';

function MatchProfile(props) {
    const [user, modifyUser] = useState({ userInfo: {} });
    const [pets, modifyPets] = useState({ Pets: [] });
    useEffect(() => {
        const urlQuerrie = new URLSearchParams(window.location.search);
        const userId = urlQuerrie.get('user_profile');
        axios.get(`/user/getById/${userId}`).then(result => {
            axios.get(`/addImage/${result.data.imgs}`).then(res => {
                let data = {
                    name: result.data.firstName + " " + result.data.lastName,
                    city: result.data.City,
                    interests: result.data.Interests,
                    email: result.data.email,
                    _id: result.data._id,
                    image: res.data.data
                }
                modifyUser({ userInfo: data });
                let petsData = [];
                for (let i = 0; i < result.data.Pets.length; i++) {
                    axios.get(`/dog/${result.data.Pets[0]._id}`).then(res2 => {
                        console.log(res2.data);
                        axios.get(`/addImage/${res2.data.images[0]}`).then(result2 => {
                            let data2 = {
                                name: res2.data.name,
                                breed: res2.data.breed,
                                gender: res2.data.gender,
                                age: res2.data.age,
                                spayedNeutered: "",
                                image: result2.data.data
                            }
                            res2.data.spayedNeutered ? data2["spayedNeutered"] = "Yes" : data2["spayedNeutered"] = "No";
                            petsData.push(data2);
                            modifyPets({ Pets: petsData });
                        });
                    });
                }
            });
        });;
    }, []);

    return (
        <div className="component mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-10 matchProfilecard">
                    <Card style={{ width: 'auto', height: 'auto' }}>

                        <Card.Body>
                            <h2>We feel they are a great match for your pooch!</h2>
                            <Card.Title className="cardTitleUser mb-2 mt-3" id="userMatchCard">User</Card.Title>

                            <div className="row">
                                <ListGroup className="userImage list-group col-4">
                                    <Card.Img variant="top" className="card-img" src={user.userInfo.image} />
                                </ListGroup>
                                <ListGroup className="list-group col-7">
                                    <ListGroupItem className="name" id="name"><strong>Name: </strong>{user.userInfo.name}</ListGroupItem>
                                    <ListGroupItem className="city" id="city"><strong>City: </strong>{user.userInfo.city}</ListGroupItem>
                                    <ListGroupItem className="interests" id="interests"><strong>Interests: </strong>
                                        <Interests _id={user.userInfo._id} />
                                    </ListGroupItem>
                                    <ListGroupItem className="email" id="email"><strong>Email: </strong>{user.userInfo.email}</ListGroupItem>
                                </ListGroup>

                            </div>

                            <Card.Text>
                                <Card.Title className=" cardTitlePets mb-2 mt-3" id="petCard">Pets</Card.Title>
                            </Card.Text>
                            {pets.Pets.map(userPet => (
                                <div className="row mb-3">
                                    <ListGroup className="list-group col-7 ml-3">
                                        <ListGroupItem className="poochName" id="poochName"><strong>Name: </strong>{userPet.name}</ListGroupItem>
                                        <ListGroupItem className="dogBreed" id="breed"><strong>Breed: </strong>{userPet.breed}</ListGroupItem>
                                        <ListGroupItem className="dogGender" id="gender"><strong>Gender: </strong>{userPet.gender}</ListGroupItem>
                                        <ListGroupItem className="dogAge" id="age"><strong>Age: </strong>{userPet.age}</ListGroupItem>
                                        <ListGroupItem className="dogSpayedNeutered" id="spayedNeutered"><strong>Spayed/Neutered: </strong> </ListGroupItem>
                                    </ListGroup>
                                    <ListGroup className="userImage list-group col-4">
                                        <Card.Img className="poochImage" variant="top" src={userPet.images} />
                                    </ListGroup>
                                </div>
                            ))}
                        </Card.Body>

                    </Card>
                    <Button variant="primary" className="btn btn-large backDashboard mt-3 mb-3" href={"/user?userId=" + props.id} >Back to Dashboard</Button>
                </div>
            </div>
        </div>
    );

}



export default MatchProfile