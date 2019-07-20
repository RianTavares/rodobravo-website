import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Media from "react-media"

class Rastreio extends Component {
  render() {
    return (
      <React.Fragment>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"tracking-top"} text={"MONITORAMENTO"} />
          ) : (
            <PageHeader id={"tracking-top"} text={"RASTREIO"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
            ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
            ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
            </span>
            
            <section className="page-content__logos last">
              <div id="logo1">
              </div>
              <div id="logo2">
              </div>
              <div id="logo3">
              </div>
              <div id="logo4">
              </div>
            </section>

          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Rastreio;