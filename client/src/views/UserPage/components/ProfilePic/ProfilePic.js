import React, { useEffect, useState } from 'react';
import avatar from '../default/avatar-default.png';
import axios from 'axios';
import './profilePic.css'

function ProfilePic(props) {
    const [value, modifier] = useState({ data: "" });
    useEffect(() => {
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
            <img className="image" src={value.data} alt="Profile Picture"></img>
        </div>
    )
}

export default ProfilePic
