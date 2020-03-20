import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PetPic(props) {
    const [value, modifier] = useState({
        PetInfo: {
            _id: props._id,
            name: "",
            image: "",
            imgId: "",
            imgLocation: ""
        }
    });
    useEffect(() => {
        axios.get(`/dog/${props._id}`).then(result => {
            const data = {
                _id: props._id,
                name: "",
                image: "",
                imgId: "",
                imgLocation: ""
            }
            data["name"] = result.data.name;
            if (result.data.images.length > 0) {
                data["imgId"] = result.data.images[0];
                axios.get(`/addImage/${value.PetInfo.imgId}`).then(result => {
                    data["imgLocation"] = result.data.data;
                    modifier({ PetInfo: data });
                });
            }
        });
    });

    //when someone uploads an image
    function fileSelected(event) {
        let data = {
            _id: value.PetInfo._id,
            name: value.PetInfo.name,
            image: event.target.files[0],
            imgId: value.PetInfo.imgId,
            imgLocation: value.PetInfo.imgLocation
        }
        modifier({ PetInfo: data });
    };

    //upload file
    async function fileUpload(event) {
        event.preventDefault();
        const fd = new FormData();
        fd.append("image", value.PetInfo.image, value.PetInfo.image.name);
        await axios.post("/addImage/file", fd).then(result => {
            console.log(result);
            axios.post(`/dog/addImages/${value.PetInfo._id}`, {
                images: result.data.data._id
            });
            let data = {
                _id: value.PetInfo._id,
                name: value.PetInfo.name,
                image: value.PetInfo.image,
                imgId: result.data.data._id,
                imgLocation: result.data.data.images
            }
            modifier({ PetInfo: data });
        });
    };

    return (
        <div>
            <img src={value.PetInfo["imgLocation"]} alt="pet profile" className="image"></img>
            <div className="justify-content-center mb-3">
                <div className="uploadImage" id="userImage">
                    <label htmlFor="img"></label>
                    <input type="file" id="img" className="img" accept="image/*" onChange={fileSelected} />
                    <button className="btn submitBtn" type="button" onClick={fileUpload}>Save Image <i className="fa fa-rocket"></i></button>
                </div>
            </div>
        </div>
    )
}

export default PetPic;
