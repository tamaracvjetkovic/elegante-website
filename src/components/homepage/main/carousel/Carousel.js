import React from 'react'
import { useEffect } from 'react';

import M from 'materialize-css';

import slika1 from "../../../../images/homepage_carousel/wallpaper27.jpg"
import slika2  from "../../../../images/homepage_carousel/wallpaper8.jpg"
import slika3 from "../../../../images/homepage_carousel/wallpaper31.jpg"
import slika4 from "../../../../images/homepage_carousel/wallpaper30.jpg"
import slika5 from "../../../../images/homepage_carousel/wallpaper34.jpg"


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
      <a class="carousel-item" href="#one!"> <img src={slika1}/> </a>
      <a class="carousel-item" href="#two!"> <img src={slika2}/> </a>
      <a class="carousel-item" href="#three!"> <img src={slika3}/> </a>
      <a class="carousel-item" href="#four!"> <img src={slika4}/> </a>
      <a class="carousel-item" href="#five!"> <img src={slika5}/> </a>
   </div>
   )
}

export default Carousel
