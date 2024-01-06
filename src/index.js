import { localStore } from './local-storage';
import './style.css';
import Todo from './todo-item';
import TodoList from './todo-list';
import { todoStorage } from './todo-storage';



// const list = new TodoList('Bobs Kitchen');
// let todoIndex = todoStorage.addList(list);


// const list2 = new TodoList('Bobs3 Kitchen');
// todoStorage.addList(list2);

// const todo1 = new Todo('first todo',Date.now(),'No notes');
// const todo2 = new Todo('another todo',Date.now(),'No notes');
// const todo3 = new Todo('third todo',Date.now(),'No notes');

// [todo1, todo2, todo3].forEach( todo => todoStorage.addTodo(todoIndex, todo));


console.dir(todoStorage.getLists()[0].title);
console.log(todoStorage.getTodos(0));

// todoStorage.saveToLocalStorage();    

// const todo = new Todo('test todo', Date.now(), 'Nothing new to note');
// todoStorage.addTodo(0, todo);
// console.log('added?');