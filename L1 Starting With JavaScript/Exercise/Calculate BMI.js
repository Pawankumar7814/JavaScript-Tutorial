var height = 1.60;
var weight = 58;

var BMI = weight / (height * height);

console.log("Your Body mass is " + BMI);
if (BMI < 18.5) {
    console.log("You are underweight");
} else if (BMI >= 18.6 && BMI <= 24.9) {
    console.log("You are healthy");
} else if (BMI >= 25 && BMI <= 25.9) {
    console.log("You are Overweight");
} else if (BMI >= 30) {
    console.log("You are Obese");
} else {
    console.log("Invalid Input");
}