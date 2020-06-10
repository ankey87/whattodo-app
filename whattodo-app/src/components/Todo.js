import React from 'react';

function Todo(props) {
    // const handleCheck = () => props.onChangeCheckbox(props.task.id)
    return (
        <section className="task__list">
            <ul className="list__main">
                {props.task.title}
                <input id="checkBox" type="checkbox"></input>
            </ul>
        </section>
    )
}
export default Todo;


// defaultChecked={props.task.completed} onChange={handleCheck}