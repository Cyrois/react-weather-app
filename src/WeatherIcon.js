import React, {Component} from 'react';
import './App.css';
import WeatherImg from "./WeatherImg";

class WeatherIcon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="weather-forecast-icon">
                <WeatherImg code={this.props.conditionCode}/>
                {this.props.day && <p>{this.props.day}</p>}
                {this.props.date && <p>{this.props.date}</p>}
                {this.props.high && <p>High (C): {this.props.high}</p>}
                {this.props.low && <p>Low (C): {this.props.low}</p>}
                {this.props.temp && <p>Temp (C): {this.props.temp}</p>}
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default WeatherIcon;