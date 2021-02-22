import React from 'react';

import TaskItem from '../TaskItem';

const TaskList = ({ tasks, handleCheckbox, handleDelete }) => (
    <div className="listContainer">
        {
            tasks.map(({ taskId, label, completed }) => {
                return <TaskItem
                        id={`task-${taskId}`}
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

export default TaskList;