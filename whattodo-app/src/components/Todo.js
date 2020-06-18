import React from 'react';
import styled from 'styled-components';

const TaskList = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    line-height: 5em;
    left: 250px;
    bottom: 470px;
    border: solid;
    border-color: black;
    border-radius: 4px;
    margin-bottom: 1em;
    padding-left: 1em;
    padding-bottom: .5em;
    width: 30%;
`;

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
        <TaskList>
            <ul style={listMain}>
                {props.task.title}
                <input defaultChecked={props.task.completed} onChange={handleCheck} id="checkBox" type="checkbox"></input>
                <button onClick={handleRemove} style={deleteBtn}>Delete</button>
            </ul>
        </TaskList>
    )
}
export default Todo;