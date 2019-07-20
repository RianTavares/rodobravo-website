import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import servicoMobi from '../../assets/imgs/servicos.jpeg'
import servicoDesk from '../../assets/imgs/servicos-desk.jpg'
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
            <PageHeader img={servicoDesk} text={"SERVIÇOS"} />
          ) : (
            <PageHeader img={servicoMobi} text={"SERVIÇOS"} />
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