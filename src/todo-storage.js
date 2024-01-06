import { localStore } from "./local-storage";
import TodoList from "./todo-list";

export const todoStorage = (function(){
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

    const addTodo = (listIndex, todo) => {
        storage[listIndex].todos.push(todo);
        saveToLocalStorage();
    }

    const getLists = () => {
        return storage.map( (list, index) => ({title: list.title, index})  )
    }

    const getTodos = (index) => {
        return storage[index].todos;
    }

    return {addList, addTodo, getLists, getTodos};
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