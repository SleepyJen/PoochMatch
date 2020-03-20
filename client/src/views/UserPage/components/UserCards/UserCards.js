import React, { useState } from 'react';
import axios from 'axios';
import Interests from '../Interests/Interests';
import Pets from '../Pets/Pets';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './userCard.css';

function UserCards(props) {
    const [value, modifier] = useState({ people: [], imgs: [] });

    axios.get(`/user/getByCity/${props.City}`).then(result => {
        let ppl = result.data;
        console.log(ppl)
        let data = [];
        let imgs = [];
        for (let i = 0; i < ppl.length; i++) {
            if (ppl[i]._id !== props._id) {
                data.push(ppl[i]);
                if (ppl[i].imgs) {
                    imgs.push(ppl[i].imgs);
                } else {
                    imgs.push("avatar");
                }
            }
        }
        modifier({ people: data, imgs: imgs });
    });

    return (

        <div className="row justify-content-center">
            <div className="col-sm-12 matchCard">
                {value.people.map((person, index) => (

                    <Card key={index} style={{ width: '100%', margin: "5px 0", height: 'auto' }}>

                        <Card.Body className="cardMain row no-gutters justify-content-center">
                            <ListGroup className="list-group col-6">
                                <ListGroupItem className="name" id="name"><strong>Name: </strong>{person.firstName} {person.lastName}</ListGroupItem>
                                <ListGroupItem classname="city" id="city"><strong>City: </strong>{person.City}</ListGroupItem>
                                <ListGroupItem classname="interests" id="interests"><strong>Interests: </strong><Interests _id={person._id} /></ListGroupItem>
                                <ListGroupItem classname="pets" id="pets"><strong>Pets: </strong></ListGroupItem>
                            </ListGroup>

                            <ListGroup className="list-group col-6 image-container">
                                <ProfilePic img={value.imgs[index]} />
                            </ListGroup>
                        </Card.Body>

                        <Card.Body className="cardFooter">
                            {/* <Card.Link href={`/profile?user_profile=${person._id}`} className="btn btn-primary">View profile</Card.Link> */}
                            <Card.Link href={`/profile?user_profile=${person._id}`} className="btn btn-primary">View profile</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>


    )
}

export default UserCards;
