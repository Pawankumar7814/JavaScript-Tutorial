var fact = function factorial(n) {
    var ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * i;
    }
    return ans;
};

function ncr(n, r, fact) {
    return fact(n) / (fact(r) * fact(n - r));
}

console.log(ncr(5, 2, fact));