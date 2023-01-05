var count = 0;
var box = document.getElementById('box');
var clickCount = document.getElementById('clickCount');
box.addEventListener('click', function increment() {
    count++;
    clickCount.innerText = count + " ";
})