import React from 'react';

import './styles.scss';

const TaskField = ({ value, handleChange }) => (
    <input
        className="taskInput"
        type="text"
        placeholder={'Enter your task here'}
        value={value}
        onChange={handleChange}
    />
);

export default TaskField;