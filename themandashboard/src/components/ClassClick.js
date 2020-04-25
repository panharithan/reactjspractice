import React, { Component } from 'react'

export class ClassClick extends Component {
    
    clickHandler() // function in ClassClick required no keyword 'function'
    {
        console.log("click me");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
