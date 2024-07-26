import React, { useState, useEffect } from 'react'


const Card = () => {

  const [heart, setHeart] = useState("favorite_border")
  const [color, setColor] = useState("Dark Red")
  const [price, setPrice] = useState(54.99)

  const handleMouseEnter = () => {
    setHeart("favorite");
  };
  
  const handleMouseLeave = () => {
    setHeart("favorite_border");
  };

  return (
    <div className = "item-card">
      <div className = "item-card-upper">
         <div className = "item-card-upper1"> 
         </div>
         <div className = "item-card-upper2">
            <div className = "item-card-upper2-color-changer"> </div>
            <div className = "item-card-upper2-color-changer"> </div>
            <div className = "item-card-upper2-color-changer"> </div>
            <div className = "item-card-upper2-color-changer"> </div>
         </div>
      </div>
      <div className = "item-card-lower">
        <div className = "item-card-lower1">
          <div className = "item-card-lower1-name">
            Rosie Maxi Dress  ({color}) 
          </div>  
          <div className = "item-card-lower1-favorite">
              <i className="material-icons heart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {heart} </i>
          </div>
        </div>
        <div className = "item-card-lower2">
          <div className = "item-card-lower2-price">
            EUR €{price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
