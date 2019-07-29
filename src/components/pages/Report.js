import React, { Component } from 'react';
import { url } from '../../config';
import Table from 'react-bootstrap/Table';
export default class Report extends Component {

    state = {
        header: [],
        data: [],
    };

    //@NOte validation between original data and ordered data
    componentDidMount() {
        const data = this.props.location.state;
        const classId = data.class;
        const { subjectCode, instructor } = data;
        fetch(url + `attendance/all/${classId}/${subjectCode}/${instructor}`)
            .then(res => {
                return res.json();
            })
            .then(json => {
                const attendance = json[0].date.split(',');
                this.setState({
                    header: ['Roll', 'Name', ...attendance],
                    data: json.map((val, index) => {
                        const status = val.status.split(',');
                        return [val.rollNo, val.name, ...status];
                    }),
                })
                return json;
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    renderTableHeader = (cols) => {
        return cols.map((val, index) => {
            return <th key={index}>{val}</th>
        })
    }

    renderTableData = (data, index) => {
        return (<tr key={index}>
            {
                data.map((val, i) => (
                    <td key={i}>{val}</td>
                ))
            }
        </tr>);
    }

    render() {
        const { year, part, instructor, subject } = this.props.location.state;
        const className = this.props.location.state.class;
        return (
            <div className="container-fluid">
                <h3 className="m-3 text-center"> Attendance Record</h3>
                <h6 className="mt-1" style={subheading}> Instructor: {instructor} </h6>
                <div className="d-inline-flex">
                    <h6 className="float-left mt-1" style={subheading}> Class: {className} </h6>
                    <h6 className="float-left mt-1 ml-3" style={subheading}> Year: {year} </h6>
                    <h6 className="float-left mt-1 ml-3" style={subheading}> Part: {part} </h6>
                </div>
                <h6 className="float-right mt-1" style={subheading}> Subject: {subject} </h6>
                <Table className="mt-3 table" responsive striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            {
                                this.renderTableHeader(this.state.header)
                            }
                        </tr>
                        {
                            this.state.data.map((val, index) => {
                                return this.renderTableData(val, index);
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}


const subheading = {
    lineHeight: "15px"
}
