import React, {Component} from 'react';
import "./App.css";

class CitySelector extends Component {
    constructor(props) {
        super(props);

        this.state = {cities: ["vancouver, bc", "chicago, il", "sydney, au", "moscow, ru", "rio grande, ar", "cape town, sa"]}
    }


    componentWillMount() {
        console.log("this")
    }


    componentWillUnmount() {
        console.log("this")
    }


    componentDidMount() {
        console.log("this")
    }


    componentWillReceiveProps() {
        console.log("this")
    }


    componentWillUpdate() {
        console.log("this")
    }


    componentDidUpdate() {
        console.log("this")
    }

    componentWillMount() {
        console.log("this")
    }


    componentWillUnmount() {
        console.log("this")
    }


    componentDidMount() {
        console.log("this")
    }


    componentWillReceiveProps() {
        console.log("this")
    }


    componentWillUpdate() {
        console.log("this")
    }


    componentDidUpdate() {
        console.log("this")
    }

    render() {
        return (
            <div>
                <select name="city" id="city" onChange={this.props.onChange}>
                    <option value="">Select One</option>
                    {this.state.cities.map((item) => {
                        return (
                            <option key={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
        );
    }
}

export default CitySelector;