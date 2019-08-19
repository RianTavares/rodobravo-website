import React, { Component } from 'react';
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Media from "react-media";

class Rodobravo extends Component {

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <React.Fragment>
      <MenuAppBar/>
      <MenuBarMobi />
      <section className="App">
      <Media query="(min-width: 975px)">
        {matches =>
          matches ? (
            <PageHeader id={"about-top"} text={"QUEM SOMOS"} />
          ) : (
            <PageHeader id={"about-top"} text={"QUEM SOMOS"} />
          )
        }
        </Media>
      
        <div className="site-content">
          <div className="page-content">
            <h1 className="titles">Nossa História</h1>
            <span className="page-content__about-text">  
              Início dos anos <strong>2000</strong>, era o começo de um novo século e o ramo do transporte rodoviário no Brasil
              já sofria de problemas que são velhos conhecidos, como por exemplo as más condições das estradas, 
              má qualidade das frotas em circulação, informalidade, roubos de carga, entre outros.
             </span>
             <br />
             <br />
             <span> 
             <strong>Cristina Ribeiro</strong>, empreendedora por natureza, viu a oportunidade de entrar no ramo de transportes e 
              ofertar um serviço diferenciado, lidando com os problemas do transporte rodoviário do Brasil, 
              investindo em frotas capacitadas, fazendo uma melhor utilização das tecnologias e contratando 
              motoristas qualificados. Esses são pilares que sempre fizeram parte da <strong>Rodobravo Transportes</strong>, constituída neste mesmo 
              ano por Cristina, que desde então preza por garantir a excelência no cumprimento de prazos e pela 
              preservação das mercadorias entregando com qualidade e tornando a vida de nossos clientes mais simples!
            </span>

            <div className="page-content__about-foto">
              <section className="page-content__about-foto__slide-gradiente">
                <label>Nosso primeiro veículo. Um VW13.180</label>
              </section>
              <div className="about-us-foto" id="caminhao">

              </div>
            </div>

            <span className="page-content__about-text">  
              Em meio a este cenário a história da <strong>Rodobravo</strong> começou com apenas um veículo, 
              o icônico e que estará para sempre nos corações de nossa empresa, VW 13.180. Após três anos, todo planejamento, 
              investimentos e trabalho duro começaram a dar frutos e a partir do ano de <strong>2003</strong> passamos a contar 30 veículos próprios, 
              atendendo agora às necessidades de cada cliente.


            </span>
            <br />
            <br />
            <span> 
              Com uma frota vasta e o serviço diferenciado, atendendo cada vez mais as 
              expectativas de nossos parceiros, nossa expansão foi inevitável e em <strong>2008 </strong>
              já contávamos com mais de 50 caminhões em nossa frota. 
            </span>
            <br />
            <br />
            <span>  
              Em <strong>2012</strong> foi adquirido o terreno na rua Madre Maria José, próximo ao KM 116 da 
              Rodovia Presidente Dutra no Rio de Janeiro, onde atualmente está sediada a matriz da empresa 
              provida de oficina de manutenção, área administrativa e local para estacionamento da frota.  
            </span>
            <br />
            <br />
            <span>  
              Outro grande passo, resultado de um constante trabalho pela excelência, foi dado no início de 
              <strong> 2019</strong> com a certificação ANVISA (Agência Nacional de Vigilância Sanitária), 
              que vinculada ao Ministério da Saúde é a agência que exerce o controle sanitário de 
              todos os produtos e serviços submetidos à vigilância sanitária, tais como medicamentos, 
              alimentos, cosméticos, saneantes, derivados do tabaco, produtos médicos, sangue, hemoderivados e serviços de saúde.
            </span>

            <div className="page-content__about-foto">
              <section className="page-content__about-foto__slide-gradiente">
                <label>Nosso time de estratégia planejando operações</label>
              </section>
              <div className="about-us-foto" id="team">

              </div>
            </div>
             <section className="last">
              <span className="page-content__about-text">  
                O Tempo passou e nesses mais de 17 anos de experiência a <strong>Rodobravo Transportes</strong> continuou crescendo, investindo para mitigar os problemas do 
                transporte rodoviário e desenvolvendo sua história de sucesso ao passar dos anos. Atualmente a 
                <strong> Rodobravo</strong> conta com mais de 100 veículos em sua frota e atende não só o Rio de Janeiro, mas sim toda 
                região Sudeste e parte da região Centro-Oeste. 
              </span>
              <br />
              <br />
              <span>  
                E nosso objetivo é claro: <strong>Ser essencial entregando com 
                qualidade e tornando a vida de nossos clientes mais simples!</strong>
              </span>
            </section> 
          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Rodobravo;