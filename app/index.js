
import React from 'react';
import ReactDom from 'react-dom';
import List from './TodoList';
import TodoForm from './TodoForm';

var root = document.getElementById('root');

class App extends React.Component{
    
    constructor(){
        super();
        
        this.state = {
            todos : []
        };

    }
    
    AddTodo(todo){
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({todos : todos});
    }

    RemoveTodo(index){
        let todos;
        todos = this.state.todos;
        //Array.prototype.splice
        todos.splice(index,1);
        this.setState({todos:todos});
    } 
   
    render(){      

    return(
        <div >
            <h1>Todo List</h1>
            
            <TodoForm AddTodo={this.AddTodo.bind(this)} />
            <List todos={this.state.todos} RemoveTodo={this.RemoveTodo.bind(this)} />
        </div>            
        )
    }
}


ReactDom.render(<App />,root);