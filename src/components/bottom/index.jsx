import React, {Component} from 'react';
import './style.scss';
import Sl from './sl';

class BottomSection extends Component {

    constructor (props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="bottom-container">
                <span className="title">
                Next Departure
                </span>
                <span className="image">
                    <img src="/images/sllogo.png" height="50" alt="" />
                </span>
                <Sl {...this.props} />
            </div>)
    }
}

export default BottomSection