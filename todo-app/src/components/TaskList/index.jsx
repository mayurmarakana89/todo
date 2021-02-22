import React from 'react';
import PropTypes from "prop-types";

import TaskItem from '../TaskItem';

const TaskList = ({ tasks, handleCheckbox, handleDelete }) => (
    <div className="listContainer">
        {
            tasks.map(({ taskId, label, completed }) => {
                return <TaskItem
                        id={`task-${taskId}`}
                        key={`key-${taskId}`}
                        keyIndex={taskId}
                        label={label}
                        completed={completed} 
                        handleCheckbox={handleCheckbox}
                        handleDelete={handleDelete}
                    />;
            })
        }
   </div>
);

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        taskId: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        completed: PropTypes.boolean
    })).isRequired
};

export default TaskList;