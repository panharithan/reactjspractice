import React, {Component} from 'react';

class Message extends Component
{
    constructor()
    {
        super();
        this.state = {
            message: 'Welcome visitor',
            buttonName: 'Subscribe'

        }
    }
    changeMessage()
    {
        // setState: accepts an object, which is the new state of the component
        if (this.state.buttonName == "Subscribe")
        {
            this.setState(
            {
                message: "Thanks for subcribe",
                buttonName: "Unsubscribe",
            })
        }
        else
        {
            this.setState(
                {
                    message: "Welcome Visitor",
                    buttonName: "Subscribe",
                })
        
        }
    }
    render()
    {
        // return <h1>This is {this.props.name} or {this.props.codeName}</h1>
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>{this.state.buttonName}</button>
            </div>
            );
    }
}

export default Message;
