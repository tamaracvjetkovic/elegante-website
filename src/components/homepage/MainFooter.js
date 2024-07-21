import React from 'react'
import Icon from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import TikTokIcon from './TikTokIcon';
import { mdiEmailOpenHeartOutline } from '@mdi/js';


const MainFooter = () => {
  return (
    <div> 
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l7 s12">
                <h5 class="black-text" style = {{display: "flex", justifyContent: "center", alignItems: "flex-end"}}> Thank You <Icon path={mdiEmailOpenHeartOutline} size={1} style = {{ marginLeft: "10px"}}/> </h5>
                <p class="black-text text-lighten-4"> for embracing elegance as your signature style and bringing timeless grace to the world. </p>
        
                <p class="black-text text-lighten-4" style = {{ marginTop: "6px"}}> Yours, <i> Elegante. </i> </p>

              </div>
              <div class="col l3 offset-l2 s12">
                <h5 class="black-text">Follow us!</h5>
                <ul>
                  <li> <a class="black-text text-lighten-3" href="#!"> <Icon path={mdiInstagram} size={0.90} style = {{ marginRight: "4px"}}/> @elegante. </a> </li>
                  <li> <a class="black-text text-lighten-3" href="#!" style = {{alignItems: "flex-start !important"}}> <div style={{ width: "20px", marginRight: "4px", display: "flex"}}> <TikTokIcon /> </div> @elegante_ </a> </li>
                  <li> <a class="black-text text-lighten-3" href="#!"> <Icon path={mdiFacebook} size={0.90} style = {{ marginRight: "4px"}}/> Elegante </a> </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container black-text">
               © 2024 Elegante | Only Grace 
            </div>
          </div>
        </footer>



    </div>
  )
}

export default MainFooter
