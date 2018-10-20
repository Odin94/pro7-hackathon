import React, { Component } from 'react';
import './App.css';
import ArrivalScreen from './components/ArrivalScreen';
import CarScreen from './components/CarScreen';

//NDguMzUxLDExLjc3OSw0OC4yNDcsMTEuNjMwLGliaXMgSG90ZWwgR2FyY2hpbmcsTWVyY2VkZXMgQmVueiBBTUcgQ0xBLEtvbmZlcmVuejogTW9udGFnIDEyOjAwIGltIEhvdGVs

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inCar: false
    };
  }

  enterCar() {
    this.setState({
      inCar: true
    });
  }

  render() {
    return this.state.inCar ? <CarScreen/> : <ArrivalScreen enterCar={() => {this.enterCar()}}/>;
    /*if (this.state.inCar) {
      screen = <CarScreen/>
    } else {
      screen = <ArrivalScreen enterCar={() => {this.enterCar()}}/>
    }

    return (
      screen
    );*/
  }
}

export default App;
