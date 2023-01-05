var student = {
    "Name": "Pawan",
    "Lname": "Kumar"
};

// Way 1 to print property
// for (let index in student) {
//     console.log(index, student[index]);
// }

// Way 2
var keys = Object.keys(student);
console.log(keys);

// Way 3
var keys1 = Object.getOwnPropertyNames(student);
console.log(keys1);