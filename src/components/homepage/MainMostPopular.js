import React from 'react'
import Card from '../cards/Card'


const MainMostPopular = () => {
  return (
   <div className = "MainMostPopular">
      <div> Top Picks for You! </div>
      <div class = "row"> 
        <div class="col s6 m4 l3 xl2"> <Card/> </div>
        <div class="col s6 m4 l3 xl2"> <Card/> </div>
        <div class="col s6 m4 l3 xl2"> <Card/> </div>
        <div class="col s6 m4 l3 xl2"> <Card/> </div>
        <div class="col s6 m4 l3 xl2"> <Card/> </div>
        <div class="col s6 m4 l3 xl2"> <Card/> </div>
        <div class="col s6 m4 l3 xl2"> <Card/> </div>
        <div class="col s6 m4 l3 xl2"> 
          <div style = {{ display: "flex" }}>
             <div style = {{ backgroundColor: "red", width: "100px", height: "100px"}}> 
               See More 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMostPopular
