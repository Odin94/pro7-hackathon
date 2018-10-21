import React, { Component } from 'react';

class Toast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classNames: "row toast toast-shown"
        };
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                classNames: "row toast toast-fading-out"
            });    
        }, 2000);
        
    }

    render() {
        return (
            <div className={this.state.classNames}>
                {this.props.message}
            </div>
        );
    }
}

export default Toast;
