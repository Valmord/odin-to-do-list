import { localStore } from "./local-storage";
import TaskList from "./tasklist";

export const taskStorage = (() => {
    const loadFromLocalStorage = () => {
        return localStore.getLocalStorage();
    }
    const storage = loadFromLocalStorage();

    const saveToLocalStorage = () => {
        console.log({storage});
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
        console.log(storage[listIndex][taskIndex], updatedTask);
        storage[listIndex].todos[taskIndex] = updatedTask;
        console.log(storage[listIndex][taskIndex], updatedTask);
        saveToLocalStorage();
    }

    return {addList, addTask, getLists, getTasks, updateTask};
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