import React from "react";
import Slider from "react-slick";
import "./styles.scss";
import alegra from '../../assets/alegra.png';
import assai from '../../assets/assai.png';
import extra from '../../assets/extra.png';
import leader from '../../assets/leader.png';


export default class PartnersMobi extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3
        };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={alegra}/>
          </div>
          <div>
          <img src={extra}/>
          </div>
          <div>
          <img src={assai}/>
          </div>
          <div>
          <img src={leader}/>
          </div>
        </Slider>
      </div>
    );
  }
}