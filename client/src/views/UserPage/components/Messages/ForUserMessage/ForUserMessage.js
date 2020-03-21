import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Messages.css';

function ForUserMessage(props) {
    const [value, modifier] = useState({ name: "" });
    useEffect(() => {
        axios.get(`/user/getById/${props.user}`).then(result => {
            let fullName = result.data.firstName + " " + result.data.lastName;
            modifier({ name: fullName });
        });
    }, [props.user]);

    function clicked() {
        let user = props.user;
        props.click(user);
    }

    return (
        <div onClick={clicked} className="chatIm" value={props.user}>
            <p>{value.name}</p>
        </div>
    )
}

export default ForUserMessage;
