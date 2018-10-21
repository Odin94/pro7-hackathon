import React, { Component } from 'react';
import Header from './Header';
import EntertainmentInfo from './EntertainmentInfo';
import Eta from './Eta';
import Location from './Location';
import EnvironmentInfo from './EnvironmentInfo';
import ScrollButton from './ScrollButton';

import fullMap from '../assets/map_full.png'
import WeatherForecast from './WeatherForecast';
import Textfield from './Textfield';

class CarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolledDown: false
        };
    }

    render() {
        if(this.state.scrolledDown) {
            return (
                <div className="container">
                    <ScrollButton onClick={this.scrollUp.bind(this)} up={true} />
                    <Textfield headline={"Event Info"} paragraph={"Please remember to bring your laptop to the event. \n\n\nCatering will be provided on site. Showers and beds will be available. Please make sure to check in before 9pm."}/>
                    <WeatherForecast />
                    <EntertainmentInfo />
                </div>
            );
        }

        return (
            <div className="container">
                <Header destinationName="ibis Hotel Garching" />
                <Location image={fullMap} />
                <Eta time="20:00"/>
                <EnvironmentInfo />
                <ScrollButton onClick={this.scrollDown.bind(this)}/>
            </div>
        );
    }

    scrollDown(e) {
        e.preventDefault();
        this.setState({ scrolledDown: true });
    }

    scrollUp(e) {
        e.preventDefault();
        this.setState({ scrolledDown: false });
    }
};

export default CarScreen;