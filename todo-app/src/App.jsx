import React, { useEffect, useState } from 'react';
import {render} from 'react-dom';

import TaskField from './components/TaskField';
import TaskList from './components/TaskList';

import './App.scss';

const DEFAULT_TASKS = [
    { taskId: 1, label: "Task 1", completed: false },
    { taskId: 2, label: "Task 2", completed: false },
    { taskId: 3, label: "Task 3", completed: false }
];
const defaultTasks = JSON.parse(localStorage.getItem( 'todoTasks' )) || DEFAULT_TASKS;

const App = () => {
    const [fieldValue, setFieldValue] = useState('');
    const [hideCompleted, setHideCompleted] = useState(false);
    const [tasks, setTasks] = useState(defaultTasks);

    // Find the last key index
    const getLastTaskId = () => {
        return tasks.sort((a, b) => a.taskId > b.taskId ? 1 : -1)[tasks.length - 1].key;
    }

    // Add a new task
    const addTask = (event) => {
        event.preventDefault();

        if (fieldValue) {
            const newTask = { taskId: getLastTaskId() + 1, label: fieldValue, completed: false }
            setTasks([...tasks, newTask]);
            setFieldValue('');
        }
    };

    // Mark/unmark task as completed
    const completeTask = (keyIndex) => {
        const temp = [...tasks];
        const itemIndex = temp.findIndex(o => o.taskId == keyIndex);
        temp[itemIndex].completed = !temp[itemIndex].completed;
        setTasks(temp);
    };

    // Delete task
    const removeTask = (keyIndex) => {
        const temp = [...tasks];
        const itemIndex = temp.findIndex(o => o.taskId == keyIndex);
        temp.splice(itemIndex, 1);
        setTasks(temp);
    };

    // Filter completed tasks
    const filterCompletedTasks = (filterCompleted) => {
        setHideCompleted(filterCompleted);
    };

    // Update localstorage when the todo list is modified
    useEffect(() => {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }, [tasks]);


    // List to be displayed
    const displayTasks = hideCompleted ? tasks.filter((obj) => !obj.completed) : tasks;

    return (
        <div className="appContainer">
            <div className="appHeader">
                <label>{`Todo list (${displayTasks.length})`}</label>
                <label className="filterClass" htmlFor="hide-completed-tasks">
                    <input
                        type="checkbox"
                        id="hide-completed-tasks"
                        onClick={(event) => filterCompletedTasks(event.target.checked)}
                    /> Hide completed tasks
                </label>
            </div>
            <form onSubmit={addTask}>
                <TaskField handleChange={setFieldValue} />
                <TaskList
                    tasks={displayTasks}
                    handleCheckbox={completeTask}
                    handleDelete={removeTask}
                />
            </form>
        </div>
    );
}

render(<App />, document.getElementById('app'));