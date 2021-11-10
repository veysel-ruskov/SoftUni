//1
function printArray(arr) {
    let delimeter = arr[arr.length - 1];
    arr.pop();

    let result = "";

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result += arr[i];
        }else{
            result += delimeter + arr[i];
        }
    }
    console.log(result);

} 
//arr =["One", "Two", "Three", "Four", "Five", "-"];
//printArray(arr);

//2
function printNthElement(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        if(input[i] !== 2) {
            if(i % 2 != 1) {
                result += input[i] + '\n';
            }
        }else {
            return result;
        }    
    }
    return result;

} //console.log(printNthElement([5, 20, 31, 4, 20, 2]));

//3
function addRemoveEl(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'add'){
            arr.push(i+1);
        }
        if(input[i] === 'remove'){
            arr.pop();
        }
    }
    if(!arr.length){
        console.log('Empty');
    }else {
        for (const el in arr) {
            console.log(arr[el]);
        }
    }
}//addRemoveEl(['add', 'add', 'remove', 'add', 'add']);

//4
function rotateArray(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
    
}
//let arr = ['Banana', 'Orange', 'Coconut', 'Apple', 15];
//rotateArray(arr);

//5
function extractIncreasingSub(arr) {
    let biggestNum = Number(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= biggestNum){
            console.log(arr[i]);
            biggestNum = arr[i];
        }
    }
} //extractIncreasingSub([1,3,8, 4, 10, 12, 3, 2, 24]);

//6
function sortArrBy2Criteria(input) {
    let result = input.sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .join('\n');
    return result;
} console.log(sortArrBy2Criteria(['alpha', 'beta', 'gamma']));