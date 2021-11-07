//1
function calcFirstAndLast(arr) {
    return Number(arr[0]) + Number(arr[arr.length - 1]);
} //console.log(calcFirstAndLast([1, 2, 3 ,4]));

//2
function evenPositions(arr) {
    let result = [];
    for (let i in arr) {
        if (i % 2 == 0) {
           result.push(arr[i]);
        }
    }
    return result;

}//console.log(evenPositions([1, 2, 3, 4, 5, 6, 7, 8]));

//3
function negativePositive(arr) {
    let result = [];
    for (num of arr){
        if(num < 0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}//negativePositive([1, 2, 3, 4, 5, -7, 6, -4]);

//4
function firstAndLastK(arr) {
    let n = Number(arr.shift());
    console.log(arr.slice(0, n));
    console.log(arr.slice(arr.length - n));
}//firstAndLastK([3, 4, 5, 6, 7, 8]);

//5
function sortNK(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        result[i] = result.slice(Math.max(0,result.length - k)).reduce((a, b) => {return a + b}, );
    }
    console.log(result);
} //sortNK(9, 5); 

//6
function processOddNumbers(arr) {
    console.log(arr.filter((e,i) => i % 2 !== 0)
    .map(e => e * 2).reverse()
    );
}//processOddNumbers([1, 2, 3, 4, 5, 6]);

//7
function smallestTwo(arr) {
    console.log(
        arr.sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ')
    );
} //smallestTwo([100, 200, 454, 3, 555]);

//8
function matrixMaxNum(matrix) {
    let max = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] > max) {
                max = matrix[row][col];
            }
        }

    }
    console.log(max);
} //matrixMaxNum([[100,200], [1, 1000]]);

//9
function matrixMaxNum(matrix) {
    let normalDiagonal = 0;
    let backDiagonal = 0;
    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {
            if(row === col) {
                normalDiagonal += matrix[row][col];
                backDiagonal += matrix[row][matrix.length - 1 - row];
            }
        }
    }
    console.log(normalDiagonal);
    console.log(backDiagonal);
} 
let m = [
    [1, 2, 3, 4, 5, ,6, 7],
    [1, 5, 3, 4, 5, ,6, 7],
    [1, 2, 3, 4, 5, ,6, 7],
    [1, 2, 3, 4, 5, ,6, 7],
    [1, 2, 3, 4, 5, ,6, 7]
];
//matrixMaxNum(m);

//10
function equalNeighbors(matrix) {
    let counter = 0;
    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {
            if(row + 1 < matrix.length) {
                if(matrix[row][col] === matrix[row + 1][col]) {
                    counter++;
                }
            }
            if(col + 1 < matrix.length) {
                if(matrix[row][col] === matrix[row][col +1]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
} equalNeighbors(m);