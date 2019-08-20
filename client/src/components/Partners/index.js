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
              <img src={assai} alt='alegra'/>
            </div>
            <div className="partners-logo">
              <img src={gpa} alt='extra'/>
            </div>
            <div className="partners-logo">
              <img src={prix} alt='assai'/>
            </div>
            <div className="partners-logo">
              <img src={itambe} alt='leader'/>
            </div>
            <div className="partners-logo">
              <img src={casaVideo} alt='extra'/>
            </div>
            <div className="partners-logo">
              <img src={leader} alt='assai'/>
            </div>
            <div className="partners-logo">
              <img src={redeDor} alt='leader'/>
            </div>
          </Slider>
        </div>
      );
}

export default PartnersSlide;