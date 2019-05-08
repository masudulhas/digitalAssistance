import React, { Component } from 'react';

class Sl extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        const { Destination, DisplayTime, LineNumber, StopAreaName } = this.props;
        return (
            <div className="sl-container">
             From: {StopAreaName} <br />
                    {LineNumber}  {Destination} --> {DisplayTime}

            </div>
        )
    }
}
export default Sl;