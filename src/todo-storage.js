import TodoList from "./todo-list";

export const todoStorage = (function(){
    const storage = [];

    const addList = (list) => {
        return storage.push(list) - 1; //Array Index
    };

    const addTodo = (listIndex, todo) => {
        storage[listIndex].todos.push(todo);
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