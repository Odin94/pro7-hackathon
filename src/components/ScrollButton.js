import React from 'react';
import AppStyles from '../AppStyles';

const ScrollButton = (props) => {

    const icon = props.up ? "fas fa-arrow-circle-up" : "fas fa-arrow-circle-down";
    return (
        <div className="row">
            <a href="#" onClick={props.onClick} style={{color: AppStyles.darkBlue, fontSize: '64px', textAlign: 'center', margin: 'auto', marginTop: '15px'}}>
                <i className={icon}></i>
            </a>
        </div>
    )
}


export default ScrollButton;