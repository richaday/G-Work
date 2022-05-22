const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");



function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos)); 
}

function deleteTodo(event){
    const li = event.target.parentElement; 
    li.remove(); 

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos(); 
}


function paintTodo(newTodo){ 
    const li = document.createElement("li"); 
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text; 

    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);


    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li); 
}


function handleToDoSubmit(event){
    event.preventDefault(); 

    const newTodo = todoInput.value; 
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); 

    paintTodo(newTodoObj);

    saveToDos(); 
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDs = localStorage.getItem("todos") 

if(savedToDs !== null){ 
    const parsedToDos = JSON.parse(savedToDs); 
    toDos = parsedToDos;

    parsedToDos.forEach(paintTodo); 

}