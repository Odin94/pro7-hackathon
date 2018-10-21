import React from 'react';
import mercedesImg from '../assets/mercedes.jpg'
import mapAirport from '../assets/map_airport.png'

import Header from './Header';
import Textfield from './Textfield';
import Location from './Location';
import CarInfo from'./CarInfo';
import Toast from './Toast';

const ArrivalScreen = function({enterCar}) {
    return (
        <div className="container">
        <header>
          <Header destinationName="ibis Hotel Garching" />
        </header>
        <Textfield headline="Your car is waiting for you" paragraph=""/>
        <Location image={mapAirport} enterCar={enterCar}/>
        <Textfield headline="Parkhaus P1" paragraph=""/>
        <Textfield headline="250 meters, ETA: 4 minutes" />
        <CarInfo carName="Mercedes Benz AMG CLA" carImg={mercedesImg} />
        <Toast message="Your hotel and host have been notified of your arrival" />
      </div>
    );
};

export default ArrivalScreen;