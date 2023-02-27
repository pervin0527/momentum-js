// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const API_KEY = "572215c2126e906eae5209b8022d2b39";

function onGeoOk(position){ // Geolocation Position object를 입력 받는다.
    console.log(position);
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(`You live in ${lon} ${lat}`);

    // 숫자들을 장소로 바꿔주는 서비스
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    console.log(url);
    fetch(url) // fetch를 통해서 url을 javascript에서 호출한다.
    .then(response => response.json()) // 서버의 응답을 받았을 때, 무엇을 할 것이다.
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
     });
}

function onGeoError(){
    alert("Error!");
}

// 두 개의 인수를 가지고 있다. 첫번째는 정상적으로 동작했을 때의 함수 두번째는 에러가 발생했을 때.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);