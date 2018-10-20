import React from 'react';
import AppStyles from '../AppStyles';

const ScrollButton = (props) => {


    return (
        <div class="row">
            <i className="fas fa-arrow-circle-down" style={{color: AppStyles.darkBlue, fontSize: '64px', textAlign: 'center', margin: 'auto', marginTop: '15px'}}></i>
        </div>
    )
}


export default ScrollButton;