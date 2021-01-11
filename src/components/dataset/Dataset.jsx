import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardFooter, Modal, ModalBody, ModalHeader } from "reactstrap";
import {  actionButton, ACTION_BUTTON } from "../utils/StudioUtils";

class Dataset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            renderLayout: 0,
            filteredData: [],
            datasets: [],
            templates: [],
            renderForm: 0,
            showModal: false,
         
        };
    }
    initiateCreateDataset() {
        this.setState({ mode: "", renderForm: 0, showModal: true })
    }

    render() {
        const { loading, renderLayout, filteredData, renderForm, datasets, showModal, catalogConfig, mode, templates, preViewConfig, splitInput } = this.state;
        const toggle = () => this.setState({ showModal: false });
        return (
            <div>
              <Row xs="1" md="1">
                  <Col></Col>
                        <Col className="text-left mt-0">
                            
                            {<button id='create-btn' onClick={()=>this.initiateCreateDataset.bind(this)} className='ml-1 content-float-right btn btn-primary'>create</button>}
                            {renderLayout === 0 &&
                                <button id='listview-btn'className='m-0 mt-1 content-float-right btn btn-info'onClick={()=>this.setState({ renderLayout: 1 })}>List view</button>}
                        
                            {renderLayout === 1 &&
                            <button id='gridview-btn' className='m-0 mt-1 content-float-right btn btn-info'onClick={()=>this.setState({ renderLayout: 0 })}>Grid view</button>}
                             <h3 className="pt-1">{"Datasets" +
                                (datasets.length > 0 ?
                                    ` (${datasets.length})` : '')}
                            </h3>
                        </Col></Row>  
            </div>
        );
    }
}

export default Dataset;