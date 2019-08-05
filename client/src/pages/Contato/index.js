import React, { Component } from 'react'
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Media from "react-media"
import SimpleMap from '../../components/Map'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Form from '../../components/Form'
import Alert from '../../components/Alert'

class Contato extends Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <React.Fragment>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"contact-top"} text={"CONTATO"} />
          ) : (
            <PageHeader id={"contact-top"} text={"CONTATO"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl justo, 
              ultricies non est nec, malesuada interdum augue. 
            </span>

            <h1 className="titles">Nossa Matriz</h1>
            <div className="page-content__google-map" style={{width: '100%', height: '400px'}}>
              <SimpleMap/>
            </div>
            <div className="page-content__contact-card">
              <h1 className="titles">Atendimento</h1>
              <div >
                <span>
                  De segunda a sexta das 9h às 18h através dos nossos telefones.
                </span>
              <div className="page-content__contact-card__item">
                <FontAwesomeIcon icon={faPhone} />
                <span>(21) 2474-6441</span>
              </div>
            </div>
          </div>
        
            <h1 className="titles">Fale Conosco</h1>
            <Alert />
            <Form />
            
        </div>
      </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Contato;