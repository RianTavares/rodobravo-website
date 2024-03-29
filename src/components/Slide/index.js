import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Media from "react-media";
import "./styles.scss";
import slide3 from "../../assets/imgs/slide/rodobravo3.jpg";
import slideMobi3 from "../../assets/imgs/slide/rodobravoMobi3.jpg";
import slide4 from "../../assets/imgs/slide/rodobravo4.jpg";
import slideMobi4 from "../../assets/imgs/slide/rodobravoMobi4.jpg";
import slideRodo1 from "../../assets/imgs/slide/rodobravo-slide.gif";
import slideRodoMobi1 from "../../assets/imgs/slide/rodobravo-slideMobi1.gif";
import slideRodo2 from "../../assets/imgs/slide/rodobravo-slide2.gif";
import slideRodoMobi2 from "../../assets/imgs/slide/rodobravo-slideMobi2.gif";

const SlideScreenSettings = () => {
   // eslint-disable-next-line
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
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="slide">
          <Slider {...settings}>
            <div>
              <Media query="(min-width: 975px)">
                {matches =>
                  matches ? (
                    <img src={slideRodo1} alt='alegra'/>
                  ) : (
                    <img src={slideRodoMobi1} alt='alegra'/>
                  )
                }
              </Media>
              <div className="slide-gradiente"></div>
              <div className="slide-text-flex">
                <div className="slide-text">
                  <h1>CONFIE SUA CARGA EM QUEM TEM MAIS DE 17 ANOS DE EXPERIÊNCIA</h1>
                </div>
              </div>
            </div>
            <div>
              <Media query="(min-width: 975px)">
                {matches =>
                  matches ? (
                    <img src={slideRodo2} alt='alegra'/>
                  ) : (
                    <img src={slideRodoMobi2} alt='alegra'/>
                  )
                }
              </Media>
              <div className="slide-gradiente"></div>
              <div className="slide-text-flex">
                <div className="slide-text">
                  <h1>EFETUANDO MAIS DE 200 ENTREGAS POR SEMANA</h1>
                </div>
              </div>
            </div>
            <div>
              <Media query="(min-width: 975px)">
                {matches =>
                  matches ? (
                    <img src={slide3} alt='alegra'/>
                  ) : (
                    <img src={slideMobi3} alt='alegra'/>
                  )
                }
              </Media>
              <div className="slide-gradiente"></div>
              <div className="slide-text-flex">
                <div className="slide-text">
                  <h1>TRANSPORTANDO MAIS DE DUAS MIL TONELADAS POR MÊS</h1>
                </div>
              </div>
            </div>
            <div>
              <Media query="(min-width: 975px)">
                {matches =>
                  matches ? (
                    <img src={slide4} alt='alegra'/>
                  ) : (
                    <img src={slideMobi4} alt='alegra'/>
                  )
                }
              </Media>
              <div className="slide-gradiente"></div>
              <div className="slide-text-flex">
                <div className="slide-text">
                  <h1>LEVANDO O QUE IMPORTA ATÉ VOCÊ</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      );
}

export default SlideScreenSettings;