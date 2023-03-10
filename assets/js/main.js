const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box1.addEventListener('click', function () {
    box2.style.display = "block";
    box1.style.display = "none";
    box3.style.display = "none";
});

box2.addEventListener('click', function () {
    box3.style.display = "block";
    box1.style.display = "none";
    box2.style.display = "none";
});

box3.addEventListener('click', function () {
    box3.style.display = "none";
    box1.style.display = "block";
    box2.style.display = "none";
});