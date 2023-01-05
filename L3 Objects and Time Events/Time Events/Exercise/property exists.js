var obj = {
    "a": {
        "b": "dadsa"
    }
};

var obj = {
    "a": "1",
    "b": ""
}

function propertyExists(obj, path) {
    for (let i in obj) {
        if (path == i) {
            console.log(obj.i);
            return;
        }
    }
    return "false";
};

console.log(propertyExists(obj, "ab"));