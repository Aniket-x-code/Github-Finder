
import React, {Component , } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div  classname='App' >
        <Navbar title="Github Finder"/>
      </div>
    );

  }
  
}

export default App;
