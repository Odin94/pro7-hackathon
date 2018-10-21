import React, { Component } from 'react';

class CarInfo extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div style={{boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)', padding: '5px', marginTop: '10px', marginBottom: '20px'}}>
                <div className="row">
                    <div className="col-3">
                        <img style={{borderRadius: '4px', borderWidth: '2px', borderColor: '#000'}} src={this.props.carImg}></img>
                    </div>
                    <div className="col-9 align-self-center">
                        <span style={{marginLeft: '35px', fontSize: '18px'}}>{this.props.carName}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarInfo;
