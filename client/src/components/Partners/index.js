import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./styles.scss";
import alegra from "../../assets/imgs/partners/alegra.png";
import assai from "../../assets/imgs/partners/assai.png";
import extra from "../../assets/imgs/partners/extra.png";
import leader from "../../assets/imgs/partners/leader.png";

const ReactSlickDemo = () => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', event => {
            setDeviceWidth(event.target.innerWidth);
        });
    },[]);
    
    const settings = {
        dots: true,
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
            <div>
              <img src={alegra} alt='alegra'/>
            </div>
            <div>
              <img src={extra} alt='extra'/>
            </div>
            <div>
              <img src={assai} alt='assai'/>
            </div>
            <div>
              <img src={leader} alt='leader'/>
            </div>
          </Slider>
        </div>
      );
}

export default ReactSlickDemo;