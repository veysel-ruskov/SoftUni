//1
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}//console.log(multiply(2,3));

//2
function boxAndBottels(n, k) {
    console.log(Math.ceil(n / k));
}//boxAndBottels(5, 7);

//3
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes");
        return;
    } console.log("no")
}//leapYear(2019);

//4
function circleArea(r) {
    let area = Math.PI * r * r;
    console.log(area);
    console.log(area.toFixed(2));
}//circleArea(5);

//5
function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    return Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
}//console.log(triangleArea(2, 3.5, 4));

//6
function cone(radius, height) {
    let l = Math.sqrt(radius * radius + height * height);
    let volume = + Math.PI * radius * radius * height / 3;
    console.log("volume = " + volume);
    let area = Math.PI * radius * (radius + l);
    console.log("area = " + area);
}//cone(3, 5);

//7
function oddEven(num) {
    if (num % 2 === 0) {
        console.log("even");
    } else if (Math.abs(num) % 2 === 1) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
}//oddEven(-10);

//8
function fruitOrVegetable(str) {

    switch (str) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "garlic":
        case "smth":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}//fruitOrVegetable("banana");

//7
function colorfulNumbers(num) {
    let result = "<ul>\n";
    for (let i = 1; i <= num; i++) {
        let color = i % 2 === 0 ? "blue" : "green";
        result += `  <li><span style="color:${color}">${i}</span></li>\n`;
    }
    result += "</ul>";
    return result;
}//console.log(colorfulNumbers(10));

//8
function chessboard(n) {
    let result = "<div class=\"chessboard\">\n";
    for (let i = 0; i < n; i++) {
        result += "  <div>\n";
        for (let j = 0; j < n; j++) {
            let color = (i + j) % 2 === 0 ? "black" : "white";
            result += `    <span class="${color}"></span>\n`;
        }
        result += "</div>\n";
    }
    return result;
}//console.log(chessboard(5));

//9
function log(arr) {
    for (let key in arr) {
        console.log(Math.log2(arr[key]))
    }
}//log([1,2,3,4,5]);

//10
function isPrime(num) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }

    }
    return prime && (num > 1);
}console.log(isPrime(81));