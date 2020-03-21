import React, { useEffect, useState } from 'react';
import './Messages.css';
import axios from 'axios';
import Comments from './Comments/Comments';
import ForUserMessage from './ForUserMessage/ForUserMessage';

function ShowMessages(props) {
    const [user, modifyUser] = useState({ id: [] });
    const [comments, modifyComments] = useState({ comments: [] });
    const [chatButton, modifyButton] = useState({ id: "", comment: "" });
    useEffect(() => {
        let data = [];
        for (let i = 0; i < props.comments.length; i++) {
            let info = {
                userId: "",
                commentId: ""
            }
            axios.get(`/comments/${props.comments[i]}`).then(result => {
                for (let j = 0; j < result.data.userId.length; j++) {
                    if (result.data.userId[j] !== props.userId) {
                        info['userId'] = result.data.userId[j];
                        info["commentId"] = props.comments[i];
                    }
                }
                data.push(info);
                modifyUser({ id: data });
            });
        }
    }, [props, chatButton]);

    async function clicked(name) {
        const urlQuerries = new URLSearchParams(window.location.search);
        const userId = urlQuerries.get('user_id');
        await axios.get(`/user/getById/${userId}`).then(result => {
            modifyComments({ comment: result.data.comments });
        });
        modifyButton({ id: name, comment: chatButton.comment });
    }

    function handleMessage(event) {
        const value = event.target.value;
        modifyButton({ id: chatButton.id, comment: value });
    }

    async function submit(e) {
        e.preventDefault();
        console.log(chatButton);
        console.log(user.id[0].commentId);
        const urlQuerries = new URLSearchParams(window.location.search);
        const userId = urlQuerries.get('user_id');
        let data = {
            from: userId,
            comment: chatButton.comment
        }
        console.log(data);
        await axios.post(`/comments/addComment/${user.id[0].commentId}`, {
            comment: data
        }).then(result => {
            modifyButton({ id: chatButton.id, comment: chatButton.comment });
        });
    }

    return (
        <div>
            <legend>Chat Room</legend>
            <div>
                <form>
                    <fieldset className="field">
                        <div className="chatContainer">

                            <div className="userChat">
                                {user.id.map((use, index) => (
                                    <ForUserMessage click={clicked} key={index} user={use.userId} name={use.userId} />
                                ))}
                            </div>
                            <div className="chatRoom">
                                <Comments comments={comments.comment} />
                            </div>

                        </div>
                        <div className="chatInput">
                            <label>Message: </label>
                            <input onChange={handleMessage} type="textarea"></input>
                            <button onClick={submit} type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ShowMessages;
