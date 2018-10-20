import React from 'react';
import AppStyles from './../AppStyles';

const Header = function({destinationName}) {
    return (
        <div>
            <div className="row" style={styles.headline.row}>
                <span style={styles.headline.text}>BEAMING YOU TO ...</span>                
            </div>
            <div className="row" style={styles.destination.row}>
                <i className="fas fa-home" style={styles.destination.image}></i>
                <span style={styles.destination.text}>{destinationName}</span>
            </div>
            <span></span>
        </div>
    );
};

const styles = {
    headline: {
        row: {
            backgroundColor: AppStyles.darkBlue,
            paddingBottom: '5px',
            paddingTop: '5px'          
        },
        text: {
            margin: 'auto',
            fontWeight: 'bold',
            fontSize: '30px',
            color: '#fff'
        }
    },
    destination: {
        row: {
            marginTop: '10px'
        },
        image: {
            marginTop: '5px',
            fontSize: '20px',
            marginLeft: '10px',
            marginRight: '20px'
        },
        text: {
            fontSize: '20px'
        }
    },
};

export default Header;
