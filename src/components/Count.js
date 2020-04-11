import React, {Component} from 'react'

class Count extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        )
    }
}

export default Count