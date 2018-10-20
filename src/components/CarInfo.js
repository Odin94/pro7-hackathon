import React from 'react';

const CarInfo = (props) => {


    return (
        <div>
            <div className="row" style={{marginTop: '10px'}}>
                <div className="col-3">
                    <img src={props.carImg}></img>
                </div>
                <div className="col-9 align-self-center">
                    <span style={{marginLeft: '30px', fontSize: '18px'}}>{props.carName}</span>
                </div>
            </div>
        </div>
    )
}


export default CarInfo;