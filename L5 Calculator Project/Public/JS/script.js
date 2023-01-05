var buttons = document.getElementsByClassName("button");
var display = document.getElementsById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        if (value == '+') {
            operator = '+';
            operand1 = parseFloat(display.textContent);

        } else if (value == '=') {
            operand2 = parseFloat(display.textContent);

        } else {
            display.innerText += value;
        }
    });
}

// var val1 = 4;
// var val2 = 4;
// var operator = '*';

// var result = (val1 + " " + operator + " " + val2);
// console.log(result);