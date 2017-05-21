
import React from 'react';
import ListItem from './ListItem';


export default class List extends React.Component{

    CreateListItem(item,index){
        return <ListItem key={index} index={index} value={item} RemoveTodo= {this.props.RemoveTodo} />
    }

    render(){
         
        return(            
             <ul>
                {this.props.todos.map(this.CreateListItem.bind(this))}
            </ul> 
        )
    }
}