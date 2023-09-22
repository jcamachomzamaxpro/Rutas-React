import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";

function App() {
  return(
    <Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Pagina Principal</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>          
          </ul>
        </div>
        
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
export default App;