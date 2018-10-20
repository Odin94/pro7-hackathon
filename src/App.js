import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textfield from './components/Textfield';
//NDguMzUxLDExLjc3OSw0OC4yNDcsMTEuNjMwLGliaXMgSG90ZWwgR2FyY2hpbmcsTWVyY2VkZXMgQmVueiBBTUcgQ0xBLEtvbmZlcmVuejogTW9udGFnIDEyOjAwIGltIEhvdGVs

class App extends Component {
  render() {
    return (
      <div className="App">
        <Textfield headline="Test" paragraph="Your car is waiting for you"/>
      </div>
    );
  }
}

export default App;
