import React from "react";

class InputTodo extends React.Component{
    state={
        title:''
    };

    onChange = e =>{
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        if(this.state.title.trim()){
            this.props.addTodoProps(this.state.title)
            this.setState({
                title:"",
            })
        }else{
            alert('Please write item')
        }
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} type='text' placeholder='add Todo...' value={this.state.title} />
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo;