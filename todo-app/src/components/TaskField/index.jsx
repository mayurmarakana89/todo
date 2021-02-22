import React from 'react';

import './styles.scss';

const TaskField = ({ handleChange }) => (
    <input
        className="taskInput"
        type="text"
        placeholder={'Enter your task here'}
        onChange={(event) => handleChange(event.target.value)}
    />
);

export default TaskField;