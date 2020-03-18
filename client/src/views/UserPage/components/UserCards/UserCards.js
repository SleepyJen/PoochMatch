import React, { useState } from 'react';
import axios from 'axios';
import Interests from '../Interests/Interests';

function UserCards(props) {
    const [value, modifier] = useState({ people: [], imgs: [] });

    axios.get(`/user/getByCity/${props.City}`).then(result => {
        let ppl = result.data;
        let data = [];
        let imgs = [];
        for (let i = 0; i < ppl.length; i++) {
            if (ppl[i]._id !== props._id) {
                data.push(ppl[i]);
                console.log(ppl[i]);
                if (ppl[i].imgs) {
                    axios.get(`/addImage/${ppl[i].imgs}`).then(res => {
                        imgs.push(res.data.data);
                    });
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
                        <p className="card-text"><Interests _id={person._id} /></p>
                        <a href="#" className="btn btn-primary">View website</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserCards;
