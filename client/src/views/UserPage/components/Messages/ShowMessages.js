import React, { useEffect, useState } from 'react';
import './Messages.css';
import axios from 'axios';
import Comments from './Comments/Comments';
import ForUserMessage from './ForUserMessage/ForUserMessage';

function ShowMessages(props) {
    const [user, modifyUser] = useState({ id: [] });
    const [comments, modifyComment] = useState({ commentsInfo: [] });
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

    function clikedChat(event) {
        const { name } = event.target;
        console.log(name);
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
                                    <ForUserMessage click={clikedChat} key={index} user={use.userId} />
                                ))}
                            </div>
                            <div className="chatRoom">
                                <Comments />
                            </div>

                        </div>
                        <div className="chatInput">
                            <p>user text/chat input goes here</p>
                        </div>


                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ShowMessages;
