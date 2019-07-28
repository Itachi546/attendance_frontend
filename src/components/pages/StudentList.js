import React, { Component } from 'react';
import { url } from '../../config';
import DropdownWrapper from '../../components/DropdownWrapper';
import CustomTable from '../../components/CustomTable';
export default class StudentList extends Component {
    state = {
        currentClass: "Class",
        currentYear: "Year",
        currentPart: "Part",
        class: [],
        students: []
    }

    componentDidMount() {
        fetch(url + 'class')
            .then(res => (
                res.json()
            ))
            .then(json => {
                this.setState({
                    ...this.state,
                    class: json.map(val => val.name)
                });
                return json;
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleSelection = (val) => {
        fetch(url + `class/students/${val}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    ...this.state,
                    currentClass: val,
                    students: json
                });
            })
    }

    render() {
        return (
            <div>
                <p className="mt-3 mb-0">Select class to generate student list</p>
                <DropdownWrapper
                    onSelect={this.handleSelection}
                    title={this.state.currentClass}
                    data={this.state.class}
                />{
                    this.state.students.length > 0 ? 
                    <CustomTable 
                        header={Object.getOwnPropertyNames(this.state.students[0])} 
                        data={this.state.students}
                        //todo Add event listener
                        onClickRow = {(index)=>{
                            this.props.onClickRow(this.state.students[index]);
                        }}
                    /> : <div></div>
                }
            </div>
        )
    }
}
