// Find the last key index
const getLastTaskId = (tasks) => {
    return tasks.sort((a, b) => a.taskId > b.taskId ? 1 : -1)[tasks.length - 1].taskId;
}

// Add a new task
export const addTask = (fieldValue, tasks, setTasks) => {
    if (!fieldValue) return;

    const newTask = { taskId: getLastTaskId(tasks) + 1, label: fieldValue, completed: false }
    setTasks([...tasks, newTask]);
};

// Mark/unmark task as completed
export const completeTask = (keyIndex, tasks, setTasks) => {
    const temp = [...tasks];
    const itemIndex = temp.findIndex(o => o.taskId == keyIndex);
    temp[itemIndex].completed = !temp[itemIndex].completed;
    setTasks(temp);
};

// Delete task
export const removeTask = (keyIndex, tasks, setTasks) => {
    const temp = [...tasks];
    const itemIndex = temp.findIndex(o => o.taskId == keyIndex);
    temp.splice(itemIndex, 1);
    setTasks(temp);
};

