import React, { Component } from 'react'
import {url} from '../../config'
import Default from '../pages/Default'
import CustomTable from '../CustomTable'

export default class SubjectList extends Component {
    state ={
        data:[],
    }
    componentDidMount(){
        const {name, year, part}= this.props.location.state;
        fetch(url + `subject/${name}/${year}/${part}`)
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            this.setState({
                data:json,
                className:name,
            })

            return json;
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        const {name, year, part}= this.props.location.state;
        return (
            this.state.data.length === 0 ? <Default/> : 
            <div className="container-fluid">
                <h3 className="text-center mt-3 float">SubjectList</h3>
                <div className="d-flex">
                <h6 className="text-left mt-3">Class: {name} </h6>
                <h6 className="text-left mt-3 ml-3">Year: {year} </h6>
                <h6 className="text-left mt-3 ml-3">Part: {part} </h6>
               </div>
                <CustomTable header = {Object.getOwnPropertyNames(this.state.data[0])} data = {this.state.data}  onClickRow={(index)=>{
                     this.props.onClickRow({...this.state.data[index], class:name, year, part});
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
