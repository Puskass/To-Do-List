//Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//Event Listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
//Functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault()
    //todo DIV
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    //create LI
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
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
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)  
    //APPEND to LIST
    todoList.appendChild(todoDiv) 
    //CLEAR todo INPUT VALUE
    todoInput.value = ""
}

function deleteCheck(e){
    const item = e.target
    //DELETE TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement
        todo.remove()
    }
    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}