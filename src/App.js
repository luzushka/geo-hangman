import React, { Component } from 'react';
import Game from './components/Game';
import Footer from './components/Footer';
import Header from './components/Header';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Game />
          <Footer />
      </div>
    );
  }
}

export default App;
