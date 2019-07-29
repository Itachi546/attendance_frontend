import React, { Component } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class CustomTable extends Component {

    renderTableHeader = (header) => {
        return header.map((val, index) => {
            return <th key={index}>{val.toUpperCase()}</th>
        })
    }

    renderTableData = (header) => {
        return this.props.data.map((val, index) => {
            return (
                <tr key={index} >
                    {header.map((elm, index) => (
                        //Date is in isoformat so split from time
                        //<td key={index}>{elm == "date" ? val[elm].split('T')[0] : val[elm]}</td>
                        <td key={index}>{val[elm]}</td>
                    ))}
                </tr>
            )
        })
    }

    render() {
        if (this.props.data.length === 0)
            return <div></div>
        else {
            return (
                    <MDBTable className="container"
                        striped
                        bordered 
                        hover
                        onClick={(evt) => {
                            const index = evt.target.parentNode.rowIndex;
                            if (index > 0)
                                this.props.onClickRow(index - 1);
                        }}>

                        <MDBTableHead color="primary-color" textWhite>
                            <tr>{this.renderTableHeader(this.props.header)}</tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                this.renderTableData(this.props.header)
                            }
                        </MDBTableBody>
                    </MDBTable>
            );
        }
    }
}
