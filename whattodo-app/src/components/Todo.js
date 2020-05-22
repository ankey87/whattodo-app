import React from "react";

function Todo(props) {
    return (
        <section className="task__list">
            <h3 className="head__name">
                {props.title}
            </h3>
            <ul className="list__main">
                {taskList}
            </ul>
        </section>
    )
}
export default Todo;