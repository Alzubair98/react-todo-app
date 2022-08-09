import React from "react";
import { FaPlusCircle } from "react-icons/fa"

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
                <input 
                className="input-text"
                onChange={this.onChange} 
                type='text' 
                placeholder='add Todo...' 
                value={this.state.title} />
                <button className="input-submit"><FaPlusCircle /></button>
            </form>
        )
    }
}

export default InputTodo;