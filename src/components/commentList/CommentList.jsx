import React, { Component } from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {

    renderReviews(){
        return this.props.review.map((view,index)=>{
        return<li key={index}>{view}</li>
        })
    }
    render() {
        return (
            <div>
               <ul>
                   {this.renderReviews()}
               </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {review:state.review}
}
export default connect(mapStateToProps)(CommentList);