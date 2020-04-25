import React from 'react'

function Greet()    // this is a component with name Greet
{
    return <h1>Hello The Man</h1>
}

export const Greet2 = props => {
    console.log(props);
    return (
    <div>
        <h1>Hello {props.name} aka {props.codeName}</h1>
        {props.children}
    </div>);

} // create another component

export default Greet;