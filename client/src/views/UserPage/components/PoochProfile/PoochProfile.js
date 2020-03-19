import React, { Component } from 'react';
import './PoochProfile.css';
import axios from 'axios';
import Pets from '../Pets/Pets';

const initState = {
  Pets: []
}

class PetInfo extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  async componentDidMount() {
    const urlQuerries = new URLSearchParams(window.location.search);
    const userId = urlQuerries.get("user_id");
    await axios.get(`/user/getById/${userId}`).then(result => {
      this.setState({ Pets: result.data.Pets });
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="container mb-3 justify-content-center">
          <h2>Pets</h2>
        </div>
        <Pets Pets={this.state.Pets} />
      </div >
    );
  }
}


export default PetInfo