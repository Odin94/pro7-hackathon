import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Textfield from './components/Textfield';
import Location from './components/Location';
//NDguMzUxLDExLjc3OSw0OC4yNDcsMTEuNjMwLGliaXMgSG90ZWwgR2FyY2hpbmcsTWVyY2VkZXMgQmVueiBBTUcgQ0xBLEtvbmZlcmVuejogTW9udGFnIDEyOjAwIGltIEhvdGVs

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Header destinationName="ibis Hotel Garching" />
        </header>
        <Textfield headline="Test" paragraph="Your car is waiting for you"/>
        <Location />
      </div>
    );
  }
}

export default App;
