import React, {Component} from 'react';
import WeatherIcon from "./WeatherIcon";

class CityWeather extends Component {
    render() {
        return (
            <div>
                {this.props.forecast &&
                <div>
                    <div>
                        <h2>{this.props.forecast.title}</h2>
                    </div>

                    <div>
                        <WeatherIcon conditionCode={this.props.forecast.condition.code}
                                     temp={this.props.forecast.condition.temp}
                                     text={this.props.forecast.condition.text}/>
                    </div>

                    <div>
                        <h2>10 Day Forecast</h2>

                        <div>
                            {this.props.forecast.forecast.map((item, index) => {
                                if (index !== 0) {
                                    return (
                                        <WeatherIcon key={item.date}
                                                     conditionCode={item.code}
                                                     day={item.day}
                                                     date={item.date}
                                                     high={item.high}
                                                     low={item.low}
                                                     text={item.text}/>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default CityWeather;