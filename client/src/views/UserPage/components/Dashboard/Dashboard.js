import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Dashboard.css";
import UserCards from '../UserCards/UserCards';
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const initState = {
  lat: 37.7749,
  lng: -122.4194,
  center: {
    lat: 37.7749, lng: -122.4194
  },
  zoom: 11,
  City: "",
  _id: ""
}

class Dashboard extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  async componentDidMount() {
    const UrlQuerries = new URLSearchParams(window.location.search);
    const userId = UrlQuerries.get('user_id');
    let City = "City";
    let _id = "_id";
    let user = await axios.get(`/user/getById/${userId}`);
    this.setState({
      [City]: user.data.City,
      [_id]: userId
    });
  }

  static defaultProps = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 11
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-left">
            <div className="mapContainer col-sm-4"
              style={{ height: "60vh", width: "30%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyAslvs6KNkTaQS-cW6hOwrrccd4XEozlEk"
                }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
              >
                {/* <AnyReactComponent lat={27.2} lng={77.5} text="My Marker" /> */}
              </GoogleMapReact>
            </div>
            <div className="cardContainer col-sm-7" >
              <UserCards _id={this.state._id} City={this.state.City} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default SimpleMap;
export default Dashboard;
