import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu';
import MenuBarMobi from '../../components/NavBarMobi';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Media from "react-media";
import {Helmet} from "react-helmet";

class Rastreio extends Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rodobravo - Monitoramento</title>
        <link rel="canonical" href="https://rodobravotransportes.com.br/rastreio" />
        <meta name="description" content="Segurança é um dos fatores mais importantes na gestão dos processos de transferência de cargas, 
          por isso a Rodobravo Transportes possuí sua frota rastreada com as melhores marcas do mercado e mantém 
          um rigoroso e eficiente sistema com estrutura própria de monitoramento em tempo real dos veículos. Saiba mais!"></meta>
      </Helmet>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"tracking-top"} text={"MONITORAMENTO"} />
          ) : (
            <PageHeader id={"tracking-top"} text={"RASTREIO"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <span>
              A <strong>Rodobravo Transportes</strong> acredita que transportar com agilidade e segurança é um dos fatores mais 
              importantes na gestão dos processos de transferência de cargas, por isso nossa frota é rastreada 
              com as melhores marcas do mercado e mantemos um rigoroso e eficiente sistema com estrutura própria 
              de monitoramento em tempo real dos veículos, atendendo aos princípios de segurança e rastreabilidade. 
              Através destas tecnologias de monitoramento toda frota é avaliada desde seu consumo médio, perfil de 
              condução do motorista e limitações de velocidade. Queremos garantir a integridade dos produtos transportados, 
              a segurança nas estradas, a valorização da vida e minimizar impactos ambientais.

            </span>
            
            <section className="page-content__logos last">
              <div id="logo1">
              </div>
              <div id="logo2">
              </div>
              <div id="logo3">
              </div>
              <div id="logo4">
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
export default Rastreio;