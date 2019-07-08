import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class NavBarMobi extends Component {
  constructor(props){
    super(props)
    this.menuWasClicked = this.menuWasClicked.bind(this)
  }

  menuWasClicked() {
    const body = document.body;
    const check = document.getElementById("menu-slide").checked;
    if (check) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }

  render () {

    return (
      <React.Fragment>
                <input onClick={this.menuWasClicked} type="checkbox" className="menu-slide" id="menu-slide" />
                <div className="menu-slide-bar" id="menu-slide-bar">
                  <nav>
                    <NavLink exact className='menu-slide-bar__link' to='/' activeClassName="underline">Início</NavLink>
                    <NavLink exact className='menu-slide-bar__link' to='/rodobravo' activeClassName="underline">Quem Somos</NavLink>
                    <NavLink exact className='menu-slide-bar__link' to='/frota' activeClassName="underline">Frota</NavLink>
                    <NavLink exact className='menu-slide-bar__link' to='/rastreio' activeClassName="underline">Monitoramento</NavLink>
                    <NavLink exact className='menu-slide-bar__link' to='/servicos' activeClassName="underline">Serviços</NavLink>
                    <NavLink exact className='menu-slide-bar__link' to='/contato' activeClassName="underline">Contato</NavLink>
                    <div id="menu-slide-bar__footer">
                      <div id="icons">
                        <div className="footer__facebook-icon">
                          <a href="https://www.facebook.com/rodobravotransportes/" target="_blank" alt="Facebook Rodobravo Transportes">
                            <FontAwesomeIcon icon={faFacebookF} size="1x" />
                          </a>
                        </div>
                        <div className="footer__instagram-icon">
                          <a href="https://www.instagram.com/rodobravo_transportes/" target="_blank" alt="Instagram Rodobravo Transportes">
                            <FontAwesomeIcon icon={faInstagram} size="1x" />
                          </a>
                        </div>
                        <div className="footer__linkedin-icon">
                          <a href="https://www.linkedin.com/company/rodobravo-transportes/" target="_blank" alt="Linkedin Rodobravo Transportes">
                            <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                          </a>
                        </div>
                      </div>

                      <div id="footer-info">
                        <div className="footer-info__phone">
                          <a href="tel:2124746441" alt="Telefone atendimento Rodobravo">
                            <div><FontAwesomeIcon icon={faPhone} /></div> <div><p>(21) 2474-6441</p></div>
                          </a>
                        </div>
                        <div className="footer-info__mail">
                          <a href="mailto:rodobravo@transrodobravo.com.br" alt="Email de contato Rodobravo">
                            <div><FontAwesomeIcon icon={faEnvelope} /></div> <div><p>rodobravo@transrodobravo.com.br</p></div>
                          </a>
                        </div>
                        <div className="footer-info__map">
                          <a href="" alt="">
                            <div className="slide-menu-map"><FontAwesomeIcon icon={faMapMarkerAlt} /></div> <div><p> Madre Maria José 21, Pavuna, RJ</p></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                  
                </div>
      </React.Fragment>
    )
  }
}

export default NavBarMobi;