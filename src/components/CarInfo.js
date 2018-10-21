import React, { Component } from 'react';

class CarInfo extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div>
                <div className="row" style={{marginTop: '10px'}}>
                    <div className="col-3">
                        <img style={{borderRadius: '4px', borderWidth: '2px', borderColor: '#000'}} src={this.props.carImg}></img>
                    </div>
                    <div className="col-9 align-self-center">
                        <span style={{marginLeft: '30px', fontSize: '18px'}}>{this.props.carName}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarInfo;
