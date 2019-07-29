import React, { Component } from 'react';
import {url} from '../../config';
import CustomTable from '../CustomTable';
import {MDBBtn} from 'mdbreact';

export default class SubjectReport extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        const data = this.props.location.state;
        fetch(url +`attendance/${data.subjectCode}/${data.instructor}`)
        .then(res=> res.json())
        .then(json=>{
            this.setState({
                data:json
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    render() {
        const data = this.props.location.state;
        return (
            this.state.data.length > 0 ? (
            <div className="container">
                <CustomTable    
                    header = {Object.getOwnPropertyNames(this.state.data[0])}
                    data = {this.state.data}
                    onClickRow = {()=>{}}
                />
                <MDBBtn color="success" onClick={()=>this.props.onClickRow(data)}>View Report</MDBBtn>
            </div>
            ) : <div></div> 
        )
    }
}
