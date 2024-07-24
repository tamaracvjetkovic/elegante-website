import React from 'react'
import Logo from './Logo'
import Carousel from './Carousel'
import MainQuote from './MainQuote'
import OptionCards from './OptionCards'
import Footer from './Footer'
import MostPopular from './MostPopular'
import Wallpaper1 from './Wallpaper1'


const Homepage = () => {
  return (
    <div>
      <Logo/>
      <OptionCards/>

      <Wallpaper1/>

      <Carousel/>

      <MostPopular/>

      <Footer/>  
    </div>
  )
}

export default Homepage
