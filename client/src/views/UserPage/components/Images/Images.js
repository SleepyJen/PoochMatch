import React from 'react';
import './image.css';

function Images(props) {
    let img;
    if (props.img !== "") {
        img = props.img;
    } else {
        img = "";
    }
    return (
        <div>
            <img src="../../../../../../uploads/1583912526196530sFfh8Txq25L%nhmS6+g_thumb_10.jpg" alt="profile" className="image"></img>
            <div>
                <label htmlfor="img">Select image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={props.click} />
                <button onClick={props.upload}>Submit</button>
            </div>
        </div>
    )
}

export default Images;
