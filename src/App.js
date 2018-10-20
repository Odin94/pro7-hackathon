import React, { Component } from 'react';
import './App.css';
import ArrivalScreen from './components/ArrivalScreen';
//NDguMzUxLDExLjc3OSw0OC4yNDcsMTEuNjMwLGliaXMgSG90ZWwgR2FyY2hpbmcsTWVyY2VkZXMgQmVueiBBTUcgQ0xBLEtvbmZlcmVuejogTW9udGFnIDEyOjAwIGltIEhvdGVs

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {live_events: []};
  }

  update_live_events(new_live_events) {
    this.setState({
      live_events: new_live_events
    });
  }

  render() {
    return (
      <ArrivalScreen />
    );
  }
}

export default App;
