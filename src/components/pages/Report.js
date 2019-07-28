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
        const {subjectCode, instructor} = data;
        fetch(url + `attendance/all/${classId}/${subjectCode}/${instructor}`)
            .then(res => {
                return res.json();
            })
            .then(json => {
                const attendance = json[0].date.split(',');
                this.setState({
                    header: ['Roll','Name', ...attendance],
                    data: json.map((val, index) => {
                        const status = val.status.split(',');
                        return [val.rollNo, val.name, ...status];
                    }),
                    className:data.class,
                    subject:data.subject,
                    instructor:data.instructor
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
        return (
            <div>
                <h3 className="m-3 text-center"> Attendance Record</h3>
                <h6 className="mt-1" style={subheading}> Instructor: {this.state.instructor} </h6>
                <h6 className="float-left" style={subheading}> Class: {this.state.className} </h6>
                <h6 className="float-right mr-1" style={subheading}> Subject: {this.state.subject} </h6>
                <Table className="table" striped bordered hover responsive size="sm">
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
    lineHeight:"15px"
}
