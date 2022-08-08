import React from 'react';
import TodosList from './TodoList'
import Header from './Header'

class ToDoContainer extends React.Component{
    state={
        todos:[
            {
              id: 1,
              title: "Setup development environment",
              completed: true
            },
            {
              id: 2,
              title: "Develop website and add content",
              completed: false
            },
            {
              id: 3,
              title: "Deploy to live server",
              completed: false
            }
          ]
    }
    render() {
        return(
            <>
                <Header />
                <TodosList todos={this.state.todos} />
            </>
        );
    }
}

export default ToDoContainer;