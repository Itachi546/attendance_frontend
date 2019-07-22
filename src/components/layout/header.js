import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>Institute of Engineering, Pulchowk Campus</h1>
                <Link to='/' style={linkStyle}>Home</Link> | <Link to='/classes' style={linkStyle}> Class </Link> | <Link to='/instructor' style={linkStyle}>Instructor</Link>
            </header>
        )
    }
}

const headerStyle={
    backgroundColor:'#DC2A35',
    textAlign:'center',
    color:'#EEE',
    padding:'10px',
    textShadow:'1px 1px #009000',
};

const linkStyle={
    color:'white',

}
