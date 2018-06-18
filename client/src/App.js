import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Landing />
          <About />
          <Gallery />
        </div>
      </Router>
    );
  }
}

export default App;