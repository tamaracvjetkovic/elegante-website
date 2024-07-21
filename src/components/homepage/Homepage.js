import React from 'react'
import MainLogo from './MainLogo'
import MainCarousel from './MainCarousel'
import MainQuote from './MainQuote'
import MainOptionCards from './MainOptionCards'
import MainFooter from './MainFooter'
import MainMostPopular from './MainMostPopular'
import MainWallpaper1 from './MainWallpaper1'


const Homepage = () => {
  return (
    <div>
      <MainLogo/>
      <MainOptionCards/>

      <MainWallpaper1/>

      <MainCarousel/>

      <MainMostPopular/>

      <MainFooter/> 
      
      
    </div>
  )
}

export default Homepage
