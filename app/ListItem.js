import React from 'react';

export default class ListItem extends React.Component{

    Remove(){
        this.props.RemoveTodo(this.props.index);
    }

    render(){
        return(
            <li> {this.props.value}   | <a onClick = { this.Remove.bind(this)} style={{'cursor':'pointer'}}>x</a></li>
        )
    }
}