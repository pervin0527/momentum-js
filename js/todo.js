const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const toDos = [];

function saveTodos(){
    // localStorage에는 array를 저장할 수 없다. 저장해도 
    // 원소들이 구분되어 저장될 뿐 array형태가 아님.
    // 또한 새로운 값을 담으면 초기화 되어버린다.
    //JSON.stringify : object 나 array를 string으로 바꿔준다.
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event){
    // console.log("This is delete button");
    // console.log(event.target.parentElement);
     // 동일한 버튼들이지만, 어떤 button이 눌렸는지 구분(특정)할 수 있다.
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    // console.log("this is paintTodo", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteTodo);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    // console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = ""
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);