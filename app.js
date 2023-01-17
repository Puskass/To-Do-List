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
    newTodo.ckassList.add("todo-item")
    todoDiv.appendChild(newTodo)
    //chech mark btn
    const completedButton = document.createElement("button")
    
    //ptoblem ne rade mi ICONE
    completedButton.innerHTML = "<i></i>"
}