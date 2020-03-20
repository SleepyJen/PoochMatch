import React, { Component } from 'react';
import './Messages.css';

const initState = {

}

class Messages extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="messageContainer" >
        <form>
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
        </form>
      </section>
    );
  }
}

export default Messages;
