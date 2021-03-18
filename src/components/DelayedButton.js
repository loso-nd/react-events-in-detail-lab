// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    //  handleClick = (event) => {
    //     event.persist();
    //     return setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    // }

    render() {

        // return (
        //     <button onClick ={(event) => this.handleClick(event)}> Click me!</button>
        // )

        // return (
        //     <button onClick ={(event) => this.props.onDelayedClick(event)}> Click me!</button>
        // )
        
        return (
            <button onClick = {(event) => 
                { console.log(event)
                    event.persist();
                 setTimeout( () => this.props.onDelayedClick(event), this.props.delay)}
                }> Click me!</button>
        )
    }

}


export default DelayedButton;


// setTimeout(() => { alert('Howdy!'); }, 2000);


// class DelayedButton extends Component {
//     render() {

//         return (
//             <button onClick = {(event) => 
//                 { 
//                 setTimeout(event => this.props.onDelayedClick(event)), this.props.delay}
//                 }> Click me!</button>
//         )
//     }

// }