import React, {Component} from 'react';

const Hello = () => {
    // way 1
    // return (
    //     <div>
    //         <h1>I am Batman</h1>
    //     </div>
    // ); 

    // way 2
    // return React.createElement(
    //     'div', 
    //     null, 
    //     React.createElement('h1',null, 'I am Batman')); // render html tags with createElement()

    // way 3
    return React.createElement(
        'div', 
        {'id': 'hello', className: 'dummyClass'}, 
        React.createElement('h1',null, 'I am Batman')); // render html tags with createElement()
    }

export default Hello;

