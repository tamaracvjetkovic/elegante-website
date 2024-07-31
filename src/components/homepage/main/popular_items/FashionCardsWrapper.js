import React, { useState } from 'react'
import { useEffect } from 'react';

import useWindowWidth from '../../../../hooks/useWindowWidth';

import DisplayedCards from './DisplayedCards';

var M = 993;
var S = 600;


const FashionCardsWrapper = () => {
  const windowWidth = useWindowWidth();

  const updateCardCount = () => {
    return (windowWidth > S && windowWidth < M) ?  9 : 8;
  }
  const [cardCount, setCardCount] = useState(updateCardCount());

  useEffect(() => { 
    setCardCount(updateCardCount());
  }, [windowWidth]);

  return (
    <div className = "homepage-popular-items-cards"> 
      <div class = "row"> 
        <DisplayedCards number = {cardCount} />   
      </div>
    </div>
  )
}

export default FashionCardsWrapper
