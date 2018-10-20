import React, { Component } from 'react';
import './App.css';
import ArrivalScreen from './components/ArrivalScreen';
import CarScreen from './components/CarScreen';

//NDguMzUxLDExLjc3OSw0OC4yNDcsMTEuNjMwLGliaXMgSG90ZWwgR2FyY2hpbmcsTWVyY2VkZXMgQmVueiBBTUcgQ0xBLEtvbmZlcmVuejogTW9udGFnIDEyOjAwIGltIEhvdGVs

class App extends Component {

  render() {
    return (
      //<ArrivalScreen />
      <CarScreen update_live_events={this.update_live_events}/>
    );
  }
}

export default App;
