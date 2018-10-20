import React from 'react';
import Header from './Header';
import EntertainmentInfo from './EntertainmentInfo';
import Eta from './Eta';
import Location from './Location';

import fullMap from '../assets/map_full.png'

const CarScreen = function({update_live_events}) {
    return (
        <div className="container">
            <Header destinationName="ibis Hotel Garching" />
            <Location image={fullMap} />
            <Eta time="20:00"/>
            <EntertainmentInfo update_live_events={update_live_events}/>
        </div>
    );
};

export default CarScreen;