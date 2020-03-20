import React, { useEffect, useState } from 'react';
import './Messages.css';
import axios from 'axios';
import Comments from './Comments/Comments';
import ForUserMessage from './ForUserMessage/ForUserMessage';

function ShowMessages(props) {
    const [value, modifier] = useState({ comments: [] });
    const [comments, modifyComment] = useState({ commentsInfo: [] });
    useEffect(() => {

        modifier({ comments: props.comments });
        let data = [];
        for (let i = 0; i < props.comments.length; i++) {
            let info = {
                userId: "",
                comments: []
            }
            axios.get(`/comments/${props.comments[i]}`).then(result => {
                console.log(result);
                for (let j = 0; j < result.data.userId.length; j++) {
                    if (result.data.userId[j] !== props.userId) {
                        info['userId'] = result.data.userId[j];
                    }
                }
                info['comments'] = result.data.comments
                data.push(info);

                modifyComment({ commentsInfo: data });
            });
        }
    }, [props]);
    console.log(comments);

    return (
        <div>
            <legend>Chat Room</legend>

            {comments.commentsInfo.map((comm, index) => (
                <div key={index}>
                    <form>
                        <fieldset className="field">
                            {/* <div>
                        <legend>Chat Room</legend>
                    </div> */}

                            <div className="chatContainer">
                                <ForUserMessage user={comm.userId} />
                                <div className="chatRoom">
                                    <p>chat dialog goes here</p>
                                </div>
                            </div>
                            <div className="chatInput">
                                <p>user text/chat input goes here</p>
                            </div>
                        </fieldset>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default ShowMessages;
