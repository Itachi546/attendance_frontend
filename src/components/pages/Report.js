import React, { Component } from 'react';
import { url } from '../../config';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


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
                    header: ['ROLL NO', 'NAME', ...attendance, "PRESENT", "ABSENT"],
                    data: json.map((val, index) => {
                        const status = val.status.split(',');
                        return [val.rollNo, val.name, ...status, val.present,  attendance.length - val.present];
                    }),
                    totalLecture: attendance.length
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
            <div>
                <h3 className="m-3 text-center"> Attendance Record</h3>
                <h6 className="mt-1" style={subheading}> Instructor: {instructor} </h6>
                <div className="d-inline-flex">
                    <h6 className="float-left mt-1" style={subheading}> Class: {className} </h6>
                    <h6 className="float-left mt-1 ml-3" style={subheading}> Year: {year} </h6>
                    <h6 className="float-left mt-1 ml-3" style={subheading}> Part: {part} </h6>
                </div>
                <h6 className="float-right mt-1" style={subheading}> Subject: {subject} </h6>
                <h6 className="mt-1" style={subheading}> Total Lecture: {this.state.totalLecture} </h6>
                <MDBTable
                    striped bordered hover size="sm"
                    onClick={(evt) => {
                        const index = evt.target.parentNode.rowIndex;
                        if (index > 0){
                            const selected = this.state.data[index - 1];
                            this.props.onClickRow({
                                rollno:selected[0],
                                name:selected[1]
                            })
                        }
                    }}
                >
                    <MDBTableHead>

                        <tr>
                            {
                                this.renderTableHeader(this.state.header)
                            }
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            this.state.data.map((val, index) => {
                                return this.renderTableData(val, index);
                            })
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>
        );
    }
}


const subheading = {
    lineHeight: "15px"
}
