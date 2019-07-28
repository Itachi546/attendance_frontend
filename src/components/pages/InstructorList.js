import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import { url } from '../../config';
import Default from '../pages/Default';
import CustomTable from '../CustomTable';
export default class InstructorList extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch(url + 'instructor')
            .then(res => (
                res.json()
            ))
            .then(json => {
                this.setState({
                    data: json,
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        return (
            this.state.data.length === 0 ? <Default /> : <div className="container-fluid">
                <SearchBar placeholder='Search Instructor' />
                <h3 className="mt-3 text-center">Instructors</h3>
                <CustomTable header={Object.getOwnPropertyNames(this.state.data[0])}
                    data={this.state.data}
                    onClickRow={() => { }}
                />
            </div>
        )
    }
}
