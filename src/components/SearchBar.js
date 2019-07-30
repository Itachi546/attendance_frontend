import React, { Component } from 'react';
import { MDBInput, MDBBtn, MDBFormInline } from 'mdbreact'
export default class SearchBar extends Component {
    state = {
        value: ''
    }

    render() {
        return (
            <MDBFormInline className="mt-3">
                <MDBInput type="text" hint={this.props.placeholder} className="mr-sm-2" 
                onChange={(evt) => {
                    this.props.onSearch(evt.target.value);
                }} />
                <MDBBtn color="success">Search</MDBBtn>
            </MDBFormInline>
        )
    }
}
