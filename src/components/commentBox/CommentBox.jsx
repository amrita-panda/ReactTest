import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import axios from 'axios';
import { Row, Col } from "reactstrap";
import './CommentBox.css';

class CommentBox extends Component {
    constructor(props){
        super(props)
        this.state={
            review:"",
        }
    }
    handelOnChange = (e) =>{
        console.log(e.target.name);
        const name=e.target.name;
        let value=e.target.value;
        this.setState({[name]:value})   

    }
    handelSubmit = (e)=>{
        e.preventDefault();
        //reducer code
       this.props.saveReview(this.state.review) 

        this.setState({review:"",fullname:"",list:"",radio:false,email:"",
    data:[]});
    }

    fetchData=() =>{
       axios.get('https://jsonplaceholder.typicode.com/comments').then(response=>{
           
           this.setState({data:response.data})
       }).catch(error=>{
           console.log(error);
       })
   }
    render() {
        const {review,fullname,list,radio,email,
        }=this.state;
        return (
            <div>
            <button type='button'id='apifetchData-id' onClick={()=>this.fetchData()}>Fetch Data</button>

               <form  onSubmit={(e)=>this.handelSubmit(e)} className='form-div'>
                   <Row xs="1" md="4">
                       <Col>
               <div className="form-group">
                    <label >FullName:</label>
                    <input type="text" className="form-control" id="fullname"  name='fullname' value={fullname} onChange={(e)=>this.handelOnChange(e)}/>
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type='email' className="form-control" id="email"name='email' value={email} onChange={(e)=>this.handelOnChange(e)}/>
                </div>
                <div className="form-group">
                    <label >Comment:</label>
                    <textarea className="form-control" rows="5" id="review" name='review' value={review} onChange={(e)=>this.handelOnChange(e)}></textarea>
                </div>
                <div className="form-group">
                    <label >Select list:</label>
                    <select className="form-control" id='list' value={list} name='list' onChange={(e)=>this.handelOnChange(e)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className="radio">
                    <label><input type="radio"  id='radio'name='radio' value={radio} onChange={(e)=>this.handelOnChange(e)}/>Option 2
                    </label>
                </div>
                </Col>
                   </Row>
                <div>
                       <button >Submit Form</button>
                   </div>
                   
            </form>
            </div>
        );
    }
}

export default connect(null,actions)(CommentBox);