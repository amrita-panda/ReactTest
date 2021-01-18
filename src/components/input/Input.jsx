import React, { Component } from 'react';
import {connect} from 'react-redux';


class Input extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        console.log(this.props.success)
        return (
            <div data-test='component-input'>
                {!this.props.success &&
                <form className='form-inline'>
                    <input type='text'data-test='input-box'placeholder='Enter Guess'></input>
                    <button type='submit' data-test='submit-button' className='btn btn-primary' >Submit</button>
                </form>
                }
               
            </div>
        );
    }
}
const mapStateToProps =({success})=>{
    return {success};
}

export default connect(mapStateToProps)(Input);