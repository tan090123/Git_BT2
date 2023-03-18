function handleColorChange() {
    var boxList = document.getElementsByClassName('box');
    var tmp = boxList[2].style.backgroundColor;
    boxList[2].style.backgroundColor = boxList[0].style.backgroundColor;
    boxList[0].style.backgroundColor = boxList[1].style.backgroundColor;
    boxList[1].style.backgroundColor = tmp;
}