// eslint-disable-next-line
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import RodoPin from '../../components/PinRodobravo'
  
  class SimpleMap extends React.Component {
    state = {
      response: ''
    };
  
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.MAP_KEY }))
        .catch(err => console.log(err));
    }
  
    callApi = async () => {
      const response = await fetch('/api/map');
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
  
      return body;
    };

    static defaultProps = {
      center: {lat: -22.814105, lng: -43.335146},
      zoom: 11
    };

    render() {
      console.log('oi');
      console.log(this.state.response);
      
      
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