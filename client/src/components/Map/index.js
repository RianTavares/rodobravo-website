// eslint-disable-next-line
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import RodoPin from '../../components/PinRodobravo'

  class SimpleMap extends React.Component {
    state = {
      response: process.env.REACT_APP_API_MAP
    };
  
    static defaultProps = {
      center: {lat: -22.814105, lng: -43.335146},
      zoom: 11
    };

    render() {
      return (
         <GoogleMapReact
            bootstrapURLKeys={{ key: this.state.response }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
        
            <RodoPin
                lat={-22.814105} 
                lng={-43.335146} 
            />
        </GoogleMapReact>
        
      );
    }
  }
  
  export default SimpleMap;