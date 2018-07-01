import React, {Component} from 'react';

class WeatherImg extends Component {
    render() {
        return (
            <div className={'weather-sprite weather-code-' + this.props.code}/>
        )
    }
}

export default WeatherImg;