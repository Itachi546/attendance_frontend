import React, { Component } from 'react'

export default class Table extends Component {
   
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
                        <td key={index}>{elm !=='date' ? val[elm] : val[elm].split('T')[0]}</td>
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
                <div>
                    <table className="table" onClick={(evt) => {
                        const index = evt.target.parentNode.rowIndex;
                        if (index > 0)
                            this.props.onClickRow(index - 1);
                    }}>
                        <tbody>
                            <tr>{this.renderTableHeader(this.props.header)}</tr>
                            {
                                this.renderTableData(this.props.header)
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}
