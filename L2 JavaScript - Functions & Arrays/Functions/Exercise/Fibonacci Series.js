// To print the fibonacci series till N number
// var n = 10;

// var a = 0;
// var b = 1;
// for (let index = 0; index < n; index++) {
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }

// To check that given number is present in the fibonacci series or not?

function fibonacci(n) {
    var a = 0;
    var b = 1;
    var c;
    while (a < n) {
        c = a + b;
        a = b;
        b = c;
    }
    console.log(a === n);
}

fibonacci(5);