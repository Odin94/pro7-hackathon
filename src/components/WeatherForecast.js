import React from 'react';
import WeatherWidget from './WeatherSquare';


const WeatherForecast = (props) => {
    const weatherForecasts = [
        {
            temperature: 13,
            imageUrl: "https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons-meteogram/d01.svg",
            day: "Mon"
        },
        {
            temperature: 13,
            imageUrl: "https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons-meteogram/d08.svg",
            day: "Tue"
        },
        {
            temperature: 11,
            imageUrl: "https://www.weather2umbrella.com/wp-content/themes/w2u/image/svg/weather-icons/d10.svg",
            day: "Wed"
        }
    ];


    return (
        <div style={ {marginTop: '10px', boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.2)", padding: "10px", marginTop: "45px"} }>
            <h3>Weather Forecast</h3>
            <div className="row">
                {
                    weatherForecasts.map(
                        (forecast, i) => {
                            return <WeatherWidget day={forecast.day} imageUrl={forecast.imageUrl} temperature={forecast.temperature} key={i} />
                        }
                    )
                }
            </div>
        </div>
    )
}

export default WeatherForecast;