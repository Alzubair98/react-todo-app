import React, { useState } from "react";
import styles from './TodoItme.module.css'

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

    const {completed, id, title} = props.todo;

    const [editing, changeEditing] = useState(false);

    const handleEditing = (e) => {
        changeEditing(true)
    }

    let viewMode = {}
    let editMode = {}

    if(editing){
        viewMode.display='none'
    }else{
        editMode.display='none'
    }

    const handleUpdateDone= (e)=>{
        if(e.key=== 'Enter'){
            changeEditing(false)
        } 
    }


    return <li className={styles.item}>
        <div style={viewMode} onClick={handleEditing}>
            <input type='checkbox'
            className={styles.checkbox} 
            checked={completed}
            onChange={()=> props.handleChangeProps(id)}   
            /><button 
            onClick={()=>{props.deleteTodoProps(props.todo.id)}}>Delete</button>
            <span style={props.todo.completed ? completedStyle : null}>{title}</span>
        </div>
        <input 
        type="text" 
        style={editMode} 
        className={styles.textInput}
        value={title}
        onChange={e =>{
            props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdateDone} />
     </li>
}


export default TodoItem;