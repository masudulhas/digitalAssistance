import React, {Component} from 'react';

class Weather extends Component {

    constructor(props){
        super(props);
        this.state = {}

    }

render(){
    const { location, temp_c, isDay, text, iconURL } = this.props;
    return (
        <div className="weather-container">
            <div className="header">{location}</div>
            <div className="inner-container">
                <span className="image">
                <img src= {iconURL} height="42" />
                </span>
                <span className="current-weather">{temp_c} deg</span>
            </div>
            <div className="weather-footer">{text}</div>
        </div>
    )
}
}
export default Weather;