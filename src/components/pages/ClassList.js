import React, { Component } from 'react'
import SearchBar from '../SearchBar'
import {url} from '../../config'
import Default from '../pages/Default'
import CustomTable from '../CustomTable'

export default class ClassList extends Component {
    state= {
        data:[],
        searchText:''
    }
    componentDidMount(){
        fetch(url + 'class')
        .then(res=>(
            res.json()
        ))
        .then(json=>{
            this.setState({
                data:json,
                searchData:json
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            this.state.data.length === 0 ? <Default/> :
            <div className="container-fluid">
                <SearchBar placeholder='Search class'
                    onSearch={(val)=>{
                        this.setState({
                            ...this.state,
                            searchText:val
                        });
                    }}
                />
                <h3 className="text-center mt-3"> Class </h3>
                {
                 <CustomTable header={Object.getOwnPropertyNames(this.state.data[0])}
                              data={this.state.data.filter((val)=> val.name.toUpperCase().startsWith(this.state.searchText.toUpperCase()))}
                              onClickRow={(index)=>{
                     this.props.onClickRow(this.state.searchData[index]);
                 }}/>
                }
            </div>
        )
    }
}
