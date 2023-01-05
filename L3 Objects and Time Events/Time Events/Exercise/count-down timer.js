var n = 5;

function countdown() {
    if (n == 0) {
        console.log("Time's up");
        clearInterval(id);
        return;
    }
    console.log(n);
    n--;
};

var id = setInterval(countdown, 1000);