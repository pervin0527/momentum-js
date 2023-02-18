const title = document.getElementById("test-id"); // id 값을 통해 html 원소를 가져온다.
console.log(title); // <h1 id="title">Grab me!</h1>
console.dir(title); // element의 세부정보 확인.
// 가져온 원소의 property에 접근이 가능. 값을 받아오거나, 변경하는 것 가능.
console.log(title.autofocus);
console.log(title.className);
title.innerText = "Got you!";

const hello = document.getElementsByClassName("test-class");
console.log(hello);

const allH1 = document.getElementsByTagName("h3");
console.log(allH1);

const querySelector1 = document.querySelector(".test-container span"); // element를 CSS 방식으로 검색할 수 있다.
const querySelector2 = document.querySelector("div span"); // 위와 동일함.
// 3개의 동일한 원소가 존재하는데 첫번째 원소의 값만 가져왔다. - querySelector는 first element만 가져온다.
const querySelectorAll = document.querySelectorAll(".test-container span");
console.log(querySelector1);
console.log(querySelector2);
console.log(querySelectorAll)

const selfTestVar = document.querySelector(".self-test-block:last-child span:nth-child(2)");
console.log(selfTestVar);
console.dir(selfTestVar)
selfTestVar.style.color = "blue";

function customClickEvent(){
    console.log("Clicked!!")
}

selfTestVar.addEventListener("click", customClickEvent)