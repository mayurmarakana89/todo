import { addTask, completeTask, removeTask } from './todo-helper';

describe('addTask', () => {
    it('should update the task list with a new task', () => {
        const currentTasks = [
            { taskId: 1, label: "Task 1", completed: false },
            { taskId: 2, label: "Task 2", completed: false },
            { taskId: 3, label: "Task 3", completed: false }
        ];
        const expectedTasks = [
            { taskId: 1, label: "Task 1", completed: false },
            { taskId: 2, label: "Task 2", completed: false },
            { taskId: 3, label: "Task 3", completed: false },
            { taskId: 4, label: "Task 4", completed: false }
        ];
        const newTasks = addTask("Task 4", currentTasks);
        expect(newTasks).toEqual(expectedTasks);
    });
});

describe('completeTask', () => {
    it('should update the task list with completed task', () => {
        const currentTasks = [
            { taskId: 1, label: "Task 1", completed: false },
            { taskId: 2, label: "Task 2", completed: false },
            { taskId: 3, label: "Task 3", completed: false }
        ];  
        const expectedTasks = [
            { taskId: 1, label: "Task 1", completed: true },
            { taskId: 2, label: "Task 2", completed: false },
            { taskId: 3, label: "Task 3", completed: false }
        ];
        const newTasks = completeTask(1, currentTasks);
        expect(newTasks).toEqual(expectedTasks);
    });
});

describe('removeTask', () => {
    it('should update the task list after deleting a task', () => {
        const currentTasks = [
            { taskId: 1, label: "Task 1", completed: false },
            { taskId: 2, label: "Task 2", completed: false },
            { taskId: 3, label: "Task 3", completed: false }
        ];
        const expectedTasks = [
            { taskId: 1, label: "Task 1", completed: false },
            { taskId: 3, label: "Task 3", completed: false }
        ];
        const newTasks = removeTask(2, currentTasks);
    
        expect(newTasks).toEqual(expectedTasks);
    });
});