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

    return (
        <div>
            <div className="chatIm">
                <p>{value.name}</p>
            </div>
        </div>
    )
}

export default ForUserMessage;
