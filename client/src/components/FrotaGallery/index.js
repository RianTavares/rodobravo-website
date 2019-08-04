import React, { Component } from 'react'
import FrotaRodobravo1 from '../../assets/imgs/frota/rodobravo-frota-1.jpeg'
import FrotaRodobravo2 from '../../assets/imgs/frota/rodobravo-frota-2.jpg'
import FrotaRodobravo3 from '../../assets/imgs/frota/rodobravo-frota-3.jpg'
import FrotaRodobravo4 from '../../assets/imgs/frota/rodobravo-frota-4.jpeg'
import FrotaRodobravo5 from '../../assets/imgs/frota/rodobravo-frota-5.jpeg'
import FrotaRodobravo6 from '../../assets/imgs/frota/rodobravo-frota-6.jpg'
import FrotaRodobravo7 from '../../assets/imgs/frota/rodobravo-frota-7.jpeg'
import FrotaRodobravo8 from '../../assets/imgs/frota/rodobravo-frota-8.jpeg'
import FrotaRodobravo9 from '../../assets/imgs/frota/rodobravo-frota-9.jpeg'
import FrotaRodobravo10 from '../../assets/imgs/frota/rodobravo-frota-10.jpg'
import FrotaRodobravo11 from '../../assets/imgs/frota/rodobravo-frota-11.jpg'
import FrotaRodobravo12 from '../../assets/imgs/frota/rodobravo-frota-12.jpg'

class Frota extends Component {
  constructor(props) {
    super(props);
  }

    fotoWasClicked = (e) => { 
      const body = document.body;
      const menuMain = document.querySelector('#button-menu');
      const button = document.querySelector('#frota-menu');
      const fotoModal = document.querySelector('.image-big');
      let varScroll;
    
      if(!body.classList.contains('foto-open')) {
        varScroll = window.scrollY;
        body.style.top = '-' + varScroll + 'px';
        body.dataset.y = varScroll;
        body.classList.add('foto-open');
        fotoModal.classList.add('open-foto-transform');
      } else {
        body.classList.remove('foto-open');
        fotoModal.classList.remove('open-foto-transform');
        body.style.top = 0;
        window.scrollTo(0, body.dataset.y);
      }
      
      if(!menuMain.classList.contains('frota-notShow')) {
        menuMain.classList.add('frota-notShow');
      } else {
        menuMain.classList.remove('frota-notShow');
      }
  
      if(button.classList.contains('frota-notShow')) {
        button.classList.remove('frota-notShow');
      } else {
        button.classList.add('frota-notShow');
      }
  
      if(!button.classList.contains('is-active')) {
        button.classList.add('is-active');
      } else {
        button.classList.remove('is-active');
      }
      
      for(let i = 1; i < 13; i ++) {
        let classe = `FrotaRodobravo${i}`;
        const imgTag = document.querySelector(`#FrotaRodobravo${i}`);
        this.foto = `${this.foto}${i}`;
        console.log(e.target.classList.contains(classe));
        
        if(e.target.classList.contains(classe)) {
          imgTag.removeAttribute("hidden")
        }
      }
    }
      
  render(){
    return (
        <>  
          <div className="image-big">
            <div className="image-big__area">
              <img src={FrotaRodobravo1}  hidden alt="teste" id="FrotaRodobravo1"/>
              <img src={FrotaRodobravo2}  hidden alt="teste" id="FrotaRodobravo2"/>
              <img src={FrotaRodobravo3}  hidden alt="teste" id="FrotaRodobravo3"/>
              <img src={FrotaRodobravo4}  hidden alt="teste" id="FrotaRodobravo4"/>
              <img src={FrotaRodobravo5}  hidden alt="teste" id="FrotaRodobravo5"/>
              <img src={FrotaRodobravo6}  hidden alt="teste" id="FrotaRodobravo6"/>
              <img src={FrotaRodobravo7}  hidden alt="teste" id="FrotaRodobravo7"/>
              <img src={FrotaRodobravo8}  hidden alt="teste" id="FrotaRodobravo8"/>
              <img src={FrotaRodobravo9}  hidden alt="teste" id="FrotaRodobravo9"/>
              <img src={FrotaRodobravo10}  hidden alt="teste" id="FrotaRodobravo10"/>
              <img src={FrotaRodobravo11}  hidden alt="teste" id="FrotaRodobravo11"/>
              <img src={FrotaRodobravo12}  hidden alt="teste" id="FrotaRodobravo12"/>
              <span> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec quis dapibus quam. Maecenas molestie tortor vitae nunc mattis
                <p>
                  #Science #ibm #tech #technology #future #culture #disruptive #think #picoftheday #photooftheday 
                  #instagood #instame #instacool #programming #computer #ibmwatson
                </p>
              </span>
            </div>
          </div>
          <section className="page-content__gallery last">
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo1"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo2"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo3"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo4"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo5"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo6"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo7"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo8"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo9"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo10"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo11"></div>
            <div onClick={this.fotoWasClicked} className="FrotaRodobravo12"></div>
          </section>
        </>
    )
  }
}
export default Frota;