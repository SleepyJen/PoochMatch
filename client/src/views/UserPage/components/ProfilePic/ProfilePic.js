import React, { useEffect, useState } from 'react';
import avatar from '../default/avatar-default.png';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import './profilePic.css'

function ProfilePic(props) {
    const [value, modifier] = useState({ data: "" });
    useEffect(() => {
        console.log(props);
        if (props.img === "avatar") {
            modifier({ data: avatar });
        } else {
            axios.get(`/addImage/${props.img}`).then(result => {
                modifier({ data: result.data.data });
            });
        }
    }, []);

    return (
        <div>
            <Card.Img className="profileImage" src={value.data} alt="Profile Picture" />
        </div>
    )
}

export default ProfilePic
