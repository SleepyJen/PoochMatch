import React, { useEffect, useState } from 'react';
import './image.css';
import axios from 'axios';


function Images(props) {
    const [value, modifier] = useState({ data: "" });
    useEffect(() => {
        axios.get(`/addImage/${props.img}`).then(result => {
            console.log(result.data);
            if (result.length > 1) {
                modifier({ data: "" });
            } else {
                modifier({ data: result.data.data });
            }
        }).catch(err => console.log(err));
    }, [props.img]);
    console.log(value);

    return (
        <div>
            <img src={value.data} alt="profile" className="image"></img>
            <div>
                <label htmlFor="img">Select image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={props.click} />
                <button onClick={props.upload}>Submit</button>
            </div>
        </div>
    )
}

export default Images;
