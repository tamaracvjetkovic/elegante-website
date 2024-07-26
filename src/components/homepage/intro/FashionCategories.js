import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const OptionCards = () => {
  return (
    <div className = "homepage-fashion-categories">
      <div className = "homepage-fashion-category category-women"  >
         <p style = {{letterSpacing: "3px", fontSize: "33px", color: "white"}}> <Link to = "/women-clothes" style = {{color: "white", padding: "5px", paddingLeft: "8px", paddingRight: "8px"}}> WOMEN </Link> </p>
      </div>
      <div className = "homepage-fashion-category category-men">
         <p style = {{letterSpacing: "3px", fontSize: "33px", color: "white"}}> <Link to = "/men-clothes" style = {{color: "white", padding: "5px", paddingLeft: "8px", paddingRight: "8px"}}> MEN </Link></p>
      </div>
      <div className = "homepage-fashion-category category-children">
         <p style = {{letterSpacing: "3px", fontSize: "33px", color: "white"}}> <Link to = "/children-clothes" style = {{color: "white", padding: "5px", paddingLeft: "8px", paddingRight: "8px"}}> CHILDREN </Link> </p>
      </div>
    </div>
  )
}

export default OptionCards
