import React from "react";
import { Route } from "react-router-dom";

import Contactpage from './Components/Contactpage';
import Aboutpage from './Components/Aboutpage';
import Homepage from './Components/Homepage';
import Navigation from "./Components/Navigation";


function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact component={Homepage}></Route>
      <Route path="/About" exact component={Aboutpage}></Route>
      <Route path="/Contact" exact component={Contactpage}></Route>
    </>
  );
}

export default App;
