//// 방법 1
// const loginForm = document.querySelector("#login-from") // querySelector로 id를 찾을 때는 # class는 .
// const loginForm = document.getElementById("login-form");

//// 찾아낸 loginForm을 이용해서 (document를 이용하지 않고)하위 원소들에 접근
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button")

//// 방법2
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function loginBtnClick(){
//     const username = loginInput.value;
//     if(username === ""){
//         alert("Please write your name!")
//     }
//     else if(username.length > 15){
//         alert("Your name is too long.")
//     }
// }
// loginButton.addEventListener("click", loginBtnClick);


//// 링크가 이동하지 못하도록 기본 설정 막기.
// const link = document.querySelector("a");
// function clickLink(event){
//     event.preventDefault();
// }

// link.addEventListener("click", clickLink)


//// Submit에 대한 event 만들기.
// const loginForm = document.querySelector("#login-form")
// const loginInput = document.querySelector("#login-form input");
// const gretting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function loginSubmit(event){
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
    
//     localStorage.setItem(USERNAME_KEY, username);

//     gretting.innerText = `Hello ${username}`; // gretting.innerText = "Hello " + username; 와 동일함.
//     gretting.classList.remove(HIDDEN_CLASSNAME);
// }
// loginForm.addEventListener("submit", loginSubmit);


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
