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
    <div className = "ClothesCard">

      <div className = "ClothesCardUpper">
         <div className = "ClothesCardUpper1"> 
         </div>
         <div className = "ClothesCardUpper2">
            <div className = "ClothesCardUpper2ColorChanger"> </div>
            <div className = "ClothesCardUpper2ColorChanger"> </div>
            <div className = "ClothesCardUpper2ColorChanger"> </div>
            <div className = "ClothesCardUpper2ColorChanger"> </div>
         </div>
      </div>

      <div className = "ClothesCardLower">
        <div className = "ClothesCardLower1">
          <div className = "ClothesCardLower1Name">
            Rosie Maxi Dress  ({color})
          </div>
          <div className = "ClothesCardLower1Favorite">
              <i className="material-icons heart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {heart} </i>
          </div>
        </div>
        <div className = "ClothesCardLower2">
          <div className = "ClothesCardLower2Price">
            EUR €{price}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card
