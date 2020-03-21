import React, { useEffect, useState } from 'react';
import './Messages.css';
import axios from 'axios';
import Comments from './Comments/Comments';
import ForUserMessage from './ForUserMessage/ForUserMessage';

function ShowMessages(props) {
    const [user, modifyUser] = useState({ id: [] });
    const [comments, modifyComments] = useState({ comments: [] });
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
                            <p>user text/chat input goes here</p>
                        </div>


                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ShowMessages;
