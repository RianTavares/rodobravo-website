import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./styles.scss";
import alegra from "../../assets/alegra.png";
import assai from "../../assets/assai.png";
import extra from "../../assets/extra.png";
import leader from "../../assets/leader.png";

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
        speed: 500,
        slidesToShow: deviceWidth >= 975 ? 3 : 1,
        slidesToScroll: deviceWidth >= 975 ? 3 : 1
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