import React, { Component } from 'react';
import './style.scss';
import Weather from './weather';

class TopSection extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div className="top-container">
            <div className="title">Weather App</div>
            <Weather {...this.props} />
            <button className="btn btn-select-location">Select location</button>
        </div>)
    }
}

export default TopSection;