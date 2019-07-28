import React, { Component } from 'react'
import Navigation from './Navigation'

export default class Header extends Component {
    render() {
        return (
            <header className="p-3 mt-2" style={{backgroundColor:'#DC2A35'}}>
                <h1 className="m-1 d-flex justify-content-center text-white">Institute of Engineering</h1>
                <h6 className="m-1 d-flex justify-content-center text-white">Pulchowk Campus</h6>
                <Navigation></Navigation>
            </header>
        )
    }
}

