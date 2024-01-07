import './styles/sidebar.css';
import './styles/main.css';
import './styles/modal.css';
import { loadSite } from './load-site';


// Flow to go:
// if (!store) => show start screen
// Once user created, popular list with 'default' list name.
// Open to empty list saying 'create your first list item'.
// Next time user enters, go to dashboard showing overview of current lists

loadSite.init();



// const taskIndex = 1;
// editTaskModal.createModal(taskIndex, taskStorage.getTasks(0)[taskIndex]);
// editTaskModalListener.init();
