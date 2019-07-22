import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
           <form style={styles.form}>
               <input style = {styles.inputText} type ="text" placeholder={this.props.placeholder}/>
               <input style={styles.button} type="submit" value = "Submit"/>
            </form>
        )
    }
}


const styles = {
    form : {
        margin:'10px',
    },
    inputText:{
    },
    button:{
        marginLeft:'10px',
        marginRight:'10px',
        border:'none',
        color:'white',
        backgroundColor:'black',
        width:'80px',
        height:'25px',
    }
}