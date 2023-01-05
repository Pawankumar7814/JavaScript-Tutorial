var btncolor = document.getElementById("color");

var btnshape = document.getElementById("shape");

var boxshape = document.getElementById("inner");
var boxcolor = document.getElementById("app");
var shapes = ["circle", "rectangle", "triangle"];
var colors = ["red", "blue", "orange"];

function changeshape() {
    var num = Math.floor(Math.random() * 3);
    var randomshapes = shapes[num];
    var oldshape = boxshape.classList[0];
    while (randomshapes === oldshape) {
        num = Math.floor(Math.random() * 3);
        randomshapes = shapes[num];
    }

    boxshape.classList.remove(oldshape);
    boxshape.classList.add(randomshapes);
}
btnshape.addEventListener("click", changeshape);

function changecolor() {
    var num2 = Math.floor(Math.random() * 3);
    var randomcolor = colors[num2];
    var oldcolor = boxcolor.classList[0];
    while (randomcolor === oldcolor) {
        num2 = Math.floor(Math.random() * 3);
        randomcolor = colors[num2];
    }

    boxcolor.classList.remove(oldcolor);
    boxcolor.classList.add(randomcolor);
}
btncolor.addEventListener("click", changecolor);