// function timer() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function() {
//             //Write your code here...
//             console.log(i);
//         }, 1000);
//     }
//     console.log("Hello ninjas!");
// }
// timer();

// let obj1 = { firstName: 'James' };
// let obj2 = {...obj1 };
// obj2.firstName = 'John';
// console.log(obj1);

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var myArr = array.filter(v => v % 3 === 0);
// console.log(myArr);

// var abc = setInterval(counting, 300);
// var count = 0;

// function counting() {
//     console.log(count++);
//     if (count == 5) {
//         clearInterval(abc);
//     }
// }

let list = [4, 5, 6];
for (let i in list) {
    console.log(i);
}

for (let i of list) {
    console.log(i);
}