import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./styles.scss";
import slide1 from "../../assets/imgs/slide/rodobravo1.jpg";
import slide2 from "../../assets/imgs/slide/rodobravo2.jpg";
import slide3 from "../../assets/imgs/slide/rodobravo3.jpg";

const SlideScreenSettings = () => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', event => {
            setDeviceWidth(event.target.innerWidth);
        });
    },[]);
    
    const settings = {
        dots: true,
        dotsClass: 'slide-dots',
        arrows: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="slide">
          <Slider {...settings}>
            <div>
              <img src={slide1} alt='alegra'/>
              <div className="slide-gradiente"></div>
              <div className="slide-text-flex">
                <div className="slide-text">
                  <h1>CONFIE SUA CARGA EM QUEM TEM MAIS DE 17 ANOS DE EXPERIÊNCIA</h1>
                </div>
              </div>
            </div>
            <div>
              <img src={slide2} alt='extra'/>
              <div className="slide-gradiente"></div>
              <div className="slide-text-flex">
                <div className="slide-text">
                  <h1>CONFIE SUA CARGA EM QUEM TEM MAIS DE 17 ANOS DE EXPERIÊNCIA</h1>
                </div>
              </div>
            </div>
            <div>
              <img src={slide3} alt='assai'/>
              <div className="slide-gradiente"></div>
              <div className="slide-text-flex">
                <div className="slide-text">
                  <h1>CONFIE SUA CARGA EM QUEM TEM MAIS DE 17 ANOS DE EXPERIÊNCIA</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      );
}

export default SlideScreenSettings;