import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Congrats extends Component {
    constructor(props){
        super(props)

    }
    
    
    render() {
        if(this.props.success){
            return (
                <div data-test='congrats-component'>
                   <div className='alert alert-success'>
                       <span data-test='congrats-message'>
                           Congratulation ! you guessed the correct word
                       </span>
                    </div> 
                </div>
            );
        }else{
            return(
                <div data-test='congrats-component'>

                </div>
            )
        }
       
    }
    
}
Congrats.propTypes={
    success:PropTypes.bool.isRequired,
}
 
export default Congrats;