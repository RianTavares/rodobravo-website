import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import Partners from '../../components/Partners'
import Slide from '../../components/Slide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import mapa from "../../assets/imgs/mapa-operacao.jpg"
import support from "../../assets/imgs/support.png";
import antenna from "../../assets/imgs/antenna.png";
import truck from "../../assets/imgs/delivery-truck.png";


class Home extends Component {
  
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
                  <button className="page-content__top__item__contact__item__button">Saiba mais</button>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
            </div>
            
            <section className="page-content__service-cards__list">
              <section className="page-content__service-cards__list__item top">
                <div className="page-content__service-cards__list__item__circle">
                  <img src={support} alt="Serviços de transferência, cargas secas e resfriadas Rodobravo"/>
                </div>
                  <span>
                    Prestamos serviços de tranferência para os mais diversos clientes
                    e visamos atender ao mercado farmacêutico.
                  </span>
                <button className="page-content__service-cards__list__item__button">Saiba mais</button>
                <div className="page-content__service-cards__list__item__card"></div>
              </section>
              <section className="page-content__service-cards__list__item">
                <div className="page-content__service-cards__list__item__circle">
                  <img src={antenna} alt="Rodobravo gerenciamento de risco e monitoramento 24 horas"/>
                </div>
                  <span>
                  Monitoramento e rastreio 24h, com a mais alta tecnologia do mercado mantendo nossos clientes seguros.
                  </span>
                <button className="page-content__service-cards__list__item__button">Saiba mais</button>
                <div className="page-content__service-cards__list__item__card"></div>
              </section>
              <section className="page-content__service-cards__list__item">
              <div className="page-content__service-cards__list__item__circle">
                <img src={truck} alt="Frota Rodobravo em bom estado e equipe capacitada" />
              </div>
                <span>
                  Nossa frota é bem capacitada com os mais diversos tipos de caminões a disposição dos nosso clientes.
                </span>
              <button className="page-content__service-cards__list__item__button">Saiba mais</button>
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