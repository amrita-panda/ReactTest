import React, { Component } from 'react';
import  './Counter.css';

class Counter extends Component {
    render() {
        return (
            <div className='m-3 border-form' data-test="component-count">
                <h1>Counter Component</h1>
                <button type='button'>Increment Counter</button>
            </div>
        );
    }
}

export default Counter;