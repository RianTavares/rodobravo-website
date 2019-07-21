import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Media from "react-media"

class Servicos extends Component {
  render() {
    return (
      <React.Fragment>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"services-top"} text={"SERVIÇOS"} />
          ) : (
            <PageHeader id={"services-top"} text={"SERVIÇOS"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
              ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
            </span>

            <section className="page-content__service">
              <div className="page-content__service__text">
                <h1 className="titles">Lorem Ipsum</h1>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
                  ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
                </span>
              </div>
              <div className="page-content__service__foto">
                <div id="service-item1"></div>
              </div>
            </section>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
              ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
            </span>

            <section className="page-content__service">
              <div className="page-content__service__text order2">
                <h1 className="titles">Lorem Ipsum</h1>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
                  ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
                </span>
              </div>
              <div className="page-content__service__foto order1">
                <div id="service-item2"></div>
              </div>
            </section>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
              ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
            </span>

            <section className="page-content__service last">
              <div className="page-content__service__text">
                <h1 className="titles">Lorem Ipsum</h1>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
                  ultricies non est nec, malesuada interdum augue. Nam vitae diam justo. Curabitur ut euismod nulla. Nam sed pellentesque ipsum.
                </span>
              </div>
              <div className="page-content__service__foto">
                <div id="service-item3"></div>
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
export default Servicos;