import React from 'react'
import M from 'materialize-css';
import { useEffect } from 'react';

import slika1 from "../../wallpapers/wallpaper27.jpg"
import slika2  from "../../wallpapers/wallpaper8.avif"
import slika3 from "../../wallpapers/wallpaper30.webp"
import slika4 from "../../wallpapers/wallpaper31.jpg"
import slika5 from "../../wallpapers/wallpaper34.jpg"


const MainCarousel = () => {

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
    <div class="carousel carousel-slider">
      <a class="carousel-item" href="#one!"> <img src={slika1}/> </a>
      <a class="carousel-item" href="#two!"> <img src={slika2}/> </a>
      <a class="carousel-item" href="#three!"> <img src={slika3}/> </a>
      <a class="carousel-item" href="#four!"> <img src={slika4}/> </a>
      <a class="carousel-item" href="#five!"> <img src={slika5}/> </a>
   </div>
   )
}

export default MainCarousel
