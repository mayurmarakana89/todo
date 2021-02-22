import React from 'react';

import './styles.scss';

const TaskField = ({ handleChange }) => (
    <input
        className="taskInput"
        type="text"
        placeholder={'Enter your task here'}
        onChange={handleChange}
    />
);

export default TaskField;