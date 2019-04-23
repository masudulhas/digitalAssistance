import React, { Component } from 'react'

class Store extends Component {

constructor(props){
super(props);
    this.state = {
        appnName: "Digital Assistant"
    }
}

render(){
    return React.Children.map(this.props.children, child => {
        return React.cloneElement(child, { ...this.state });
    });
 }
}

export default Store