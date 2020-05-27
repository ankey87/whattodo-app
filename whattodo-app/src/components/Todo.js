import React from 'react';

function Todo(props) {
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