// local storage에 username이 존재하면 form을 보이지 않게 하고, 존재하지 않으면 form을 보이게 함.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const gretting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    gretting.innerText = `Hello ${username}`; // gretting.innerText = "Hello " + username; 와 동일함.
    gretting.classList.remove(HIDDEN_CLASSNAME);
}

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const inputUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputUsername);
    paintGreetings(inputUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}
else if(savedUsername !== null){
    paintGreetings(savedUsername);
}
