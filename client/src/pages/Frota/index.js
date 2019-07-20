import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import Partners from '../../components/Partners'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import mapa from "../../assets/imgs/mapas.png"
import support from "../../assets/imgs/support.png"
import antenna from "../../assets/imgs/antenna.png"
import truck from "../../assets/imgs/delivery-truck.png"
import PageHeader from '../../components/PageHeader'
import frotaMobi from '../../assets/imgs/frota.jpeg'
import frotaDesk from '../../assets/imgs/frota-desk.jpg'
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
            <PageHeader img={frotaDesk} text={"FROTA"} />
          ) : (
            <PageHeader img={frotaMobi} text={"FROTA"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <div className="page-content__top">
              <div>
                <h1 className="titles">Fale Conosco</h1>
                <div className="page-content__contact">
                <div className="page-content__contact__item">
                  <FontAwesomeIcon icon={faPhone} />
                  <label>(21) 2474-6441</label>
                </div>
                <div className="page-content__contact__item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <label>rodobravo@transrodobravo.com.br</label>
                </div>
                <div className="page-content__contact__item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <label>Rua Maria José 21, Pavuna RJ</label>
                </div>

                <div className="page-content__contact__social">
                  <div className="page-content__contact__social__item">
                    <a href="https://www.facebook.com/rodobravotransportes/" target="_blank" rel="noopener noreferrer" alt="Facebook Rodobravo Transportes">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </div>
                  <div className="page-content__contact__social__item">
                    <a href="https://www.instagram.com/rodobravo_transportes/" target="_blank" rel="noopener noreferrer" alt="Instagram Rodobravo Transportes">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                  <div className="page-content__contact__social__item">
                    <a href="https://www.linkedin.com/company/rodobravo-transportes/" target="_blank" rel="noopener noreferrer" alt="Linkedin Rodobravo Transportes">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
              </div>
              <div>
                <h1 className="titles">Onde Atuamos</h1>
                <div className="page-content__map">
                <img src={mapa} alt="Mapa de atuação de transportes Rodobravo"/>
              </div>
              </div>
            </div>
            <p id="map-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
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
export default Frota;