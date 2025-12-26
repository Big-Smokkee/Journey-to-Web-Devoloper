const loadToDo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(response => response.json())
        .then(json => displayToDo(json))
};

const displayToDo = (todos) => {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    for (let todo of todos) {
        console.log(todo);

        //making a card
        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
        <div class="todo-card">
            <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>"` : `<i class="fa-regular fa-square-check"></i>`
            } </p>
            <h4>${todo.title}</h4>
        </div
        `
        todoContainer.append(todoCard);
    }
}
loadToDo();