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
           
          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Servicos;