import './App.css';
import Navbar from './components/navbar/Navbar';
import Create from './components/Create';
import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './components/homepage/Homepage';


function App() {
  const url = "http://localhost:3000/blogs"

  const { data: blogs, loaded, error, setData } = useFetch(url);

  if (loaded) {
    return (
      <Router> 
        <div className = "App">
        <Navbar/>
          <Switch>
            <Route exact path = "/"> 
              <Homepage/>
            </Route>
            <Route exact path = "/create"> 
              <Create />
            </Route>
          </Switch>
        </div> 
      </Router>
    );   
    // ako u <Route> pise exact -> znaci da samo takvu gleda putanju
    // da nije bilo exact, bilo koji url sa /, npr. /create, /s, /1 ce odgovoarati "/"
    // Router gleda od gore ka dole (prvi na koji naidje je match)

  } else if (error) {
      return (  
        <div> { error } </div>
      );
    } else {
    return (
      <div style = {{ fontSize: "40px", display: "flex", backgroundColor: "#cbc163", height: "100vh", alignItems: "center", justifyContent: "center" }}> Loading... </div> 
    );
  }
}


export default App;
