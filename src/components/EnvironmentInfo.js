import React from 'react';
import AppStyles from '../AppStyles';

const EnvironmentInfo = (props) => {
    return (
        <div>
            <div className="row" style={{fontSize: '3em'}}>
                <div className="col">
                    <i className="fas fa-car" style={{marginRight: '16px', color: AppStyles.softBlue}}></i>
                    <span>Light traffic</span>
                </div>
            </div>
            <div className="row" style={{fontSize: '3em'}}>
                <div className="col">
                    <i className="fas fa-cloud-sun" style={{marginRight: '5px', color: AppStyles.softBlue}}></i>
                    <span>11°C, cloudy</span>
                </div>
            </div>
        </div>
    )
}


export default EnvironmentInfo;