import React from 'react';

function Todo(props) {
    const handleCheck = () => props.onChangeCheckbox(props.task.id)
    const handleRemove = () => props.handleRemoveTask(props.task.id)
    return (
        <section className="task__list">
            <ul className="list__main">
                {props.task.title}
                <input defaultChecked={props.task.completed} onChange={handleCheck}id="checkBox" type="checkbox"></input>
                <button onClick={handleRemove} className="delete__btn">Delete</button>
            </ul>
        </section>
    )
}
export default Todo;