// function multiply(a, b) {
//     return a * b;
// };

// console.log(multiply);

// function a() {
//     console.log("f a");
// }

// function b() {
//     console.log("f b");
// }

// a(), b();

function sqSum(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}

console.log(sqSum(2, 3));