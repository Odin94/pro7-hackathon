import React from 'react';

const WeatherSquare = ({imageUrl, day, temperature}) => {    

    const styles = {
        weatherWidget: {
            color: 'white',
            textShadow: '2px 2px black',
            fontSize: '1.3rem',
            padding: 0,

            darkOverlay: {
                padding: 0,
                margin: 0,
                height: '94px',
                width: '100%',
                //backgroundColor: 'rgba(0, 0, 0, 0.1)',

                backgroundImage: `url(${imageUrl})`,
                backgroundSize: '137px 94px',
            },

            day: {
                textAlign: 'center',
                marginTop: '-10px'
            },

            temperature: {
                textAlign: 'center',
                marginBottom: '-10px'
            }
        }
    }
    

    return (
        <div className="col-4" style={styles.weatherWidget}>
            <p style={styles.weatherWidget.temperature}>{`${temperature}°C`}</p>
            <div style={styles.weatherWidget.darkOverlay}>
            </div>
            <p style={styles.weatherWidget.day}>{day}</p>
        </div>
    )
}

export default WeatherSquare;