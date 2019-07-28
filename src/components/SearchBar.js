import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class SearchBar extends Component {
    render() {
        return (
           <Form inline className="mt-3">
               <FormControl type="text" placeholder={this.props.placeholder} className="mr-sm-2"/>
               <Button variant="outline-success">Search</Button>
            </Form>
        )
    }
}
