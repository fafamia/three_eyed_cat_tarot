const imgList = document.getElementsByClassName('detail-img-s');
const largeImg = document.getElementById('detail-img-l');

function showLarge(e) {
    let clickImg = e.target;
    largeImg.src = clickImg.src;
}

function init() {
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].addEventListener('click', showLarge);
    }
}

window.addEventListener("load", init, false);