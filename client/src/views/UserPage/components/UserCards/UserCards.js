import React, { useState } from 'react';
import axios from 'axios';
import Interests from '../Interests/Interests';
import Pets from '../Pets/Pets';
import ProfilePic from '../ProfilePic/ProfilePic';
import { Card, ListGroup, ListGroupItem, Dropdown, Form, Button } from 'react-bootstrap'
import './userCard.css';

function UserCards(props) {
    const [value, modifier] = useState({ people: [], imgs: [] });
    const [message, modifyMessage] = useState({ data: "", id: "" });

    axios.get(`/user/getByCity/${props.City}`).then(result => {
        let ppl = result.data;
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

    //handles messages that are typed 
    function handleMessage(e) {
        const { name, value } = e.target;
        let mess = value;
        modifyMessage({ data: mess, id: name });
    }

    //send message to database
    function sendMessage(event) {
        event.preventDefault();
        const urlQuerries = new URLSearchParams(window.location.search);
        const userId = urlQuerries.get('user_id');
        console.log(userId, message.id);
        axios.get(`/user/getById/${userId}`).then(result => {
            let comments = result.data.comments;
            if (comments.length > 0) {
                console.log(comments);
                for (let i = 0; i < comments.length; i++) {
                    axios.get(`/comments/${comments}`).then(result => {
                        let users = result.data.userId;
                        if (users.includes(userId) && users.includes(message.id)) {
                            alert('already have a message thread');
                            i = comments.length;
                        } else if (!users.includes(userId) && !users.includes(message.id) && i === comments.length - 1) {
                            createComment(userId);
                        }
                    });
                }
            } else {
                createComment(userId);
            }
        });
    }

    async function createComment(userId) {
        let data = [userId, message.id];
        await axios.post(`/comments/createComment`, {
            userId: data,
            comments: message.data
        }).then(result => {
            let commentId = result.data._id;
            console.log(commentId);
            axios.post(`/user/addComment/${userId}`, {
                comments: commentId
            });
            axios.post(`/user/addComment/${message.id}`, {
                comments: commentId
            });
        });
    }

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
                            <Card.Link href={`/profile?user_profile=${person._id}`} className="btn btn-primary">View website</Card.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Message
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Form className="p-1">
                                        <Form.Group>
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control onChange={handleMessage} type="input" placeholder="Enter Messages" name={person._id} />
                                        </Form.Group>
                                        <Button onClick={sendMessage} type="submit" className="btn btn-primary" >Send</Button>
                                    </Form>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>


    )
}

export default UserCards;
