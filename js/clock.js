const clock = document.querySelector("h2#clock");

//// Interval & Timeout
function sayHello(){
    console.log("Hello");
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

//// Date object
function getClock(){
    const date = new Date(); // 매 interval 마다 Date() object를 새로 만든다.
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());

    clock.innerText = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

getClock();
setInterval(getClock, 1000);