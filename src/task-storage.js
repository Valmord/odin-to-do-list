import { localStore } from "./local-storage";
import TaskList from "./tasklist";

export const taskStorage = (() => {
    const loadFromLocalStorage = () => {
        return localStore.getLocalStorage();
    }
    const storage = loadFromLocalStorage();

    const saveToLocalStorage = () => {
        localStore.setLocalStorage(storage);
    }

    const addList = (list) => {
        const arrIndex = storage.push(list) - 1; //Array Index is length - 1
        saveToLocalStorage();
        return arrIndex;
    };

    const addTask = (listIndex, todo) => {
        storage[listIndex].todos.push(todo);
        saveToLocalStorage();
    }

    const getLists = () => {
        return storage.map( (list, index) => ({title: list.title, index})  )
    }

    const getTasks = (index) => {
        return storage[index].todos;
    }

    const updateTask = (listIndex, taskIndex, updatedTask) => {
        storage[listIndex].todos[taskIndex] = updatedTask;
        saveToLocalStorage();
    }

    const deleteTask = (listIndex, taskIndex) => {
        const newTodos = storage[listIndex].todos.toSpliced(taskIndex, 1);
        storage[listIndex].todos = newTodos;
        saveToLocalStorage();
    }

    return {addList, addTask, getLists, getTasks, updateTask, deleteTask};
})();

// let obj = {
//     title: 'Personal',
//     todos: [
//         {
//             title: 'My first todo',
//             dueDate: Date.now(),
//             notes: '',
//             tasks: [],
//             status: 'completed'
//         },
//     ]}