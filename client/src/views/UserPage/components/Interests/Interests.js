import React, { useState } from 'react';
import axios from 'axios'

function Interests(props) {
    const [value, modifier] = useState({ Interests: [] });
    axios.get(`/user/getById/${props._id}`).then(result => {
        let data = result.data.Interests;
        if (data.length === 0) {
        } else {
            modifier({ Interests: data })
        }
    });
    return (
        <div>
            {value.Interests.map((result, index) => (
                <h6 key={index}>{result}</h6>
            ))}
        </div>
    )
}

export default Interests
