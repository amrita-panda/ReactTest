import React, { Component } from 'react';
import {convert} from '../utils/Currency';
import {testExampleServices} from '../services/testExampleServices'

class TestExample extends Component {
    constructor() {
        super();
        this.state = {
          title: "",
          description: "",
          submitActive: false,
          data:{},
          data2:{}
        };
      }
       componentDidMount(){
            convert('USD','CAD').then(response=>{
              console.log("currency api",response);
            }).catch(error=>{
              console.log(error);
            })

           testExampleServices.getUsers().then(response2=>{
             console.log("user api",response2)
           }).catch(error=>{
             console.log(error);
           })
            
       }
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        },this.checkFields);
      };
      handleSubmit = event => {
        event.preventDefault();
      
        if (!this.state.submitActive) {
          return
        }
        const submission = {
          title: this.state.title,
          description: this.state.description
        };
        console.log(this.props.submit)
        this.props.submit(submission);
        this.setState({
          title: '',
          description: '',
          submitActive: 'false'
        })
      };
      checkFields = () => {
        if (this.state.title && this.state.description) {
          this.setState({submitActive: true});
        } else {
          this.setState({submitActive: false});
        }
      };
      fetchData=() =>{
       convert('USD','CAD').then(response=>{
         console.log(response);
         this.setState({data:response})
       })
    }
      render() {
       // console.log(this.state.data)
        return (
          <form 
            className="controlled-form"
            onSubmit={event => this.handleSubmit(event)}
          >
            <input 
              className="text-input title-input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={event => {
                this.handleChange(event);  
              }}
            />
            <input 
              className="text-input description-input"
              type="text"
              name="description"
              value={this.state.description}
              onChange={event => {
                this.handleChange(event);  
              }}
            />
            <button 
              className={`submit-btn ${this.state.submitActive}`}
            >submit</button>
            <button type='button'id='apifetchData-id' onClick={()=>this.fetchData()}>Fetch Data</button>
          </form>
        );
      }
    }
export default TestExample;