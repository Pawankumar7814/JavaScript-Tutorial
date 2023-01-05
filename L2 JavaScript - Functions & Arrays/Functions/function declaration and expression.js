// Function Expression
var fact = function factorial(n) {
    var ans = 1;
    for (let index = 1; index <= n; index++) {
        ans = ans * index;
    }
    return ans;
}

console.log(fact(5));

// Function Declaration
function print(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
    }
}
print(5);