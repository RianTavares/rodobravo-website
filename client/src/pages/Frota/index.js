import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Media from "react-media"

class Frota extends Component {
  render() {
    return (
      <React.Fragment>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"trucks-top"} text={"FROTA"} />
          ) : (
            <PageHeader id={"trucks-top"} text={"FROTA"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <section className="page-content__gallery last">
              <div id="Frota-Rodobravo-1"></div>
              <div id="Frota-Rodobravo-2"></div>
              <div id="Frota-Rodobravo-3"></div>
              <div id="Frota-Rodobravo-4"></div>
              <div id="Frota-Rodobravo-5"></div>
              <div id="Frota-Rodobravo-6"></div>
              <div id="Frota-Rodobravo-7"></div>
              <div id="Frota-Rodobravo-8"></div>
              <div id="Frota-Rodobravo-9"></div>
              <div id="Frota-Rodobravo-10"></div>
              <div id="Frota-Rodobravo-11"></div>
              <div id="Frota-Rodobravo-12"></div>
            </section>
          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Frota;