//pc切換圖片
const itemList = document.querySelector('.detail-pics-small-list');

function itemPicChange() {
    let index = 0;
    //down鍵事件
    document.getElementById('down-btn').onclick = function () {
        if (index < 5) {
            index++;
        }
        itemList.style.top = - index * 15 + '%';
    }
    //up鍵事件
    document.getElementById('up-btn').onclick = function () {
        if (index > 0) {
            index--;
        }
        itemList.style.top = -index * 15 + '%';
    }
}
//pc切換圖片

//phone切換圖片
const picList = document.querySelector('.item-pics-list-phone');
function phonePicChange() {
    let startX;

    picList.addEventListener('touchstart', function (event) {
        startX = event.touches[0].clientX;
    });

    // 計算滑動距離和方向
    let deltaX;

    picList.addEventListener('touchmove', function (event) {
        deltaX = event.touches[0].clientX - startX;
        event.preventDefault(); // 阻止默認行為
    });

    let curIndex = 0;

    // 處理滑動結束後的操作
    picList.addEventListener('touchend', function (event) {
        // 根據滑動距離和方向判斷要執行的操作
        if (Math.abs(deltaX) > 1) { // 設定一個閾值，例如20像素，確保水平滑動足夠長
            if (deltaX < 0 && curIndex < 9) {
                // 向右滑動
                curIndex++;
                picList.style.left = - curIndex * 75 + '%';
            } else if (deltaX > 0 && curIndex > 0) {
                // 向左滑動
                curIndex--;
                picList.style.left = - curIndex * 75 + '%';
            }
        }
    });
}
//phone切換圖片

// 數量按鈕
const minus = document.getElementById('minus-btn');
const add = document.getElementById('add-btn');
const itemNum = document.getElementById('num-area');
function changeNum() {
    minus.onclick = function () {
        let qty = parseInt(itemNum.value);
        if (qty > 1) {
            itemNum.value = qty - 1;
        }
    }
    add.onclick = function () {
        let qty = parseInt(itemNum.value);
        if (qty < 10) {
            itemNum.value = qty + 1;
        }
    }
}
// 數量按鈕

//小圖換大圖
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
    itemPicChange();
    phonePicChange();
    changeNum();
}

window.addEventListener("load", init, false);

//小圖換大圖