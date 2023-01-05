// Way 1 to rotate
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// function rotateLeft(arr) {
//     let a = arr.splice(0, 1);
//     arr.splice(arr.length, 0, a);
// }

// rotateLeft(arr);
// console.log(arr);

// Way 2 to rotate
// var arr = [1, 2, 3, 4];
// console.log(arr);

// function rotate(a) {
//     let ar = arr.shift();
//     arr.push(ar);
// }

// rotate(arr);
// console.log(arr);

// Way 3 to rotate
var arr = [1, 2, 3];

function rotateLeft(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    newArr.push(arr[0]);

    return newArr;
}

arr = rotateLeft(arr);
console.log(arr);