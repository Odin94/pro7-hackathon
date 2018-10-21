import React, { Component } from 'react';
import Header from './Header';
import EntertainmentInfo from './EntertainmentInfo';
import Eta from './Eta';
import Location from './Location';
import EnvironmentInfo from './EnvironmentInfo';
import ScrollButton from './ScrollButton';

import fullMap from '../assets/map_full.png'

class CarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolledDown: false
        };
    }

    render() {
        if(this.state.scrolledDown) {
            //TODO: Render info stuff
            return (
                <div className="container">
                    <ScrollButton onClick={this.scrollUp.bind(this)} up={true} />
                    <EntertainmentInfo />
                </div>
            );
        }

        return (
            <div className="container">
                <Header destinationName="ibis Hotel Garching" />
                <Location image={fullMap} />
                <Eta time="18:00"/>
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