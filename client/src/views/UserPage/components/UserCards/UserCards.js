import React, { useState } from 'react';
import axios from 'axios';
import Interests from '../Interests/Interests';
import avatar from '../default/avatar-default.png'

function UserCards(props) {
    const [value, modifier] = useState({ people: [], imgs: [] });

    axios.get(`/user/getByCity/${props.City}`).then(result => {
        let ppl = result.data;
        let data = [];
        let imgs = [];
        for (let i = 0; i < ppl.length; i++) {
            if (ppl[i]._id !== props._id) {
                data.push(ppl[i]);
                if (ppl[i].imgs) {
                    axios.get(`/addImage/${ppl[i].imgs}`).then(res => {
                        imgs.push(res.data.data);
                    });
                } else {
                    imgs.push(avatar);
                }
            }
        }
        modifier({ people: data, imgs: imgs });
    });
    return (
        <div >
            {value.people.map((person, index) => (
                <div className="card" key={index}>
                    <img className="card-img-top" src={value.imgs[index]} alt="profile pic" />
                    <div className="card-body">
                        <h5 className="card-title">{person.firstName} {person.lastName}</h5>
                        <Interests _id={person._id} />
                        <a href={`/profile?user_profile=${person._id}`} className="btn btn-primary">View website</a>
                    </div>
                </div>
            ))}
            <br></br>
        </div>
    )
}

export default UserCards;
