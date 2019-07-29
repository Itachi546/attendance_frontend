import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

export default class DropdownWrapper extends Component {
    render() {
        return (
            <MDBDropdown>
                <MDBDropdownToggle caret color="primary" >
                    {this.props.title}
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                    {
                        this.props.data.map((val, index) => <MDBDropdownItem  onClick = {()=>this.props.onSelect(val)}
                        key={index}>
                        {val}
                        </MDBDropdownItem>)
                    }
                </MDBDropdownMenu>
            </MDBDropdown>
        )
    }
}
