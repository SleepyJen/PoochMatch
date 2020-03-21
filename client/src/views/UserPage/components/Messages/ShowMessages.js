import React, { useEffect, useState } from 'react';
import './Messages.css';
import axios from 'axios';
import Comments from './Comments/Comments';
import ForUserMessage from './ForUserMessage/ForUserMessage';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowMessages(props) {
    const [user, modifyUser] = useState({ id: [] });
    const [comments, modifyComments] = useState({ comments: [] });
    const [chatButton, modifyButton] = useState({ id: "", comment: "" });
    useEffect(() => {
        let data = [];
        for (let i = 0; i < props.comments.length; i++) {
            let info = {
                userId: ""
            }
            axios.get(`/comments/${props.comments[i]}`).then(result => {
                for (let j = 0; j < result.data.userId.length; j++) {
                    if (result.data.userId[j] !== props.userId) {
                        info['userId'] = result.data.userId[j];
                    }
                }
                data.push(info);
                modifyUser({ id: data });
            });
        }
    }, [props]);

    async function clicked(name) {
        console.log(name);
        const urlQuerries = new URLSearchParams(window.location.search);
        const userId = urlQuerries.get('user_id');
        await axios.get(`/user/getById/${userId}`).then(result => {
            modifyComments({ comment: result.data.comments });
        });
        modifyButton({ ['id']: name });
    }


    return (
        <div>
            <legend>Chat Room</legend>
            <div>
                <form>
                    <fieldset className="field">
                        <div className="chatContainer">
                            <div className="userChat">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-8 user-card">
                                            {user.id.map((use, index) => (
                                                <ForUserMessage click={clicked} key={index} user={use.userId} name={use.userId} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatRoom">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-10 chat-card">
                                            <Comments comments={comments.comment} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chatInput">
                            <label className="title-message">Message: </label>
                            <input type="textarea" className="text-box"></input>
                            <button type="submit" className="btn btn-primary send-btn">Send</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ShowMessages;
