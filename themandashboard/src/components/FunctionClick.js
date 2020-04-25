import React from 'react'

function FunctionClick() {

    function clickHandler() // // function in FunctionClick requires keyword 'function'
    {
        console.log("click me");
    }

    return (
        // FunctionClick is called without 'this' keyword
        <div>
            <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default FunctionClick
