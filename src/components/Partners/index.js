import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./styles.scss";
import casaVideo from "../../assets/imgs/partners/casaevideo.png";
import assai from "../../assets/imgs/partners/assai.png";
import gpa from "../../assets/imgs/partners/gpa.png";
import leader from "../../assets/imgs/partners/leader.png";
import prix from "../../assets/imgs/partners/prix.png";
import redeDor from "../../assets/imgs/partners/rede-dor.png";
import itambe from "../../assets/imgs/partners/itambe.png";
import disantini from "../../assets/imgs/partners/disantini2.png";
import feiranova from "../../assets/imgs/partners/feira-nova-em-casa.png";
import princesa from "../../assets/imgs/partners/princesa-supermercados.png";
import gtfFoods from "../../assets/imgs/partners/gtffoods.png";
import superpax from "../../assets/imgs/partners/superpax.png";


const PartnersSlide = () => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', event => {
            setDeviceWidth(event.target.innerWidth);
        });
    },[]);
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: deviceWidth >= 975 ? 3 : 1,
        slidesToScroll: deviceWidth >= 975 ? 1 : 1
      };

    return (
        <div className="container">
          <Slider {...settings}>
            <div className="partners-logo">
              <img src={assai} alt='Atacadista Assaí'/>
            </div>
            <div className="partners-logo">
              <img src={gpa} alt='Grupo Pão de açúcar'/>
            </div>
            <div className="partners-logo">
              <img src={prix} alt='Super Prix Supermercados'/>
            </div>
            <div className="partners-logo">
              <img src={itambe} alt='Itambé'/>
            </div>
            <div className="partners-logo">
              <img src={casaVideo} alt='Casa e Vídeo'/>
            </div>
            <div className="partners-logo">
              <img src={leader} alt='Leader'/>
            </div>
            <div className="partners-logo">
              <img src={redeDor} alt='Rede Dor São Luiz'/>
            </div>
            <div className="partners-logo">
              <img src={disantini} alt='DiSantini'/>
            </div>
            <div className="partners-logo">
              <img src={gtfFoods} alt='GTFoods'/>
            </div>
            <div className="partners-logo">
              <img src={superpax} alt='SuperPax Rede Economia'/>
            </div>
            <div className="partners-logo">
              <img src={princesa} alt='Princesa Supermercados'/>
            </div>
            <div className="partners-logo">
              <img src={feiranova} alt='Feira Nova em Casa'/>
            </div>
          </Slider>
        </div>
      );
}

export default PartnersSlide;