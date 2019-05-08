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
            <div className="title">Today's Weather</div>
            <Weather {...this.props} />
        </div>)
    }
}

export default TopSection;