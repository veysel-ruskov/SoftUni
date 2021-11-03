//1
function solve(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i+1];
        let z = input[i+2];
        
        if(insideVolume(x, y, z)) {
            console.log('inside');
        }else {
            console.log('outside');
        }
    }
    
    function insideVolume(x, y, z) {
        let x1 = 10; let x2 = 50;
        let y1 = 20; let y2 = 80;
        let z1 = 15; let z2 = 50;
    
        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    return true;
                }
            }
        }
        return false;
    }
}//solve([8, 20, 22, 13.1, 50, 31.5]);

function roadRadar(input) {
    let speed = input[0];    
    let area = input[1];
    let limit = getLimit(area);
    let infraction = getInfraction(speed, limit);
    if (infraction) {
        console.log(infraction);
    }

    //zone
    function getLimit(area){
        switch (area) {
            case 'motorway': 
                return 130;
            case 'interstate': 
                return 90;      
            case 'city': 
                return 50;
            case 'residential': 
                return 20;
        }
    }
    //infraction
    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if(overSpeed <= 0) {
            return false;
        }else {
            if (overSpeed <= 20) {
                return 'speeding';
            }
            if (overSpeed <= 40) {
                return 'excessive speeding';
            }
            if (overSpeed > 40) {
                return 'reckless driving';
            }
        }
    }
}//roadRadar([131, 'motorway']);

//3
function templateFormat(input) {
    let str = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n\t<question>\n';
for (let i = 0; i < input.length; i += 2) {
    let question = input[i];
    let answer = input [i+1];
    str += `\t\t${question}\n\t</question>\n\t<answer>\n\t\t${answer}\n\t</answer>\n`
}

    str += '</quiz>';
    return str;
}//console.log(templateFormat(['question', 'answer','Dry ice is a frozen form of which gas?', 'Carbon Dioxide']));

//4
function cookingByNumbers(input) {
    let num = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let func = input[i];
        activities(func);

    }
    function activities(func) {

        if (func == 'dice') {
            num = Math.sqrt(num);
        }
        if (func == 'chop') {
            num /= 2;
        }
        if (func == 'spice') {
            ++num;
        }
        if (func == 'bake') {
            num *= 3;
        }
        if (func == 'fillet') {
            num *= 0.8;
        }
        console.log(num);
    }
}
let input = [32, 'chop', 'chop', 'chop', 'chop', 'chop'];
//cookingByNumbers(input);

//5
function modifyAverage(input) {
    let number = String(input[0]);
    let sum = 0;
    while (true) {
        for (let i = 0; i < number.length; i++) {
            let element = Number(number[i]);
            sum += element;
        }
        if(sum / number.length > 5){
            console.log(number);
            break;
        }else{
            number += 9;
            sum = 0;
        }
    }
}//modifyAverage([101]);

//6
function validityChecker(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let distanceTo01 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    if (distanceTo01 === parseInt(distanceTo01)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let distanceTo02 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    if (distanceTo02 === parseInt(distanceTo02)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let distanceBetweenPoints = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (distanceBetweenPoints === parseInt(distanceBetweenPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}//validityChecker([3, 0, 0, 4]);

//7
function shapeCrystals(arr) {
    let targetSize = arr[0];

    let cut = num => num / 4;
    let lap = num => num * 0.8;
    let grind = num => num - 20;
    let etch = num => num - 2;
    let transportAndWashing = num => {
        console.log(`Transporting and washing`);
        return Math.floor(num);
    }
    let xray = num => {
        console.log(`X-ray x1`);
       return ++num;
    };

    for (let i = 0; i < arr.length; i++) {
        let microns = arr[i];
        microns = executeOperation(targetSize, microns, 'Cut', cut);
        microns = executeOperation(targetSize, microns, 'Lap', lap);
        microns = executeOperation(targetSize, microns, 'Grind', grind);
        microns = executeOperation(targetSize, microns, 'Etch', etch);

        if(microns + 1 == targetSize) {
            microns = xray(microns);
        }
        console.log(`Finished crystal ${microns} microns`);
    }
    function executeOperation(targetSize, size, operationName, operation) {
        let counter = 0;
        size = operation(size);
        while (operation(size) >= targetSize || targetSize - operation(size) === 1) {
            size = operation(size);
            counter++;
        } 
        if(counter > 0) {
            console.log(`${operationName} x${counter}`);
            size = transportAndWashing(size);
        }
        return size;
    }
}
let crystal = [1375, 50000];
shapeCrystals(crystal);