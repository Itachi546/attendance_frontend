import React, { Component } from 'react'
import Default from '../pages/Default'
import CustomTable from '../CustomTable'

export default class SubjectList extends Component {
    render() {
        const data = this.props.location.state[1];
        const header = this.props.location.state[0];
        return (
            data.length === 0 ? <Default /> :
                <div className="container-fluid">
                    <h3 className="text-center mt-3 float">SubjectList</h3>
                    <div className="d-flex">
                        {
                            Object.getOwnPropertyNames(header).map((val, index) => {
                                return <h6 className="mt-3 ml-3" key={index}>{val.toUpperCase()} : {header[val]}</h6>
                            })
                        }
                    </div>
                    <CustomTable header={Object.getOwnPropertyNames(data[0])} data={data} onClickRow={(index) => {
                        this.props.onClickRow({ ...data[index], ...header });
                    }} />
                </div>
        )
    }
}
