import React, { Component } from 'react'
import Table from '../table'
import {url} from '../../config'

export default class SubjectDetail extends Component {
    state = {
        data:[]
    };

    componentDidMount(){
        const {data} = this.props.location;
        //Convert from isoformat to yyyy-mm-dd format
        let date = data.date.split('T')[0];
        fetch(url+`attendance/getAttendance/${data.class}/${data.subjectCode}/${date}/${data.instructor}`)
        .then(response=>{
            return response.json();
        })
        .then(json=>{
            this.setState({
                data:json,
            });
        });
    }

    render() {
        const {data} = this.props.location;
        return (
            <div>
                <h5>Class: {data.class} </h5>
                 <h5>Date: {data.date.split('T')[0]}  </h5>
                <h5>Subject: {data.subject}</h5>
               <Table data={this.state.data} onClickRow={(index)=>{}}/>
            </div>
        )
    }
}
