import React, { useEffect, useState } from 'react';
import './image.css';
import axios from 'axios';


function Images(props) {
    const [value, modifier] = useState({ data: "" });
    useEffect(() => {
        axios.get(`/addImage/${props.img}`).then(result => {

            if (result.length > 1) {
                modifier({ data: result[0].data.data });
            } else {
                modifier({ data: result.data.data });
            }
        }).catch(err => console.log(err));
    }, [props.img]);

    return (
        <div>
            <img src={value.data} alt="profile" className="image"></img>
            <div className="userImage">
                <label htmlFor="img">Select image:</label>
                <input type="file" id="img" className="img" accept="image/*" onChange={props.click} />
                <button className="btn submitBtn" type="button" onClick={props.upload}>Submit<i className="fa fa-rocket"></i></button>
                <br></br>
            </div>
        </div>
    )
}

export default Images;
