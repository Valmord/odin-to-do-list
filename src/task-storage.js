import { localStore } from "./local-storage";
import TaskList from "./tasklist";

export const taskStorage = (function(){
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

    const checkIfAnyLists = () => {
        
    }

    return {addList, addTask, getLists, getTasks};
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