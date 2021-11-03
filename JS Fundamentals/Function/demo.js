//1
function strasTriangle(size) {
    for (let i = 1; i <= size; i++) {
        print(i);
    }
    for (let i = size-1; i > 0; i--) {
        print(i);
    }
}//strasTriangle(4);

function print(n) {
    console.log("* ".repeat(n).trim());
}

//2
function squareStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log("* ".repeat(n).trim());
    }

}//squareStars(4);

//3
function palindrome(str) {
    return str.split('').reverse().join('') === str;
}//console.log(palindrome("assa"));

//4
function dayOfWeeks(day) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
    let index = arr.indexOf(day);
    return index > -1 ? index + 1: "error"
}//console.log(dayOfWeeks("Monday"));

//5
function calculator(a, b, symbol) {
    let add = function (a, b) { return a + b};
    let substract = function (a, b) { return a - b};
    let multiply = function (a, b) { return a * b};
    let devide = function (a, b) { return a / b};
    switch (symbol) {
        case '+': return add(a, b);
        case '-': return substract(a, b);
        case '*': return multiply(a, b);
        case '/': return devide(a, b);
    }
}//console.log(calculator(10,15,'+'));

//Arrow function
let a = (a, b) => {console.log(a * b)};
//a(1,5);

//6
function solution(arr) {
    aggregate(0, (a, b) => {return a + b});
    aggregate(0, (a, b) => {return a + 1 / b});
    aggregate('', (a, b) => {return a + b});
    function aggregate(initialValue, arrow) {
        for (let i = 0; i < arr.length; i++) {
            initialValue = arrow(initialValue, arr[i]);
        }
        console.log(initialValue);
    }
}//solution([1, 2, 3]);

//7
function wordsUppercase(str) {
    console.log(str.toUpperCase().split(/\W+/).filter(w => w !== '').join(' '));
}wordsUppercase('Hi, how are you');
