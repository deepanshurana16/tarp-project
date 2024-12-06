import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../Assets/imag1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg' 
import img4 from '../Assets/img4.jpg' 
import img5 from '../Assets/img5.jpg' 
import img6 from '../Assets/img6.jpg'   

function Carousell() {
    const settings = {
        showArrows: false,
        interval: 3500,
        dynamicHeight: false,
        stopOnHover: false,
        infiniteLoop: true,
        showStatus: false,
        transitionTime: 500,
        showIndicators: true,
        swipeable: true,
        emulateTouch: true,
        autoPlay: true,
      };
  return (
    <Carousel {...settings}>
    <div>
          <img src={img1} alt="" />
       
    </div>
    <div>
          <img src={img2} alt="" />
          
    </div>
    <div>
          <img src={img3} alt="" />
          
    </div>
    <div>
          <img src={img4} alt="" />
    </div>
    <div>
          <img src={img5} alt="" />
    </div>
    <div>
          <img src={img6} alt="" />
    </div>

    </Carousel>
  )
}

export default Carousell
