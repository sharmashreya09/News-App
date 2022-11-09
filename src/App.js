
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newss from './components/Newss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><Newss key="general" pageSize={9} country="in" category="general" /></Route>
            <Route exact path="/business"><Newss key="business" pageSize={9} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><Newss key="entertainment" pageSize={9} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><Newss pageSize={9} key="general" country="in" category="general" /></Route>
            <Route exact path="/health"><Newss pageSize={9} key="health" country="in" category="health" /></Route>
            <Route exact path="/science"><Newss pageSize={9} key="science" country="in" category="science" /></Route>
            <Route exact path="/sports"><Newss pageSize={9} key="sports" country="in" category="sports" /></Route>
            <Route exact path="/technology"><Newss pageSize={9} key="technology" country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>

    )
  }
}
