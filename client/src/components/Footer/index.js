import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Button from '@material-ui/core/Button';
import Logo from '../../assets/logo-branca.png';



export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="footer__social-icons">
          <div className="footer__social-icons__facebook-icon">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </div>
          <div className="footer__social-icons__instagram-icon">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
          <div className="footer__social-icons__linkedin-icon">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </div>
        </div>
        <div className="footer__button">
          <button variant="contained" className="footer__button__contact"> FALE CONOSCO </button>
        </div>
        <div className="footer__divider">
          <hr className="footer__divider__line"/>
        </div>
        <div className="footer__logo">
          <img className="footer__logo__img" src={Logo} alt="Rodobravo Transportes Logo" />
          </div>
        <span className="footer__copyright">Copyright 2019 | Desenvolvido por GR Studio </span>
      </footer>
    </React.Fragment>
  );
}