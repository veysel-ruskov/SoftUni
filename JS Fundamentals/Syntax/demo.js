'use strict'
//1
function sumNumbers(a, b, c) {

    console.log(a + b + c);
} //sumNumbers(2, 3, 4)

//2
function calcSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.2);
    console.log("Total = " + sum * 1.2);
} //calcSum([1, 2, 3, 4, 5, 6.5])

//3
function countLetters(string, letter) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === letter) {
            count++;
        }
    }
    return count;
} //console.log(countLetters("Peshooo", 'o'));

//4
function createPerson() {
    let person = {
        name:"Pesho",
        age:20,
        gender:"male"
    }
    console.log(person.name);
    person.address = "Sofia";
    console.log(person.address)
}
//createPerson();

//5
function objectTest(minAge, nameA, ageA, nameB, ageB) {
    let personA = {
        name:nameA,
        age:ageA
    }    
    let personB = {
        name:nameB,
        age:ageB
    }

    if(personA.age >= minAge) {
        console.log(personA);
    }
    if(personB.age >= minAge) {
        console.log(personB);
    }
}
//objectTest(15, "Pesho", 16, "PeshoB", 13)

//6
function filter(n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result
} //console.log(filter(15))

//7
function figureArea(w, h, W, H) {
    let [s1, s2, s3] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)]
    return s1 + s2 - s3
} //console.log(figureArea(1, 2, 3, 4))

//8
function calcNextDay(year, month, day) {
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();
} //console.log(calcNextDay(2016, 9 , 30));

//9
function distanceBetweenPoints(x1, y1, x2, y2) {
    let pointA = {x:x1, y:y1};
    let pointB = {x:x2, y:y2}

    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);
    return Math.sqrt(distanceX + distanceY);
} console.log(distanceBetweenPoints(2, 4, 5, 0));