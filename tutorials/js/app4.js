const h1 = document.querySelector(".h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse on Me!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse not on Me... ㅜㅜ...";
}

// event 사용법 1 : addEventListener
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// event 사용법 2 : oneventname
h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI")
}

function handleWindowONline(){
    alert("WIFI on")
}

window.addEventListener("resize", handleWindowResize); // window도 document처럼 기본적으로 js에 존재하는 object.
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);