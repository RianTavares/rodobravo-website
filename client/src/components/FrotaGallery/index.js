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
    this.closeModal = this.closeModal.bind(this);
    this.fotoWasClicked = this.fotoWasClicked.bind(this);
  }

    fotoWasClicked = (e) => { 
      const body = document.body;
      const menuMain = document.querySelector('#button-menu');
      const button = document.querySelector('#frota-menu');
      const fotoModal = document.querySelector('.image-big');
      let varScroll;
      const mediaQuery = window.matchMedia("(min-width: 975px)");
      
      if(mediaQuery.matches) {
        document.onkeydown = (evt) => {
          evt = evt || window.event;
          if (evt.keyCode === 27) {
            this.closeModal();
          }
        }
      }
    
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
        
        if(e.target.classList.contains(classe)) {
          imgTag.removeAttribute("hidden");
        }
      }
    }

    closeModal = () => {
      const body = document.body;
      const modal = document.querySelector('.image-big');
      const gallery = document.querySelectorAll('.frota-gallery');

      if(modal.classList.contains('open-foto-transform')) {
          body.classList.remove('foto-open');
          modal.classList.remove('open-foto-transform')
          body.style.top = 0;
          window.scrollTo(0, body.dataset.y);
      }

      let i = 0;
      gallery.forEach((image) => {
        i = i + 1;
        let classe = `FrotaRodobravo${i}`;
        console.log(classe);
        
        const imgTag = document.querySelector(`#${classe}`);

        console.log('aqui', imgTag);
        

        if(!(image.hasAttribute("hidden"))) {
          console.log("true", imgTag);
        
          imgTag.setAttribute("hidden", true);
        }
      })
      
      // for(let i = 1; i < 13; i ++) {
      //   let classe = `FrotaRodobravo${i}`;
      //   const imgTag = document.querySelector(`#FrotaRodobravo${i}`);
      //   this.foto = `${this.foto}${i}`;
       
      //   if(!e.target.classList.contains(classe)) {
      //     imgTag.setAttribute("hidden", true);
      //   }
      // }

    }
      
  render(){
    return (
        <>  
          <div className="image-big">
            <div className="image-big__area">

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo1">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                <img className="frota-gallery" src={FrotaRodobravo1} alt="teste" />
                <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo2">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo2} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo3">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo3} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo4">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo4} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo5">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo5} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo6">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo6} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo7">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo7} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo8">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo8} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo9">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo9} alt="teste"/>
                  <div className="foto-legend">
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

              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo10">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo10} alt="teste"/>
                  <div className="foto-legend">
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
              
              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo11">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo11} alt="teste"/>
                  <div className="foto-legend">
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
              
              <div className="image-big__area__imgSpace" hidden id="FrotaRodobravo12">
                <div className="image-big__area__imgSpace__close" onClick={this.closeModal}>X</div>
                  <img className="frota-gallery" src={FrotaRodobravo12} alt="teste" />
                  <div className="foto-legend">
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