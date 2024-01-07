

export const createStartScreen = (()=>{
    const body = document.querySelector('body');

    const createWelcomeMessage = () => {
        const header = document.createElement('h1');
        header.textContent = 'Welcome to Tasklists!';
        return header;
    }

    const createForm = () => {
        const form = document.createElement('form');
        return form;
    }

    const createFormHeader = () => {
        const header = document.createElement('h2');
        header.textContent = "Create Account";
        return header;
    }

    const createUserField = () => {
        const label = document.createElement('label');
        label.textContent = "Username: ";
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'username';
        input.name = 'username';
        input.minLength = '2';
        input.autocomplete = 'username';
        input.required = true;
        input.classList.add('startup-user-name');
        label.appendChild(input);
        return label;
    }

    const createPasswordField = () => {
        const label = document.createElement('label');
        label.textContent = "Password: ";
        const input = document.createElement('input');
        input.type = 'password';
        input.id = 'password';
        input.name = 'password';
        input.minLength = '2';
        input.autocomplete = 'new-password';
        input.required = true;
        input.classList.add('startup-user-name');
        label.appendChild(input);
        return label;
    }

    const createUserBtn = () => {
        const btn = document.createElement('button');
        btn.type = 'submit';
        btn.textContent = 'Create User Account';
        return btn;
    }


    const createModal = () => {
        const modal = document.createElement('div');
        modal.classList.add('modal-start-screen', 'modal-shown');
        modal.appendChild(createWelcomeMessage());
        const form = createForm();
        form.appendChild(createFormHeader());
        form.appendChild(createUserField());
        form.appendChild(createPasswordField());
        form.appendChild(createUserBtn());
        modal.appendChild(form);
        body.appendChild(modal);
    }

    return { createModal };
})();