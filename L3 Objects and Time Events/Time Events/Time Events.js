// function function_name() {
//     console.log("HEllo");
// }

// setTimeout(function_name, 4000); // Time will be in mili seconds.

// function function_name() {
//     console.log("HEllo");
// }

// setInterval(function_name, 1000); // Time will be in mili seconds.

var sec = 1;

function function_name() {
    console.log("HEllo", sec);
    sec++;
    if (sec == 6) {
        // To stop the execution
        clearInterval(id);
    }
};

var id = setInterval(function_name, 1000); // Time will be in mili seconds.