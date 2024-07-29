import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import M from 'materialize-css';


const Navbar = () => {
  useEffect(() => {
    // bez ovoga nece raditi button niti search
    // omogucava .js funkcionalnosti Materialize
    M.AutoInit();
  }); 

  const clearSearch = () => {
    const t = document.getElementById("search");
    //console.log(t);
    t.value = "";
  }
  const clearSearch2 = () => {
    const t = document.getElementById("search2");
    //console.log(t);
    t.value = "";
  }

  const search2 = () => {
    console.log("Tacaa");
  }

  return (
    <div className = "navbar">
      <nav class="z-depth-0" style = {{position: "fixed", opacity: "99%"}}>
        <div class="nav-wrapper">
          <div style = {{display: "flex", justifyContent: "space-between"}}> 
            <Link to ="#" data-target="mobile-demo" class="sidenav-trigger"><i className="material-icons">menu</i></Link>          
          </div>
          <ul class="hide-on-med-and-down fixed">
            <li> <Link to ="/" className = "elegante-navbar">ELEGANTE</Link> </li>
            <li> <Link to ="/create">Women</Link> </li>
            <li> <Link to ="/men-clothes">Men</Link> </li> 
            <li> <Link to ="/children-clothes">Children</Link> </li> 
            <li>
               <form class=" hide-on-med-and-down" id="form1" >
                <div class="input-field">
                  <input id="search" type="search" onkeyup="getBlogs(this.value,0);"/>
                  <label class="label-icon" htmlFor="search"><i id="search-icon" className="material-icons">search</i></label>
                  <i class="material-icons" onClick = { clearSearch }> close</i>
                  <div id="searchResults" ></div>
                </div>
              </form>
            </li>
          </ul>   
          <ul class="hide-on-med-and-down right">
            <li><Link to ="/questions-answers">Q&A</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to ="/profile"> <i className="material-icons"> person </i> </Link></li>
            <li><Link to ="/shopping-cart"> <i className="material-icons"> shopping_cart </i> </Link></li>
            <li><Link to ="/wishlist"> <i className="material-icons"> favorite </i> </Link></li>        
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><Link to ="/" className = "elegante-navbar">ELEGANTE</Link></li>    
        <li>
          <form id = "form2" >
            <div class="input-field">
              <input id = "search2" type="search" onkeyup="getBlogs(this.value,0);"/>
              <label class="label-icon" htmlFor="search"><i id="search-icon" onClick = {search2} className="material-icons">search</i></label>
              <i className="material-icons" onClick = { clearSearch2 }> close</i>
              <div id="searchResults"> </div>
            </div>
          </form>
        </li> 
        <li><Link to ="/women-clothes">Women</Link></li>
        <li><Link to ="/men-clothes">Men</Link></li>
        <li><Link to ="/children-clothes">Children</Link> </li> 
        <li><Link to ="/questions-answers">Q&A</Link></li>
        <li><Link to ="/contact">Contact</Link></li>
        <li><Link to ="/profile"> <i className="material-icons"> person </i> </Link></li>
        <li><Link to ="/shopping-cart"> <i className="material-icons"> shopping_cart </i> </Link></li>
        <li><Link to ="/wishlist" > <i className="material-icons"> favorite </i> </Link></li>
      </ul>
    </div>
  )
}

export default Navbar
