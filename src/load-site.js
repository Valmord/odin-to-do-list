import { displaySidebarLists, displayListItems, displayUserName } from "./dom-display";
import { siteStorage } from "./storage";
import { sidebarListeners } from "./dom-sidebar-listeners";
import { addTaskListeners } from "./modal-add-task-listeners";
import { addListListeners } from "./modal-add-list-listeners";
import { createModalStartScreen } from "./modal-start-screen";
import { startScreenListeners } from "./modal-start-screen-listeners";


export const loadSite = (() => {
    const init = () => {
        const userCreated = siteStorage.getLists()?.length;
        if (!userCreated) {
            createModalStartScreen.createModal();
            startScreenListeners();
        } else {
            displayUserName();
            displaySidebarLists();
            displayListItems.showPage();
            sidebarListeners.init();
            addListListeners();
            addTaskListeners();
        }
    }

    const refreshPage = (listIndex) => {
        displaySidebarLists(listIndex);
        displayListItems.showPage(listIndex);
        // addListListeners();
        sidebarListeners.refresh();
    }

    return { init, refreshPage };
})();