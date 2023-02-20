const h1 = document.querySelector(".test");

function handleTitleClick(){
    const clickedClass = "clicked test"
    if(h1.className === clickedClass){
        h1.className = ""; // h1의 클래스 이름을 제거.
    }
    else{
        h1.className = clickedClass; // h1의 클래스 이름을 active로 설정.
    }
} 

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
        console.log(h1.classList);
    }
    else{
        h1.classList.add(clickedClass)
        console.log(h1.classList);
    }
} 


function handleTitleClick(){
    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);
