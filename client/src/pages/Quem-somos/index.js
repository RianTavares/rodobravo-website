import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'

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