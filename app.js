// Variables 
const a = 5;
const b = 3;
let myName = "pervinco" // 자바스크립트에서는 언더스코어로 단어를 이어 쓰지 않고 대문자로 쓴다.

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(myName)

// a = 10; // Error!! const 변수의 값을 바꾸려 하면 안된다!
myName = "Minjun"
console.log(myName)

var c = 1000; // Never use var!!!!
c = 20000;
console.log(c)

// Boolean
const isJavaScript = true;
const isPython = false;
console.log(isJavaScript, isPython)

// Null
const empty = null;
console.log(empty)

// Undefined
let something;
console.log(something);

// Array
// const mon = "Monday"
// const tue = "Tuesday"
// const wed = "Wendsday"
// const thu = "Thursday"
// const fri = "Friday"
// const sat = "Saturday"
// const sun = "Sunday"

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]
console.log(daysOfWeek);
console.log(daysOfWeek[5]);

daysOfWeek.push("sun")
console.log(daysOfWeek);

// Object
const me = {
    name : "Minjun",
    age : 30,
    tall : 180,
};
console.log(me)
console.log(me.name)
console.log(me["name"])

me.age = 20
console.log(me)

me.weight = 70
console.log(me)