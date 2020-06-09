import React, { Component } from 'react'

export default class LightSwitch extends Component {
    state = {
        toggled: false
    }

    handleClick = () => {
        this.setState(previousState => {
            return { toggled: !previousState.toggled}
        })
    }

    render() {
        return( 
            <div>
                <buton onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</buton>
            </div>
        )
    }
}