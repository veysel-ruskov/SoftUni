//1
function printName(name) {
    console.log(`Hello, ${name}`);
}//printName("Pesho");

//2
function gradToDegrees(grad) {
    grad = grad % 400;
    let degree = grad * 0.9;
    let degreeOutput = degree > 0 ? degree : 360 + degree;
    return degreeOutput;
}//console.log(gradToDegrees(-50));

//3
function compoundInterest(data) {
    let sum = data[0];
    let interestRate = data[1] / 100;
    let frequency = 12 / data[2];
    let years = data[3];

    let f = sum * Math.pow(1 + interestRate / frequency, frequency * years);
    
    console.log(f.toFixed(2));
}//compoundInterest(['1500', '4.3', '3', '6']);

//4
function lastMounthDays(date) {
    let day = date[0];
    let mount = date[1];
    let year = date[2];

    let newDate = new Date(year, mount - 1, 0);
    let daysCount = newDate.getDate();

    return daysCount;
}//console.log(lastMounthDays([17, 12 , 2002]));

//5
function distanceIn3D(points) {
    let x1 = points[0];
    let y1 = points[1];
    let z1 = points[2];
    let x2 = points[3];
    let y2 = points[4];
    let z2 = points[5];

    let distance = Math.pow(x1 - x2, 2) + Math.pow(y1- y2, 2) + Math.pow(z1 - z2, 2);
    return Math.sqrt(distance);
}//console.log(distanceIn3D([1, 1, 0, 5, 4, 0]));

//6
function binaryToDecimal([binaryNum]) {
    return binaryNum.split('').reverse().reduce(
        function (x, y, i) {
            return (y === '1') ? x + Math.pow(2, i) : x;
        }
);
}//console.log(binaryToDecimal(["00001001"]));

//7
function round([number, precision]) {
    if (precision > 15) {
        precision = 15;
    }
    let multiplier = Math.pow(10, precision);
    return Math.round(number * multiplier) / multiplier;
}//console.log(round(['3.1415921111111111111', '5']));

//8
function multiplicationTable(n) {
    let output = `<table borde='1'>\n`;
    output += `<tr>\n`
    output += `<th>"x"</th>\n`
    for (let i = 1; i <= n; i++) {
        output += `<th>${i}</th>\n`
    }
    for (let i = 1; i <= n; i++) {
        output += `<tr>\n`
        output += `<th>${i}</th>\n`
        
        for (let j = 1; j <= n; j++) {
            output += `<td>${j * i}</td>\n`
        }
        output += `</tr>\n`
    }
    output += "</table>\n";
    return output;
}console.log(multiplicationTable(5));