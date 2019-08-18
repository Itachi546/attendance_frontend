import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { url } from '../../config';
export default class Form extends Component {
    state = {
        oldPassword: '',
        newPassword: '',
        errorMsg:''
    }
    render() {
        console.log(this.state.errorMsg)
        return (
            <MDBContainer className="container-fluid">
                <MDBRow>
                    <MDBCol md="6">
                        <form >
                            <p className="h3 text-center mb-4 mt-5">Sign in</p>
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
                                    if(this.state.newPassword.length === 0 && this.state.oldPassword.length === 0){
                                        this.setState({
                                            errorMsg:'No password'
                                        })
                                    }
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
                                }}>Change</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}
