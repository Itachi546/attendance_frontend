import React, { Component } from 'react'
import CustomTable from '../CustomTable'
import { url } from '../../config.js'
import Default from '../pages/Default'

export default class Home extends Component {
    state = {
        data: []
    };

    componentDidMount() {

        fetch(url + 'attendance/getRecent/30')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }
    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center mt-4">Recents</h3>
                {
                    this.state.data.length === 0 ? <Default /> : <CustomTable data={this.state.data} header={Object.getOwnPropertyNames(this.state.data[0])} onClickRow={(index) => this.props.onClickRow(this.state.data[index])} />

                }
            </div>
        )
    }
}
