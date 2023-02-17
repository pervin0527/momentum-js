// Function
function add(a, b){
    console.log(a + b);
}

function divide(a, b){
    console.log(a / b);
}

add(10, 7);
divide(10, 3);

// 인자의 수보다 많은 인수들을 전달해도 문제가 되지 않는다.
function minusFive(n){
    console.log(n - 5);
    const test_local_var = "this is local variable";
}
minusFive(5, 10, 15);
// console.log(test_local_var); // 함수 블록 내에서 선언한 변수는 함수 내에서만 접근이 가능하다. local variable.

// object with function.
const person={
    name : "minjun",
    age : 30,
    personJob : function(job) {
        console.log("my job is " + job)
    }
};
person.personJob("Programmer");

// Homework!!!!
const calculator = {
    add : function(a, b){
        return a + b;
    },

    sub : function(a, b){
        return a - b;
    },

    mul : function(a, b){
        return a * b;
    },

    div : function(a, b){
        return a / b;
    }
}

const resultAdd = calculator.add(5, 5);
const resultSub = calculator.sub(3, 2);
const resultMul = calculator.mul(2, 8);
const resultDiv = calculator.div(10, 5);
console.log(resultAdd, resultSub, resultMul, resultDiv);

// conditional
let age = prompt("How old are you?"); // 사용자에게 message를 보여주고, 값을 입력하길 기다린다.(값을 입력할 때까지 페이지를 멈춤)
console.log(typeof age); // typeof : 전달 받은 값의 데이터 타입을 반환한다. prompt가 반환하는 값은 string.

age = parseInt(age); // parseInt() : type이 string에서 number로 바뀜.
console.log(typeof age);
console.log(isNaN(age)); // age가 number인지 아닌지 판별. 아니라면 NaN을 반환한다.

if(isNaN(age) || age < 0){ // if문은 주어진 조건이 true인지 false인지 반환한다.
    console.log("Please write a number.");
}
else if(age < 18){
    console.log("You are too young.");
}
else if(18 <= age && age <= 50){ 
    // && : AND
    // || : OR
    // == : 두 피연산자의 자료형을 일치시킨 후 비교.
    // != : 두 피연산자의 자료형을 일치시킨 후 비교.
    // === : 자료형 변환 없이 두 피연산자가 같은지 판별한다.
    // !== : 자료형 변환 없이 두 피연산자가 같지 않은지 판별.
    console.log("You can drink!");
}
else if(50 < age && age <= 80){
    console.log("You should exercise.");
}
else if(age > 80){
    console.log("You can do whatever you want.");
}

console.log(1 === 1);
// Expected output: true

console.log('hello' === 'hello');
// Expected output: true

console.log('1' ===  1);
// Expected output: false

console.log(0 === false);
// Expected output: false

console.log(1 == 1);
// Expected output: true

console.log('hello' == 'hello');
// Expected output: true

console.log('1' ==  1);
// Expected output: true

console.log(0 == false);
// Expected output: true
