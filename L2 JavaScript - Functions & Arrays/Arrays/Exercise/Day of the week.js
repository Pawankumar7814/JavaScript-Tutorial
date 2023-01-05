var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function returnDay(a) {
    return (a < 1 || a > 7) ? "invalid input" : weekDay[a];
}

console.log(returnDay(9));