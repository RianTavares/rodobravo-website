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
    this.keepScrolling = this.keepScrolling.bind(this)
  }

  menuWasClicked() {
    const body = document.body;
    const check = document.getElementById("menu-slide").checked;
    if (check) {
      body.setAttribute('class', 'menu-open')
      
    } else {
      body.removeAttribute('class')
    }
  }

  keepScrolling() {
    const body = document.body;
    body.removeAttribute('class')
  }

  render () {

    return (
      <React.Fragment>
                <input onClick={this.menuWasClicked} type="checkbox" className="menu-slide" id="menu-slide" />
                <div className="menu-slide-bar" id="menu-slide-bar">
                  <nav>
                    <div className="menu-slide-bar-itens">
                      <NavLink onClick={this.keepScrolling} exact className='menu-slide-bar__link inicial' to='/' activeClassName="underline">Início</NavLink>
                      <NavLink onClick={this.keepScrolling} exact className='menu-slide-bar__link' to='/rodobravo' activeClassName="underline">Quem Somos</NavLink>
                      <NavLink onClick={this.keepScrolling} exact className='menu-slide-bar__link' to='/frota' activeClassName="underline">Frota</NavLink>
                      <NavLink onClick={this.keepScrolling} exact className='menu-slide-bar__link' to='/rastreio' activeClassName="underline">Monitoramento</NavLink>
                      <NavLink onClick={this.keepScrolling} exact className='menu-slide-bar__link' to='/servicos' activeClassName="underline">Serviços</NavLink>
                      <NavLink onClick={this.keepScrolling} exact className='menu-slide-bar__link' to='/contato' activeClassName="underline">Contato</NavLink>
                    </div>
                  </nav>

                  <div id="menu-slide-bar__footer">
                      <div id="icons">
                        <div className="icons-list">
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
                      </div>

                      <div id="footer-info">
                        {/* <div className="footer-info__divider">
                          <hr className="footer-info__divider__line"/>
                        </div> */}
                        <div className="footer-info__button">
                          <button variant="contained" className="footer-info__button__contact"> FALE CONOSCO </button>
                        </div>
                      </div>
                    </div>
                  
                </div>
      </React.Fragment>
    )
  }
}

export default NavBarMobi;