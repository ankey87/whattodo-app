import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

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

const ListMain = styled.ul`
    color: teal;
    // background-color: ${(props) => props.completed || "red"}
    `

const DeleteBtn = styled.button`
    font-size: 10px;
    color: red;
    border-color: white;
    background-color: white;
    border-style: none;
    margin: 0;
    padding: 0;
`;

const CheckBoxComplete = styled.input`

`;
function Todo(props) {
    const handleCheck = () => props.onChangeCheckbox(props.task.id)
    const handleRemove = () => props.handleRemoveTask(props.task.id)
    const onClickEdit = () => {
        props.history.push("/todoList/" + props.task.id)
      }

    return (
        <TaskList>
            <ListMain>
                {props.task.title}
                <CheckBoxComplete defaultChecked={props.task.completed} onChange={handleCheck} id="checkBox" type="checkbox"></CheckBoxComplete>
                <DeleteBtn onClick={handleRemove}>Delete</DeleteBtn>
                <button onClick={onClickEdit}>Edit</button>
            </ListMain>
        </TaskList>
    )
}
export default withRouter(Todo);