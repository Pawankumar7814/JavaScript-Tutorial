// Array as object

var arr = [20, 30, 40, 50, 60];
// console.log(arr["0"]);  // It will convert the string to int and process the execution
// console.log(arr[0]);


var obj = {
    "0": 10,
    "1": 20,
    "2": 30,
    "3": 40
}

// console.log(obj);
// console.log(obj.length); // Undefined
// console.log(arr.length); // 5

obj.prop1 = "demo";
// console.log(obj);

arr.prop1 = "demo";
// console.log(arr.length);
// console.log(arr);

// Iterating over the array using "for in". This concept we have used to print the object 's properties.

for (let i in arr) {
    console.log(arr[i]);
}
for (let i in obj) {
    console.log(obj[i]);
}