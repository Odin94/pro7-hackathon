import React from 'react';

const SportEvent = ({sport_type, image_url, start_time}) => {
    const utc_start_time = `${(start_time.getUTCHours() + 2) % 24}:${start_time.getUTCMinutes()}`;

    const styles = {
        sportEvent: {
            backgroundImage: `url(${image_url})`
        }
    }
    

    return (
        <div className="col-4" style={styles.sportEvent}>
            <p>{utc_start_time}</p>
            <p>{sport_type}</p>
        </div>
    )
}

export default SportEvent;