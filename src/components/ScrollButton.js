import React from 'react';
import AppStyles from '../AppStyles';

const ScrollButton = (props) => {


    return (
        <div class="row">
            <a href="#" onClick={props.onClick} style={{color: AppStyles.darkBlue, fontSize: '64px', textAlign: 'center', margin: 'auto', marginTop: '15px'}}>
                <i className="fas fa-arrow-circle-down"></i>
            </a>
        </div>
    )
}


export default ScrollButton;