import React, { Component } from 'react'
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import Partners from '../../components/Partners'
import Slide from '../../components/Slide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import mapa from "../../assets/imgs/rodobravo-atuacao3.png"
import truck from "../../assets/imgs/delivery-truck.png"
import frete from "../../assets/imgs/icon-frete3.png"
import track from "../../assets/imgs/icon-monitoring.png"
import { NavLink } from 'react-router-dom'


class Home extends Component {
  
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
    <React.Fragment>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
        <div className="site-content">
          <Slide />
          <div className="page-content">
            <div className="page-content__top">
              <div className="page-content__top__item">
                <h1 className="titles">Cotação de Frete</h1>
                <div className="page-content__top__item__contact">
                <div className="page-content__top__item__contact__item">
                  <span className="page-content__top__item__contact__item__span">
                    Através da nossa página de contato você pode realizar cotação de frete online, 
                    tirar suas dúvidas ou enviar críticas e sugestões.
                  </span>
                  <NavLink exact to='/contato'>
                    <button className="page-content__top__item__contact__item__button">Saiba mais</button>
                  </NavLink>
                </div>
                <div className="page-content__top__item__contact__social">
                  <a href="https://www.facebook.com/rodobravotransportes/" target="_blank" rel="noopener noreferrer" alt="Facebook Rodobravo Transportes">
                    <div className="page-content__top__item__contact__social__item">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/rodobravo_transportes/" target="_blank" rel="noopener noreferrer" alt="Instagram Rodobravo Transportes">
                    <div className="page-content__top__item__contact__social__item">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/rodobravo-transportes/" target="_blank" rel="noopener noreferrer" alt="Linkedin Rodobravo Transportes">
                    <div className="page-content__top__item__contact__social__item">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                  </a>
                </div>
              </div>
              </div>
              <div className="page-content__top__item h1-map">
                <h1 className="titles">Onde Atuamos</h1>
                <div className="page-content__map">
                  <img src={mapa} alt="Mapa de atuação de transportes Rodobravo"/>
                </div>
              </div>
              <div className="page-content__top__item span-map">
                  <span>
                    Atualmente atuamos em operações que cobrem toda região Sudeste e parte da região Centro-Oeste.
                    Visamos expandir e formar unidades operacionais nessas regiões próximas às bases de nossos clientes.
                  </span>
                </div>
            </div>
            
            <section className="page-content__service-cards__list">
              <section className="page-content__service-cards__list__item top">
                <div className="page-content__service-cards__list__item__circle">
                  <img src={frete} alt="Serviços de transferência, cargas secas e resfriadas Rodobravo"/>
                </div>
                  <span>
                   Fretes completos, parciais, transferências secas e frigorificadas. Conheça mais sobre os nossos serviços!
                  </span>
                  <NavLink exact to='/servicos'>
                    <button className="page-content__service-cards__list__item__button">Saiba mais</button>
                  </NavLink>
                  <div className="page-content__service-cards__list__item__card"></div>
              </section>
              <section className="page-content__service-cards__list__item">
                <div className="page-content__service-cards__list__item__circle">
                  <img src={track} alt="Rodobravo gerenciamento de risco e monitoramento 24 horas"/>
                </div>
                  <span>
                  Rastreio e monitoramento 24h, com a mais alta tecnologia do mercado mantendo sua carga segura.
                  </span>
                <NavLink exact to='/rastreio'>
                  <button className="page-content__service-cards__list__item__button">Saiba mais</button>
                </NavLink>
                <div className="page-content__service-cards__list__item__card"></div>
              </section>
              <section className="page-content__service-cards__list__item">
              <div className="page-content__service-cards__list__item__circle">
                <img src={truck} alt="Frota Rodobravo em bom estado e equipe capacitada" />
              </div>
                <span>
                  Uma frota extensa a sua disposição e capacitada, levando o que importa até você!
                </span>
              <NavLink exact to='/frota'>
                <button className="page-content__service-cards__list__item__button">Saiba mais</button>
              </NavLink>
              <div className="page-content__service-cards__list__item__card secs"></div>
            </section>
            </section>
            <h1 className="titles">Alguns Parceiros</h1>
            <Partners/>
          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Home;