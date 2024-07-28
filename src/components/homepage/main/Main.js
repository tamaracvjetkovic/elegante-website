import React from 'react'

import BackgroundQuote from './background_quote/BackgroundQuote'
import Carousel from './carousel/Carousel'
import PopularItems from './popular_items/PopularItems'


const Main = () => {
  return (
    <div>
       <Carousel/>
       <PopularItems/>
       <BackgroundQuote/> 
    </div>
  )
}

export default Main
