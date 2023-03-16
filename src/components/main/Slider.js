import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.scss'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true
    };
    return (
      <div>
        <Slider {...settings}>
            {
                (this.props.imgs).map((img, index)=>{
                    return (
                        <img key={index} src={img} alt="Rau Má Mix"/>
                    )
                })
            }
        </Slider>
      </div>
    );
  }
}