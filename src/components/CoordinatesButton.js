// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends Component {
    findCords = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        // console.log(this.props)
        return (
            <div>
                <button onClick={this.findCords}></button>
            </div>
        )
    }
}