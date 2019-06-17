import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuAppBar from '../../components/Topo'

class Rodobravo extends Component {
  render() {
    return (
    <React.Fragment>
      <MenuAppBar/>
      <div className="App">
        <h1>Rodobravo</h1>
      </div>
    </React.Fragment>
    );
  }
}
export default Rodobravo;