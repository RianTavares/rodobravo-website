import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/imgs/logo-branca.png';

function reload() {
  window.location.reload()
}

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__social-icons">
          <div className="footer__social-icons__facebook-icon">
            <a href="https://www.facebook.com/rodobravotransportes/" target="_blank" rel="noopener noreferrer" alt="Facebook Rodobravo Transportes">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
          </div>
          <div className="footer__social-icons__instagram-icon">
            <a href="https://www.instagram.com/rodobravotransportes/" target="_blank" rel="noopener noreferrer" alt="Instagram Rodobravo Transportes">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div className="footer__social-icons__linkedin-icon">
            <a href="https://www.linkedin.com/company/rodobravo-transportes/" target="_blank" rel="noopener noreferrer" alt="Linkedin Rodobravo Transportes">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
        </div>
        <div className="footer__button">
          <NavLink exact to='/contato'>
            <button variant="contained" className="footer__button__contact"> FALE CONOSCO </button>
          </NavLink> 
        </div>
        <div className="footer__divider">
          <hr className="footer__divider__line"/>
        </div>
        <div className="footer__logo">
          <button onClick={reload} alt="Rodobravo Transportes">
            <img className="footer__logo__img" src={Logo} alt="Rodobravo Transportes Logo" />
          </button>
          </div>
        <section className="footer__menu">
          <NavLink exact className='footer__menu__item' to='/'>INÍCIO</NavLink>
          <NavLink exact className='footer__menu__item' to='/rodobravo'>QUEM SOMOS</NavLink>
          <NavLink exact className='footer__menu__item' to='/frota'>FROTA</NavLink>
          <NavLink exact className='footer__menu__item' to='/rastreio'>MONITORAMENTO</NavLink>
          <NavLink exact className='footer__menu__item' to='/servicos'>SERVIÇOS</NavLink>
          <NavLink exact className='footer__menu__item' to='/contato'>CONTATO</NavLink>
        </section>
        <span className="footer__copyright">Copyright 2019 | <a className="link-dev" href='https://www.linkedin.com/in/riantavares/' target="_blank"> Desenvolvido por Rian Tavares</a></span>
      </footer>
    </React.Fragment>
  );
}