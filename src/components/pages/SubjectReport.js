import React, { Component } from 'react';
import { url } from '../../config';
import CustomTable from '../CustomTable';
import { MDBBtn } from 'mdbreact';
import { Line } from 'react-chartjs-2';
export default class SubjectReport extends Component {
    state = {
        data: []
    }
    
    componentDidMount() {
        const data = this.props.location.state;
        fetch(url + `attendance/${data.subjectCode}/${data.instructor}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    data: json.map(val=>{
                        return {
                            "Attendance Date" : val["Attendance Date"],
                            "Present Student": val["Present Student"],
                            "Absent Student" : val["Total Student"] - val["Present Student"],
                            "Total Student" : val["Total Student"]
                        }
                    })
                });
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const data = this.props.location.state;
        console.log(this.state.data[0]);
        return (
            this.state.data.length > 0 ? (
                <div className="container">
                    <div className="container-fluid border border-color-dark mt-5 w-80 h-50">
                        <Line
                            width={600}
                            height={600}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                title: {
                                    display: true,
                                    text: "Total Student Present on Different Date",
                                    fontSize: 25
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            stepSize: 2,
                                            max:this.state.data[0]["Total Student"]
                                        }
                                    }]
                                }
                            }
                        }
                            data={{
                                labels: this.state.data.map((val) => val["Attendance Date"]),
                                datasets: [{
                                    label: "Present Student",
                                    borderWidth:3,
                                    borderColor:"#0F0",
                                    data: this.state.data.map(val => val["Present Student"])
                                },
                                {
                                    label: "Absent Student",
                                    borderWidth:3,
                                    borderColor:"#F00",
                                    data: this.state.data.map(val => val["Total Student"] - val["Present Student"])
                                }],
                            }}
                        />
                    </div>
                    <CustomTable
                        header={Object.getOwnPropertyNames(this.state.data[0])}
                        data={this.state.data}
                        onClickRow={() => { }}
                    />
                    <MDBBtn color="success" onClick={() => this.props.onClickRow(data)}>View Report</MDBBtn>
                </div>
            ) : <div></div>
        )
    }
}
