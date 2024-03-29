import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu';
import MenuBarMobi from '../../components/NavBarMobi';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Media from "react-media";
import SimpleMap from '../../components/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Form from '../../components/Form';
import Alert from '../../components/Alert';
import {Helmet} from "react-helmet";

class Contato extends Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rodobravo - Contato</title>
        <link rel="canonical" href="https://rodobravotransportes.com.br/contato" />
        <meta name="description" content="Entre em contato com a Rodobravo Transportes através dos nossos telefones, 
          formulário de contato ou através de nossas redes sociais."></meta>
      </Helmet>
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
            {/* <span>
              Através dos nossos canais de comunicação vislumbramos facilitar o contato entre nós e todos os
              pontos crucias em nossas operações (clientes, prestadores de serviço, parceiros, etc).
              Utilize qualquer método abaixo para falar conosco e nos encontre também nas redes sociais.
            </span> */}

            <div className="page-content__contact-card">
              <h1 className="titles">Atendimento</h1>
              <div >
                <span>
                  Se preferir entre em contato conosco por meio dos nossos telefones, 
                  de <strong>segunda</strong> a <strong>sexta</strong> das <strong>8h</strong> às <strong>17h</strong>, que iremos atendê-lo com prazer.
                </span>
              <div className="page-content__contact-card__item">
                <FontAwesomeIcon icon={faPhone} />
                <span><a href="tel:2124746441">(21) 2474-6441</a> / <a href="tel:21964934138">(21) 96493-4138</a></span>
              </div>
            </div>
          </div>

          <h1 className="titles">Fale Conosco</h1>
            <span>
              preencha o formulário abaixo, 
              para realizar cotação de frete online, tirar suas dúvidas ou enviar críticas e sugestões.
              Teremos o maior prazer em atendê-lo.
            </span>
            <Alert />
            <Form />

          <div className="page-content__contact-card">
            <h1 className="titles">Trabalhe Conosco</h1>
            <div >
              <span>
                Se procura oportunidades para fazer parte do time de profissionais da <strong>Rodobravo Transportes</strong>, acompanhe as nossas redes sociais
                 clicando nos ícones abaixo:
                
              </span>
            <div className="footer__social-icons page-icon">
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
            <span>
                Em nossas páginas do facebook, instagram e linkedin principalmente, publicamos as vagas abertas e os meios de se inscrever, além de 
                informações sobre nosso dia a dia, promoções, sorteios e muito mais.
              </span>
          </div>
        </div>

        <h1 className="titles">Nossa Matriz</h1>
        <div className="page-content__google-map" style={{width: '100%', height: '400px'}}>
          <SimpleMap/>
        </div>
        <p className="contact-adress last">Rua Madre Maria José, 21 - Pavuna, Rio de Janeiro - RJ, 21535-230, Brasil</p>
            
        </div>
      </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Contato;