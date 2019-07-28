import React, { Component } from 'react'
import {url} from '../../config'
import Default from '../pages/Default'
import CustomTable from '../CustomTable'

export default class SubjectList extends Component {
    state ={
        data:[],
    }
    componentDidMount(){
        const data = this.props.location.state;
        fetch(url + `subject/${data.name}`)
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            this.setState({
                data:json,
                className:data.name
            })
            return json;
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        const {className} = this.state;     
        return (
            this.state.data.length === 0 ? <Default/> : 
            <div className="container-fluid">
                <h3 className="text-center mt-3 float">SubjectList</h3>
                <h6 className="text-left mt-3">Class: {className} </h6>
                <CustomTable header = {Object.getOwnPropertyNames(this.state.data[0])} data = {this.state.data}  onClickRow={(index)=>{
                     this.props.onClickRow({...this.state.data[index], class:className});
                 }}/>
                {
                    /*
                 data.map((val, index)=>{
                     return <li key={index}>{val.name}</li>
                 })   
                 */
                }
            </div>
        )
    }
}
