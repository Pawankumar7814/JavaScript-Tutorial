/*
    Create a student object with three properties: name, age, and roll number
    Create an object address with two properties, City and state and add this object property to the student object.
    Now delete the roll no property and print the object before and after deleting the property.
*/

var student = {
    "Name": "Pawan",
    "Age": 22,
    "Roll no": 33,
    address: {
        "City": "New Delhi",
        "State": "Delhi"
    }
};

for (let i in student) {
    console.log(student[i]);
}
console.log();
delete student.Age;

for (let i in student) {
    console.log(student[i]);
}