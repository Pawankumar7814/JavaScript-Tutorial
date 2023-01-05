function outer() {
    var name = "Outer";

    function inner() {
        var name = "inner";
        console.log(name);
    }
    inner();
    console.log(name);
}

outer();