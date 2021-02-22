import React from "react";
import PropTypes from "prop-types";

import './styles.scss';

const TaskItem = ({ id, keyIndex, label, completed, handleCheckbox, handleDelete }) => {
    return (
        <div className="taskItem">
            <label className={completed ? "completedClass" : ""} htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    onClick={() => handleCheckbox(keyIndex)}
                    checked={completed}
                /> {label}
            </label>
            <button
                type="button"
                onClick={() => handleDelete(keyIndex)}
            >
                Delete
            </button>
        </div>
    )
};

TaskItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default TaskItem;