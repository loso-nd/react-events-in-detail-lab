// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    render() {

        return (
            <button onClick ={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}> Click me for Mouse Coordinates!</button>
        )
    }

}


export default CoordinatesButton