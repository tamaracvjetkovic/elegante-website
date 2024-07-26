import React from 'react'
import { useEffect } from 'react';

import M from 'materialize-css';

import image1 from "../../../../images/homepage_carousel/1.jpg"
import image2  from "../../../../images/homepage_carousel/2.jpg"
import image3 from "../../../../images/homepage_carousel/3.jpg"
import image4 from "../../../../images/homepage_carousel/4.jpg"
import image5 from "../../../../images/homepage_carousel/5.jpg"


const Carousel = () => {

  useEffect(() => {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
    var instance = M.Carousel.init({  
      fullWidth: true,
      noWrap: true,
      numVisible: 0
    });

    // Start autoplay when component mounts
    const intervalId = setInterval(() => {
      var elem = document.querySelector('.carousel');
      var instance = M.Carousel.getInstance(elem);
      if (instance) {
        instance.next();
      }
    }, 5000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div class="carousel carousel-slider" style={{boxShadow: "-1px -13px 15px rgba(0, 0, 0, 0.192)"}}>
      <a class="carousel-item" href="#one!"> <img src={image1}/> </a>
      <a class="carousel-item" href="#two!"> <img src={image2}/> </a>
      <a class="carousel-item" href="#three!"> <img src={image3}/> </a>
      <a class="carousel-item" href="#four!"> <img src={image4}/> </a>
      <a class="carousel-item" href="#five!"> <img src={image5}/> </a>
   </div>
   )
}

export default Carousel
