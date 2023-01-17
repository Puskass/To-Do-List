//Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-input")
const todoList = document.querySelector(".todo-list")

//Event Listeners
todoButton.addEventListener("click", addTodo)

//Functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault()
    //todo DIV
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    //create LI
    const newTodo = document.createElement("li")
    newTodo.innerText = "hey"
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //CHECK mark btn
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    //TRASH btn
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete-btn")
    todoDiv.appendChild(trashButton)  
    //APPEND to LIST
    todoList.appendChild(todoDiv) 
}