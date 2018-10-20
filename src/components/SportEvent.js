import React from 'react';

const SportEvent = ({sport_type, image_url, start_time, sport_url}) => {
    let utc_hours = `${(start_time.getUTCHours() + 2) % 24}`;
    if (utc_hours.length < 2) utc_hours = "0" + utc_hours;
    
    let utc_minutes = `${start_time.getUTCMinutes()}`;
    if (utc_minutes.length < 2) utc_minutes += "0";


    let utc_start_time = `${utc_hours}:${utc_minutes}`;
    

    const styles = {
        sportEvent: {
            backgroundImage: `url(${image_url})`,
            backgroundSize: 'cover',
            color: 'white',
            textShadow: '2px 2px black',
            fontSize: '1.3rem',
            padding: 0,

            darkOverlay: {
                padding: 0,
                margin: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2'
            },

            time: {
                marginLeft: '10px'
            },

            sportType: {
                textAlign: 'center'
            }
        }
    }
    

    return (
        <a className="col-4" style={styles.sportEvent} href={`http://sportdeutschland.tv${sport_url}`}>
            <div style={styles.sportEvent.darkOverlay}>
                <p style={styles.sportEvent.time}>{utc_start_time}</p>
                <p style={styles.sportEvent.sportType}>{sport_type}</p>
            </div>
        </a>
    )
}

export default SportEvent;