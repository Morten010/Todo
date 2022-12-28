const addTodo = document.querySelector('#newtodo');
const list = document.querySelector('#todo-list');
const search = document.querySelector('#search input');

// list template
const generateTemplate = todo => {

    const html = `
        <li>
            <span>${todo}</span>
            <i class="fa-regular fa-trash-can"></i>
        </li>
    `

    list.innerHTML += html;

};

// eventlistener
addTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addTodo.newtodo.value.trim();
    if(todo.length >= 1){
        generateTemplate(todo)
        addTodo.reset();
    }
});

//delete todos
list.addEventListener('click', e =>{
    console.log();
    if(e.target.classList.contains("fa-trash-can")){
        e.target.parentElement.remove();
    }
});


const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            todo.classList.add('filtered')
        });
    
    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term)
        })
        .forEach((todo) => {
            todo.classList.remove('filtered')
        });
};
// keyup even aka search
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
});