import React from 'react'

import Card from '../../../common/cards/Card'


const MostPopular = () => {
  return (
   <div className = "MainMostPopular"> 
      <div class = "row"> 
        <div class="col s6 m4 l3 xl3"> <Card/> </div>
        <div class="col s6 m4 l3 xl3"> <Card/> </div>
        <div class="col s6 m4 l3 xl3"> <Card/> </div>
        <div class="col s6 m4 l3 xl3"> <Card/> </div>
        <div class="col s6 m4 l3 xl3"> <Card/> </div>
        <div class="col s6 m4 l3 xl3"> <Card/> </div>
        <div class="col s6 m4 l3 xl3"> <Card/> </div>
        <div class="col s6 m4 l3 xl3"> 
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

export default MostPopular
