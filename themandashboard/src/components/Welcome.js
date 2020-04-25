import React, {Component} from 'react';

class Welcome extends Component
{
    render()
    {
        return <h1>This is {this.props.name} or {this.props.codeName}</h1>
    }
}

export default Welcome;
