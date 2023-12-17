let tarotData = [

    { name: '愚人正位', src: 'imgs/tarot/tarot_0.png', aspectRatio: 319 / 568 }
    ,
    { name: '愚人逆位', src: 'imgs/tarot/tarot_0_down.png', aspectRatio: 319 / 568 }
    ,
    { name: '魔法師正位', src: 'imgs/tarot/tarot_01.png', aspectRatio: 319 / 568 }
    ,
    { name: '魔法師逆位', src: 'imgs/tarot/tarot_01_down.png', aspectRatio: 319 / 568 }
    ,
    { name: '女祭司正位', src: 'imgs/tarot/tarot_02.png', aspectRatio: 319 / 568 }
    ,
    { name: '女祭司逆位', src: 'imgs/tarot/tarot_02_down.png', aspectRatio: 319 / 568 }
    ,
    { name: '女皇正位', src: 'imgs/tarot/tarot_03.png', aspectRatio: 319 / 568 }
    ,
    { name: '女皇逆位', src: 'imgs/tarot/tarot_03_down.png', aspectRatio: 319 / 568 }
    ,
    { name: '皇帝正位', src: 'imgs/tarot/tarot_04.png', aspectRatio: 319 / 568 }
    ,
    { name: '皇帝逆位', src: 'imgs/tarot/tarot_04_down.png', aspectRatio: 319 / 568 }
    ,
    { name: '教皇正位', src: 'imgs/tarot/tarot_05.png' }
    ,
    { name: '教皇逆位', src: 'imgs/tarot/tarot_05_down.png' }
    ,
    { name: '戀人正位', src: 'imgs/tarot/tarot_06.png' }
    ,
    { name: '戀人逆位', src: 'imgs/tarot/tarot_06_down.png' }
    ,
    { name: '戰車正位', src: 'imgs/tarot/tarot_07.png' }
    ,
    { name: '戰車逆位', src: 'imgs/tarot/tarot_07_down.png' }
    ,
    { name: '力量正位', src: 'imgs/tarot/tarot_08.png' }
    ,
    { name: '力量逆位', src: 'imgs/tarot/tarot_08_down.png' }
    ,
    { name: '隱士正位', src: 'imgs/tarot/tarot_09.png' }
    ,
    { name: '隱士逆位', src: 'imgs/tarot/tarot_09_down.png' }
    ,
    { name: '命運之輪正位', src: 'imgs/tarot/tarot_10.png' }
    ,
    { name: '命運之輪逆位', src: 'imgs/tarot/tarot_10_down.png' }
    ,
    { name: '正義正位', src: 'imgs/tarot/tarot_11.png' }
    ,
    { name: '正義逆位', src: 'imgs/tarot/tarot_11_down.png' }
    ,
    { name: '吊人正位', src: 'imgs/tarot/tarot_12.png' }
    ,
    { name: '吊人逆位', src: 'imgs/tarot/tarot_12_down.png' }
    ,
    { name: '死神正位', src: 'imgs/tarot/tarot_13.png' }
    ,
    { name: '死神逆位', src: 'imgs/tarot/tarot_13_down.png' }
    ,
    { name: '節制正位', src: 'imgs/tarot/tarot_14.png' }
    ,
    { name: '節制逆位', src: 'imgs/tarot/tarot_14_down.png' }
    ,
    { name: '惡魔正位', src: 'imgs/tarot/tarot_15.png' }
    ,
    { name: '惡魔逆位', src: 'imgs/tarot/tarot_15_down.png' }
    ,
    { name: '高塔正位', src: 'imgs/tarot/tarot_16.png' }
    ,
    { name: '高塔逆位', src: 'imgs/tarot/tarot_16_down.png' }
    ,
    { name: '星星正位', src: 'imgs/tarot/tarot_17.png' }
    ,
    { name: '星星逆位', src: 'imgs/tarot/tarot_17_down.png' }
    ,
    { name: '月亮正位', src: 'imgs/tarot/tarot_18.png' }
    ,
    { name: '月亮逆位', src: 'imgs/tarot/tarot_18_down.png' }
    ,
    { name: '太陽正位', src: 'imgs/tarot/tarot_19.png' }
    ,
    { name: '太陽逆位', src: 'imgs/tarot/tarot_19_down.png' }
    ,
    { name: '審判正位', src: 'imgs/tarot/tarot_20.png' }
    ,
    { name: '審判逆位', src: 'imgs/tarot/tarot_20_down.png' }
    ,
    { name: '世界正位', src: 'imgs/tarot/tarot_21.png' }
    ,
    { name: '世界逆位', src: 'imgs/tarot/tarot_21_down.png' }
];

const tarotCards = document.querySelectorAll('.tarot-card-s');

tarotCards.forEach(function (card) {
    card.addEventListener('click', toggleSelection);
});

// 記錄已選擇的圖片
let pickCards = [];

// 點擊事件處理程序
function toggleSelection(event) {
    let clickedCard = event.currentTarget;

    // 如果已經選擇的數量達到三張，則不再允許選擇
    if (pickCards.length === 3) {
        return;
    }

    // 切換選擇狀態
    if (pickCards.includes(clickedCard)) {
        // 已經選擇的情況下，取消選擇
        pickCards = pickCards.filter(card => card !== clickedCard);
        clickedCard.classList.remove('selected');
    } else {
        // 沒有選擇的情況下，添加選擇
        pickCards.push(clickedCard);
        clickedCard.classList.add('selected');

        // 選擇時移動該圖片上移
        clickedCard.style.transform = 'translateY(-20px)';
    }
}


const pickCard = document.getElementById('pickCard');
const ans1 = document.getElementById('ans-area1');
const ans2 = document.getElementById('ans-area2');
const ans3 = document.getElementById('ans-area3');
const cardText1 = document.getElementById('cardText1');
const cardText2 = document.getElementById('cardText2');
const cardText3 = document.getElementById('cardText3');
const closeCard = document.getElementById('close-card');


//隨機抓數字功能
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var num = Math.floor(Math.random() * ((max - min) + 1)) + min;
    return num;
}

let pickCardEnabled = true; // 初始狀態允許點擊

function selectCards() {
    if (pickCardEnabled) {
        let selectedCards = [];

        pickCards.forEach(card => {
            card.style.transform = 'translateY(0)';
            card.classList.remove('selected');
        });

        // 抽三張牌
        while (selectedCards.length < 3) {
            let cardNum = rand(0, tarotData.length - 1);

            // 使用 indexOf 確認是否有重複
            if (selectedCards.indexOf(cardNum) === -1) {
                selectedCards.push(cardNum);
            }
        }
        ans1.src = tarotData[selectedCards[0]].src;
        ans2.src = tarotData[selectedCards[1]].src;
        ans3.src = tarotData[selectedCards[2]].src;
        cardText1.innerText = tarotData[selectedCards[0]].name;
        cardText2.innerText = tarotData[selectedCards[1]].name;
        cardText3.innerText = tarotData[selectedCards[2]].name;

        // 添加 flipped 類別，觸發翻轉效果
        const turnCards = document.querySelectorAll('.turn-card');
        turnCards.forEach(turnCard => {
            turnCard.classList.add('flipped');
        });

        pickCardEnabled = false; // 禁用 pickCard 按鈕
    }
}

pickCard.addEventListener('click', selectCards, false);

closeCard.addEventListener('click', function () {
    // 移除 flipped 類別，觸發翻轉回去效果
    const turnCards = document.querySelectorAll('.turn-card');
    turnCards.forEach(turnCard => {
        turnCard.classList.remove('flipped');
    });
    //把小卡片的陣列清空
    pickCards = [];

    cardText1.innerText = '';
    cardText2.innerText = '';
    cardText3.innerText = '';

    pickCardEnabled = true; // 啟用 pickCard 按鈕
});
