// var arr = [60, 70, 20, 10, 40, 90];

// const test = function(x) {
//     return x > 5;
// }

// if (!arr.every(test)) {
//     console.log("statement 1");
// } else {
//     console.log("statement 2");
// }

// var words = ['one', 'two', 'three', 'four'];

// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'two') {
//         words.shift();
//     }
// });

// function a() {
//     function b() {
//         return 3;
//     }

//     return b();

//     function b() {
//         return 8;
//     }
// }

// console.log(a());

function fun(...input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum;
}
console.log(fun(1, 2, 3, 4, 5));