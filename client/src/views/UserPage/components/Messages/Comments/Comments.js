import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Comments(props) {
    const [value, modifier] = useState({ comment: [] });
    useEffect(() => {
        axios.get(`/comments/${props.comments}`).then(result => {
            let comments = result.data.comments;
            let data = [];
            for (let i = 0; i < comments.length; i++) {
                let info = {
                    name: "",
                    comment: ""
                }
                info["comment"] = comments[i].comment;
                axios.get(`/user/getById/${comments[i].from}`).then(res => {
                    console.log(res);
                    let name = res.data.firstName + " " + res.data.lastName;
                    info["name"] = name;
                    data.push(info);
                    modifier({ comment: data });
                });
            }
        });
    }, [props.comments]);

    return value.comment.map((comment, index) => (
        <div key={index}>
            <h5><strong>{comment.name}: </strong></h5>
            <h6>{comment.comment}</h6>
        </div>
    ));
}

export default Comments;
