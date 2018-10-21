import React from 'react';
import AppStyles from '../AppStyles';

const ETA = ({time}) => {


    return (
        <section className="row" style={styles.eta}>
            <div className="col">
                <i className="far fa-clock" style={styles.eta.clockIcon}></i>
                ETA:
            </div>
            <div className="col" style={styles.eta.time}>{time}</div>
        </section>
    );
}

const styles = {
    eta: {
        fontSize: '3em',
        clockIcon: {
            marginRight: '15px',
            color: AppStyles.softBlue
        },
        time: {
            textAlign: 'center'
        }
    }
};

export default ETA;