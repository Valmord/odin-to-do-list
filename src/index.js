import './sidebar.css';
import './main.css';
import { displayListItems, displaySidebarLists } from './dom-display';
import { sidebarListeners } from './dom-sidebar';
import { addListListeners } from './modal-add-list';
import { addTaskListeners } from './modal-add-task';


displaySidebarLists();
sidebarListeners.init();
displayListItems.showPage();
addListListeners();
addTaskListeners();


// const list = new TodoList('Bobs Kitchen');
// let todoIndex = todoStorage.addList(list);


// const list2 = new TodoList('Bobs3 Kitchen');
// todoStorage.addList(list2);

// const todo1 = new Todo('first todo',Date.now(),'No notes');
// const todo2 = new Todo('another todo',Date.now(),'No notes');
// const todo3 = new Todo('third todo',Date.now(),'No notes');

// [todo1, todo2, todo3].forEach( todo => todoStorage.addTodo(todoIndex, todo));


// console.dir(taskStorage.getLists()[0].title);
// console.log(taskStorage.getTasks(0));




// need to rewrite this being that it will fail if no lists, but should fail if no tasks



// todoStorage.saveToLocalStorage();    

// const todo = new Todo('test todo', Date.now(), 'Nothing new to note');
// todoStorage.addTodo(0, todo);
// console.log('added?');