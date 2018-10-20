import React from 'react';
import AppStyles from '../AppStyles';

const Toast = (props) => {


    return (
        <div style={{backgroundColor: AppStyles.brightRed, padding: '5px', marginTop: '5px'}}>
            {props.message}
        </div>
    )
}


export default Toast;