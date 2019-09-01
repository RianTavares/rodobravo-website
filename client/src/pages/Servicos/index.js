import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu';
import MenuBarMobi from '../../components/NavBarMobi';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Media from "react-media";
import { NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";

class Servicos extends Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rodobravo - Serviços</title>
        <link rel="canonical" href="https://rodobravotransportes.com.br/servicos" />
        <meta name="description" content="A Rodobravo Transportes ofereçe serviços como Fretes completos, parciais, 
        transferências secas e frigorificadas. Transportarmos produtos perecíveis, fármacos e outros produtos em geral. 
        Conheça mais sobre os nossos serviços!"></meta>
      </Helmet>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"services-top"} text={"SERVIÇOS"} />
          ) : (
            <PageHeader id={"services-top"} text={"SERVIÇOS"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <section className="page-content__service">
              <div className="page-content__service__text">
                <h1 className="titles">Rodobravo transferências</h1>
                <span>
                São mais de 17 anos de experiência em transporte rodoviário pelo Brasil, 
                a <strong>Rodobravo Transportes</strong> entende do seu negócio e fornece a 
                solução que sua empresa precisa. Temos trucks, ¾, carretas e vucs a disposição 
                de nossos clientes. Oferecemos o baú seco no transporte de produtos avaliados 
                como não perecíveis e também oferecemos o baú frigorificado para o envio de produtos 
                que são afetados pela variação de temperatura ao longo do percurso de entrega. 
                Investimos constantemente na renovação da frota e em atualizações tecnológicas. Saiba um pouco mais <NavLink to='/frota'>clicando aqui</NavLink>
                </span>
              </div>
              <div className="page-content__service__foto">
                <div id="service-item1"></div>
              </div>
            </section>

            <section className="page-content__service">
              <div className="page-content__service__text order2">
                <h1 className="titles">Rodobravo Express</h1>
                <span>
                  Equipada com uma frota nova de carros express frigoríficados e um time focado
                  no controle e gerenciamento estretégico, oferecemos nesta modalidade a distribuição 
                  dos produtos por toda cidade do Rio de Janeiro de forma rápida e com qualidade. 
                  Conheça o nosso portfólio fazendo uma <NavLink to='/contato'>cotação de frete online</NavLink> conosco 
                </span>
              </div>
              <div className="page-content__service__foto order1">
                <div id="service-item2"></div>
              </div>
            </section>

            <section className="page-content__service last">
              <div className="page-content__service__text">
                <h1 className="titles">Rodobravo Fármacos</h1>
                <span>
                  Entendemos a importância do cuidado no manuseio, armazenamento e envio que se deve ter 
                  com medicamentos, equipamentos cirúrgicos, vacinas, produtos médico-hospitalares, entre 
                  outros. A <strong>Rodobravo Fármacos</strong> oferece veículos adequados para esta modalidade de envio, 
                  como por exemplo no caso dos medicamentos, veículos refrigerados para controlar e evitar 
                  variação de temperatura ao longo da viagem. Possuímos também um time focado no no 
                  planejamento e controle de rotas do <strong>Rodobravo Fármacos. </strong>
                  Através do rastreamento da frota e nossa central de controle verificamos o cumprimento das 
                  rotas planejadas, o status das entregas garantimos a segurança dos produtos
                  e caso ocorra alguma adversidade durante o percurso podemos agir imediatamente.
                  Faça uma <NavLink to='/contato'>cotação de frete</NavLink> conosco 
                  agora mesmo, nos conte suas necessidades e utilize dos nossos serviços de qualidade tornando 
                  sua vida mais simples.
                </span>
              </div>
              <div className="page-content__service__foto">
                <div id="service-item3"></div>
              </div>
            </section>
          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Servicos;