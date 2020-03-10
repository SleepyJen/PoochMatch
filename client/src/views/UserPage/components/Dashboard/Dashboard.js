import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Dashboard.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Dashboard extends Component {
  static defaultProps = {
    center: { lat: 40.73, lng: -73.93 },
    zoom: 11
  };

  render() {
    return (
      <div className="row justify-content-left">
        <div className="mapContainer col-4" style={{ height: '77vh', width: '30%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAslvs6KNkTaQS-cW6hOwrrccd4XEozlEk' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={27.20}
              lng={77.5}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div className="userCardsContainer col-7">
          <h1> the user cards go here</h1>
        </div>
      </div>
    );
  }
}

// export default SimpleMap;
export default Dashboard