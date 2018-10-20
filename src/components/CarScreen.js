import React from 'react';
import Header from './Header';
import Eta from './Eta';
import Location from './Location';

import fullMap from '../assets/map_full.png'

const CarScreen = function(props) {
    return (
        <div class="container">
            <Header destinationName="ibis Hotel Garching" />
            <Location image={fullMap} />
            <Eta time="20:00"/>
        </div>
    );
};

export default CarScreen;