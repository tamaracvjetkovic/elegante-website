import React from 'react'

import BackgroundQuote from './background_quote/BackgroundQuote'
import PopularItems from './popular_items/PopularItems'
import Carousel from './carousel/Carousel'


const Main = () => {
  return (
    <div>
       <BackgroundQuote/>
       <Carousel/>
       <PopularItems/>
    </div>
  )
}

export default Main
