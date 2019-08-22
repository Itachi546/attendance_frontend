import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { url } from '../../config';
export default class Form extends Component {
    state = {
        oldPassword: '',
        newPassword: '',
        msg: ''
    }
    render() {
        return (
            <MDBContainer className="container-fluid">
                <MDBRow>
                    <MDBCol md="6">
                        <form >
                            <p className="h3 text-center mb-4 mt-5">Change Password</p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Old password"
                                    icon="lock"
                                    group
                                    type="text"
                                    validate
                                    onChange={(evt) => this.setState({
                                        oldPassword: evt.target.value
                                    })
                                    }
                                />
                                <MDBInput
                                    label="New password"
                                    icon="lock"
                                    group
                                    type="text"
                                    validate
                                    onChange={(evt) => this.setState({
                                        newPassword: evt.target.value
                                    })
                                    }
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="success" onClick={() => {
                                    fetch(url + 'password', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            old: this.state.oldPassword,
                                            new: this.state.newPassword
                                        })
                                    })
                                    .then(res=>{
                                        return res.json();
                                    })
                                    .then(json=>{
                                        this.setState({
                                            msg:json.msg
                                        })
                                    })
                                }}>Change</MDBBtn>
                            </div>
                            <h5>{this.state.msg}</h5>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
