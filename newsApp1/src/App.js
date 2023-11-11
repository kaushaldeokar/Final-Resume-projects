import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
   c="kaushal";
  render() {
    return (
      <div>
         {/* c = {this.c} */}
         <NavBar/>
         <News/>
      </div>
    )
  }
}



