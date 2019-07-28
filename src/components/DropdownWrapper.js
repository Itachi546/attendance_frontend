import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default class DropdownWrapper extends Component {
    render() {
        return (
            <Dropdown className="mt-3" onSelect={this.props.onSelect}>
                <Dropdown.Toggle className="mr-3" variant="success" id="dropdown-basic">
                    {this.props.title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        this.props.data.map((val, index) => <Dropdown.Item eventKey={val} key={index}>{val}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
