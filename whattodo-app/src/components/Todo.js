import React from 'react';

const taskList = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '5em',
    left: '250px',
    bottom: '470px',
    border: 'solid',
    borderColor: 'black',
    borderRadius: '4px',
    marginBottom: '1em',
    paddingLeft: '1em',
    paddingBottom: '.5em',
    width: '30%',
}

const listMain = {

}

const deleteBtn = {
    fontSize: '10px',
    color: 'red',
    borderColor: 'white',
    backgroundColor: 'white',
    borderStyle: 'none',
    margin: '0',
    padding: '0',
}

function Todo(props) {
    const handleCheck = () => props.onChangeCheckbox(props.task.id)
    const handleRemove = () => props.handleRemoveTask(props.task.id)
    return (
        <section style={taskList}>
            <ul style={listMain}>
                {props.task.title}
                <input defaultChecked={props.task.completed} onChange={handleCheck} id="checkBox" type="checkbox"></input>
                <button onClick={handleRemove} style={deleteBtn}>Delete</button>
            </ul>
        </section>
    )
}
export default Todo;