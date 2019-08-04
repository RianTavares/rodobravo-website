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
  
   fotoWasClicked(e) { 
    const body = document.body;
    const menuMain = document.querySelector('#button-menu');
    const button = document.querySelector('#frota-menu');
    const fotoModal = document.querySelector('.image-big');
    const foto = document.querySelector('.image-big > .image-big__area > img ');
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

    // console.log();
    foto.src = {e.target.classList}
    // for(let i = 1; i < 13; i ++) {
    //   this.foto = `${this.foto}${i}`;
    //   if(e.target.classList.contains(classe)) {
    //     if(!fotoModal.classList.contains(classe)) {
    //       fotoModal.classList.add(classe);
    //     } else {
          
    //     }
    //   }
    // }
    
  }

  render() {
    return (
        <>  
          <div className="image-big">
            <div className="image-big__area">
              <img alt="teste"/>
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
    );
  }
}
export default Frota;