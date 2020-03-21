import React, { Component } from 'react';
import './Messages.css';
import axios from 'axios';
import ShowMessages from './ShowMessages';

const initState = {
  comments: [],
  thisUser: ""
}

class Messages extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  async componentDidMount() {
    const urlQuerrie = new URLSearchParams(window.location.search);
    const userId = urlQuerrie.get('user_id');
    const user = await axios.get(`/user/getById/${userId}`);
    const messages = user.data.comments;
    this.setState({ comments: messages, thisUser: userId });
  }

  render() {
    return (
      <section className="messageContainer">
        <ShowMessages comments={this.state.comments} userId={this.state.thisUser} />
        {/* <form className="form-container">
          <fieldset className="field">
            <div>
              <legend>Chat Room</legend>
            </div>

            <div className="chatContainer">
              <div className="chatIm">
                <p>screen name</p>
              </div>
              <div className="chatRoom">
                <p>chat dialog goes here</p>
              </div>
            </div>
            <div className="chatInput">
              <p>user text/chat input goes here</p>
            </div>
          </fieldset>
        </form> */}

      </section>
    );
  }
}

export default Messages;
