// var arr = [1, 2];

// function duplicateArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr.push(arr[i]);
//     }
//     return arr;
// }

// arr = duplicateArray(arr);
// console.log(arr);

let x = [1, 2, 3]
let y = []

function duplicatesArr() {
    y = [...x, ...x]
    return y
}
duplicatesArr()
console.log(y)

//