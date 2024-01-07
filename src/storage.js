import { localStore } from "./local-storage";

export const siteStorage = (() => {

    const loadFromLocalStorage = () => {
        const temp = localStore.getLocalStorage();
        return temp ? temp : {lists: []};
    }
    const storage = loadFromLocalStorage() || { account: {}, lists};

    const saveToLocalStorage = () => {
        localStore.setLocalStorage(storage);
    }

    const addList = (list) => {
        const arrIndex = storage.lists.push(list) - 1; //Array Index is length - 1
        saveToLocalStorage();
        return arrIndex;
    };

    const addTask = (listIndex, todo) => {
        storage.lists[listIndex].todos.push(todo);
        saveToLocalStorage();
    }

    const getLists = () => {
        return storage.lists.map( (list, index) => ({title: list.title, index})  )
    }

    const getTasks = (index) => {
        return storage.lists[index].todos;
    }

    const updateTask = (listIndex, taskIndex, updatedTask) => {
        storage.lists[listIndex].todos[taskIndex] = updatedTask;
        saveToLocalStorage();
    }

    const deleteTask = (listIndex, taskIndex) => {
        const newTodos = storage.lists[listIndex].todos.toSpliced(taskIndex, 1);
        storage.lists[listIndex].todos = newTodos;
        saveToLocalStorage();
    }

    // User Storage 
    const setUserAccount = (user, password) => {
        storage.account = {user, password}; 
    }

    const getUserName = () => {
        return storage.account.user;
    }

    return {addList, addTask, getLists, getTasks, updateTask, deleteTask,
        setUserAccount, getUserName };
})();


// let obj = {
//     account: {user, password};
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