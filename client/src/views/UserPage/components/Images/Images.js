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
            <div classname="userImage">
                <label htmlFor="img">Select image:</label>
                <input type="file" id="img" className="img" accept="image/*" onChange={props.click} />
                <button className="btn submitBtn" type="button" onClick={props.upload}>Submit<i className="fa fa-rocket"></i></button>
                <br></br>
            </div>
        </div>
    )
}

export default Images;
