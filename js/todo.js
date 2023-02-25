const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos";

function saveTodos(){
    // localStorage에는 array를 저장할 수 없다. 저장해도 
    // 원소들이 구분되어 저장될 뿐 array형태가 아님.
    // 또한 새로운 값을 담으면 초기화 되어버린다.
    // JSON.stringify : object 나 array를 string으로 바꿔준다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    // console.log("This is delete button");
    // console.log(event.target.parentElement);
    // 동일한 버튼들이지만, 어떤 button이 눌렸는지 구분(특정)할 수 있다.
    const li = event.target.parentElement;

    // array의 filter function은 filter된 결과를 담은 새로운 array를 반환한다.
    // filter에는 함수를 인자로 전달 받고, 함수 내에서 배열의 원소가 조건에 해당되지 않아 False인 경우,
    // 신규 배열에 포함시키지 않는다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    li.remove();
    saveTodos();
}

function paintTodo(newTodo){
    // console.log("this is paintTodo", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteTodo);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""

    // 배열에 중복되는 값이 존재할 수 있기 때문에, 변수에서 object 타입으로 변경한다.
    const newTodoObj = {
        id : Date.now(),
        text : newTodo
    }

    toDos.push(newTodoObj)
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
const saveToDos = localStorage.getItem(TODOS_KEY);

function forEachFunction(item){
    console.log("function turn of", item);
}

if(saveToDos){ // localStorage에서 가져온 todo list가 null이 아니라면(비어있지 않다면)
    const parsedToDos = JSON.parse(saveToDos);
    // console.log(parsedToDos);

    // 새로운 값을 입력하면 예전에 저장하고 있던 값들이 없어지는 문제.
    // 원인은 페이지가 시작될 때 toDos array는 항상 비어 있는 배열로 정의되어 있기 때문
    toDos = parsedToDos;

    //forEach는 array의 item들에 대해 한 개의 function을 실행.
    // console.log(parsedToDos);
    // parsedToDos.forEach(forEachFunction);

    // arrow function
    // parsedToDos.forEach((item) => console.log("shortcut turn of", item));

    // todo list를 화면에 출력하기.
    // forEach 함수가 paintTodo 함수를 parsedToDo의 원소마다 실행한다.
    parsedToDos.forEach(paintTodo);
}