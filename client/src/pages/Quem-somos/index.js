import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Media from "react-media";

class Rodobravo extends Component {
  render() {
    return (
      <React.Fragment>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"about-top"} text={"QUEM SOMOS"} />
          ) : (
            <PageHeader id={"about-top"} text={"QUEM SOMOS"} />
          )
        }
        </Media>
      
        <div className="site-content">
          <div className="page-content">
            <span className="page-content__about-text">  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
              ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
            </span>

            <div className="page-content__about-foto">
              <section className="page-content__about-foto__slide-gradiente">
                <label>Nosso primeiro veículo. Um VW13.180</label>
              </section>
              <div className="about-us-foto" id="vw">

              </div>
            </div>

            <span className="page-content__about-text">  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
              ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
            </span>

            <div className="page-content__about-foto">
              <section className="page-content__about-foto__slide-gradiente">
                <label>Nosso time de estratégia planejando operações</label>
              </section>
              <div className="about-us-foto" id="team">

              </div>
            </div>
             <section className="last">
              <span className="page-content__about-text">  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
                ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
              </span>
            </section> 
          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Rodobravo;