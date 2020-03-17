import React, { useState } from 'react';
import axios from 'axios';

function UserCards(props) {
    const [value, modifier] = useState({ people: [] });

    axios.get(`/user/getByCity/${props.City}`).then(result => {
        let ppl = result.data;
        let data = [];
        let imgs = [];
        for (let i = 0; i < ppl.length; i++) {
            if (ppl[i]._id !== props._id) {
                data.push(ppl[i]);
                if (ppl[i].imgs) {
                    axios.get(`/addImage/${ppl[i].imgs}`).then(res => {
                    });
                }
            }
        }
        modifier({ people: data });
    });
    return (
        <div >

            {value.people.map((person, index) => (
                <div className="card">
                    <img className="card-img-top" src={person.imgs} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
            {/* 
             */}
        </div>
    )
}

export default UserCards;
