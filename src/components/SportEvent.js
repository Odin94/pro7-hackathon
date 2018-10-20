import React from 'react';

const SportEvent = ({sport_type, image_url, start_time, sport_url}) => {
    let utc_start_time = `${(start_time.getUTCHours() + 2) % 24}:${start_time.getUTCMinutes()}`;
    if (utc_start_time.length < 5) utc_start_time += "0";

    const styles = {
        sportEvent: {
            backgroundImage: `url(${image_url})`,
            backgroundSize: 'cover',//'140px 80px',
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