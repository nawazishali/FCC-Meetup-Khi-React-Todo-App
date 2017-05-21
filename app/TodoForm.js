import React from 'react';

export default class TodoForm extends React.Component{

    constructor(){
        super();
        this.state = {todo : ""};
    }

    FormSubmit(e){
        e.preventDefault();

        let todo,todos;
        
        todo = this.state.todo;

        this.props.AddTodo(todo);
        this.setState({todo : ""});      
    }

    UpdateTodo(e){
        this.setState({todo : e.target.value});

    }

    render(){
        return(
            <form onSubmit={this.FormSubmit.bind(this)}>  
                <input type="text" value={this.state.todo} 
                        onChange={this.UpdateTodo.bind(this)} placeholder="enter an item" />
                
                <button type="submit" >Add</button>
            </form>
        )
    }
    
}