import React, { useEffect, useState } from 'react';
import get from 'lodash/get';

import TaskField from './components/TaskField';
import TaskList from './components/TaskList';

import { addTask, completeTask, removeTask } from './utils/todo-helper';
import * as data from './stub/tasks.json';

import './App.scss';

const defaultTasks = JSON.parse(localStorage.getItem( 'todoTasks' )) || get(data, 'tasks');

const App = () => {
    const [fieldValue, setFieldValue] = useState('');
    const [hideCompleted, setHideCompleted] = useState(false);
    const [tasks, setTasks] = useState(defaultTasks);

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
                        onClick={(event) => setHideCompleted(event.target.checked)}
                    /> Hide completed tasks
                </label>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();

                const newTasks = addTask(fieldValue, tasks);
                setTasks(newTasks);
                setFieldValue('');
            }}>
                <TaskField value={fieldValue} handleChange={(event) => setFieldValue(event.target.value)} />
                <TaskList
                    tasks={displayTasks}
                    handleCheckbox={(keyIndex) => {
                        const newTasks = completeTask(keyIndex, tasks);
                        setTasks(newTasks);
                    }}
                    handleDelete={(keyIndex) => {
                        const newTasks = removeTask(keyIndex, tasks);
                        setTasks(newTasks);
                    }}
                />
            </form>
        </div>
    );
};

export default App;