import React from 'react';

const Location = ({enterCar, image}) => {

    return (
        <a onClick={ () => {if (enterCar) enterCar()} }>
            <img style={{boxShadow: '2px 2px rgba(0,0,0,0.2)', width: '100%'}} src={image} alt="map" />
        </a>
    )
}


export default Location;