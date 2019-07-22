import React, { Component } from 'react'
import SearchBar from '../SearchBar'
import {url} from '../../config'
import Default from '../pages/Default'

export default class InstructorList extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        fetch(url + 'instructor')
        .then(res=>(
            res.json()
        ))
        .then(json=>{
            this.setState({
                data:json,
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            this.state.data.length === 0? <Default/>: <div>
                <SearchBar placeholder='Search Instructor'/>
                <h1>Instructors</h1>
                {this.state.data.map((val, index)=>(
                    <li key={index}>{val.name}</li>
                ))}
            </div>
        )
    }
}
