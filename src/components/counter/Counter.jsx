import React, { Component } from 'react';
import  './Counter.css';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            error:false,
            
        }
    }
    decement = () =>{
        const {count}=this.state;
        if(count>0){
            this.setState({count:count-1})
        }else{
            this.setState({error:true})
        }
    }
    render() {
        const {count,error}=this.state;
        return (
            <div className='m-3 border-form' data-test="component-count">
               <div> <h1>Counter Component</h1>
                <button type='button' data-test='increment-button'onClick={()=>this.setState({count:count+1,error:false})}>Increment Counter</button>
                <button type='button' data-test='decrement-button' onClick={()=>this.decement()} >Decrement Counter</button>
                 <h4 data-test='increment-display'>the counter is<span className='ml-2'data-test='count'>{count}</span></h4>
        <div data-test="error-message" className={error?'show':'hide'}>cannot decement more</div>
                </div>
            </div>
        );
    }
}

export default Counter;