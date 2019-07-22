import React, { Component } from 'react'
import SearchBar from '../SearchBar'
import {url} from '../../config'
import Default from '../pages/Default'
import Table from '../table'

export default class ClassList extends Component {
    state= {
        data:[]
    }
    componentDidMount(){
        fetch(url + 'class')
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
            this.state.data.length === 0 ? <Default/> :
            <div>
                <SearchBar placeholder='Search class'/>
                <h1> Class </h1>
                {/*this.state.data.map((val, index)=>{
                    return <li key={index}><Link 
                    to= {{
                        pathname:'/subjectlist',
                        state:{
                            data:val.name
                        }
                }} >{val.name}</Link></li>
                })*/
                 <Table header={Object.getOwnPropertyNames(this.state.data[0])} data={this.state.data} onClickRow={(index)=>{
                     this.props.onClickRow(this.state.data[index]);
                 }}/>
                }
            </div>
        )
    }
}
