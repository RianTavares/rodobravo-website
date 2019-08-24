import React, { Component } from 'react'
import MenuAppBar from '../../components/NavBarMenu'
import MenuBarMobi from '../../components/NavBarMobi'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Media from "react-media"
import Teste from '../../components/Teste'
class Frota extends Component {
  
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
            <PageHeader id={"trucks-top"} text={"FROTA"} />
          ) : (
            <PageHeader id={"trucks-top"} text={"FROTA"} />
          )
        }
        </Media>
        <div className="site-content">
          <div className="page-content">
            <span>
            A <strong>Rodobravo</strong> entende do seu negócio e fornece a solução que sua empresa precisa. 
            Equipada com uma frota vasta e preparada para o transporte de cargas secas, frigorificadas, cargas 
            leves e de produtos farmacêuticos. 
            <br />
            <br />
            Investimos constantemente na renovação da frota e em atualizações tecnológicas atendendo os princípios de segurança,
             durabilidade e produtividade. Além disso, possuímos processos de manutenções preventivas realizadas por um corpo técnico qualificado.
            Nossas carretas possuem a tecnologia pneumática com válvulas reguladoras de compensação, viabilizando a 
            estabilidade do veículo e da carga, mesmo com deformidade na rodovia, amortecendo os impactos em decorrência das estradas, 
            minimizando consideravelmente avarias.
            <br />
            <br />
            Veja abaixo algumas opções que disponibilizamos aos nossos clientes. Se desejar conhecer mais nossa Frota faça uma 
            cotação com a gente e conheça nosso portfólio.
            <br />
            <br />
            </span>
              <Teste/>
          </div>
        </div>
        <Footer/>
      </section>
    </React.Fragment>
    );
  }
}
export default Frota;