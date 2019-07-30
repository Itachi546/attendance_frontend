import React, { Component } from 'react';
import { url } from '../../config';
import CustomTable from '../CustomTable';
import Default from '../pages/Default'
import ChartWrapper from '../ChartWrapper';

export default class Student extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const { rollno } = this.props.location.state;
        fetch(url + `student/${rollno}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                });
                return json;
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { rollno, name } = this.props.location.state;
        return (
            <div>
                    <div className="container-fluid">
                        <p className="mt-3"><b>Roll no: </b>{rollno}</p>
                        <p style={subheading}><b>Name: </b>{name}</p>
                    </div>
                    {
                        this.state.data.length > 0 ? (
                            <div>
                                <ChartWrapper
                                    chartType={"Bar"}
                                    label = {this.state.data.map((val) => val.subject)}
                                    dataset = {[{
                                        label: 'Total',
                                        backgroundColor: '#4285F4',
                                        data: this.state.data.map(val=>val.totalDay)
                                    },
                                    {
                                        label: 'Present',
                                        backgroundColor: '#00C851',
                                        data: this.state.data.map(val=>val.present)
                                    },
                                    {
                                        label: 'Absent',
                                        backgroundColor: '#DC3545',
                                        data: this.state.data.map(val=>(val.totalDay-val.present))
                                    },
                                    ]}
                                />
                                <CustomTable header={Object.getOwnPropertyNames(this.state.data[0])}
                                    data={this.state.data}
                                    onClickRow={() => { }}
                                />
                            </div>
                        ) : <Default />

                    }
            </div>
                )
            }
        }
        
const subheading = {
                    lineHeight: "5px"
            }
