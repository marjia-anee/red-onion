import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Header/>
          <Home />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
        <Header/>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
