import React, { Component } from 'react';
import { url } from '../../config';
import CustomTable from '../CustomTable';
import Default from '../pages/Default'

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
        console.log(this.state.data);
        return (
            <div>
                <h3 className='mt-3 text-center' >Student Report</h3>
                <p><b>Roll no: </b>{rollno}</p>
                <p style={subheading}><b>Name: </b>{name}</p>{
                    this.state.data.length > 0 ? <CustomTable header={Object.getOwnPropertyNames(this.state.data[0])}
                        data={this.state.data}
                        onClickRow={() => { }} 
                    /> : <Default/>

                }
            </div>
        )
    }
}

const subheading = {
    lineHeight: "5px"
}
