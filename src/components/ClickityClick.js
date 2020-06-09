import React, { Component } from 'react'

export default class ClicketyClick extends Component {

    state = {
        hasBeenClicked: false
    }

    heandleClick = () => {
        this.setState({ hasBeenClicked: true}, () =>
        console.log(this.state.hasBeenClicked))
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.heandleClick}>Click me!</button>
            </div>
        )
    }
}