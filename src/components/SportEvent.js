import React from 'react';

const SportEvent = ({sportType, imageUrl, startTime, sportUrl}) => {
    let utc_hours = `${(startTime.getUTCHours() + 2) % 24}`;
    if (utc_hours.length < 2) utc_hours = "0" + utc_hours;
    
    let utc_minutes = `${startTime.getUTCMinutes()}`;
    if (utc_minutes.length < 2) utc_minutes += "0";


    let utc_start_time = `${utc_hours}:${utc_minutes}`;
    

    const styles = {
        sportEvent: {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            color: 'white',
            textShadow: '2px 2px black',
            fontSize: '1.3rem',
            padding: 0,
            border: '1px rgba(0,0,0,1) solid',

            darkOverlay: {
                padding: 0,
                margin: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
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
        <a className="col-4" style={styles.sportEvent} href={`http://sportdeutschland.tv${sportUrl}`}>
            <div style={styles.sportEvent.darkOverlay}>
                <p style={styles.sportEvent.time}>{utc_start_time}</p>
                <p style={styles.sportEvent.sportType}>{sportType}</p>
            </div>
        </a>
    )
}

export default SportEvent;