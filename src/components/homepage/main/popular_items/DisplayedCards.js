import React from 'react'

import Card from '../../../common/cards/Card'


const DisplayedCards = ( {number} ) => {
   const rows = [];

   for (let i = 0; i < number; i++) {
      rows.push( <div class="col s6 m4 l3 xl3"> <Card/> </div> );
   }

  return (
    <div> { rows } </div>
  )
}

export default DisplayedCards
