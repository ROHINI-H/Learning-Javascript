// print the array of arrays with each element and its squares
let arr = [1, 2, 3, 4];

// [1,2,3,4] => [ [ 1, 1 ], [ 2, 4 ], [ 3, 9 ], [ 4, 16 ] ]
console.log(arr.map((num) => [num, num * num], []));

//-------------------------------------------------------------------------------------------------

// print the array of objects where each object contains the array element and its length.
let fruits = ['apple', 'banana', 'Cherry'];

/* ['apple','banana','Cherry'] => [
                                    {fruitName: apple, len: 5},
                                    {fruitName: banana, len: 6},
                                    {fruitName: Cherry, len: 6}] */
console.log(fruits.map(ele => ({ fruitName: ele, len: ele.length }), {}));

//-------------------------------------------------------------------------------------------------

// Get the array of number and return the function. The function will return the square of the number
// [1,2,3,4] => [f1,f2,f3,f4] Each function will return the squares of the corresponding array elements
// If you call f1, it return square of 1 = 1
// If you call f2, it return square of 2 = 4
// If you call f3, it return square of 3 = 9
// If you call f4, it return square of 4 = 16
function transform(arr) {
    return arr.map(num => () => num * num);
}

let output = transform(arr);

// to call all the function in the output array
const result = output.map(f => f());
console.log(result);

//--------------------------------------------------------------------------------------------------------------------------

// input array will have array of 2 or more elements. The output array should return product of each child array.
// [ [1,2], [3,4], [5,6] ] => [2,12,30]
// [ [1,2,3], [4,5,6], [7,8] ] => [ 6, 120, 56 ]
let initialArr1 = [[1, 2], [3, 4], [5, 6]];
let initialArr2 = [[1, 2, 3], [4, 5, 6], [7, 8]];

function product(arr) {
    return arr.map(array => array.reduce((acc, curr) => acc * curr, 1));
}
console.log(product(initialArr1));
console.log(product(initialArr2));

//--------------------------------------------------------------------------------------------------------------------------



