import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CitySelector from "./CitySelector";
import CityWeather from "./CityWeather";
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {forecasts: {}};

        this.handleCitySelect = this.handleCitySelect.bind(this);
    }

    handleCitySelect(e) {
        let city = e.target.value;

        axios.get("https://query.yahooapis.com/v1/public/yql?format=json&&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'").then(
            (response) => {
                let forecasts = this.state.forecasts;
                forecasts[city] = response.data.query.results;
                this.setState({
                    city: city,
                    forecasts: forecasts
                })
            }
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Weather App</h1>
                </header>
                <div className="App-intro">
                    <CitySelector onChange={this.handleCitySelect}/>
                    <CityWeather city={this.state.city} forecast={this.state.forecasts[this.state.city] && this.state.forecasts[this.state.city].channel.item}/>
                </div>
            </div>
        );
    }
}

export default App;
