let data = [
    {
        name: '開運手鍊',
        img: 'imgs/product1.jpg',
        info: '手鍊可以幫助平衡能量場，帶來好運、愛情、財富、健康',
        price: '999',
        class: '手鍊'
    },
    {
        name: '愛情花園蠟燭',
        img: 'imgs/product2.jpg',
        info: '融合迷人的花香，散發愉悅的氛圍，有助於提升愛情運勢，營造浪漫氛圍。',
        price: '600',
        class: '香氛'
    },
    {
        name: '金錢魔法精油',
        img: 'imgs/product3.jpg',
        info: '精心混合的精油，注入豐富財富能量，可用於按摩、擴香，助您吸引金錢豐盛。。',
        price: '1280',
        class: '精油'
    },
    {
        name: '靈感之森項鍊',
        img: 'imgs/product7.jpg',
        info: '自然木材和水晶交織，帶來大自然的寧靜和能量。',
        price: '550',
        class: '項鍊'
    },
    {
        name: '夢幻彩晶戒指',
        img: 'imgs/product5.jpg',
        info: '夢幻彩晶戒指擁有多彩晶石，每種色彩都散發著特有的能量。戴上它，不僅美麗，更能激發身心靈的平衡和活力。',
        price: '980',
        class: '戒指'
    },
    {
        name: '玫瑰光芒水晶',
        img: 'imgs/product6.jpg',
        info: '美麗的玫瑰色水晶，散發愛的光芒，提升愛情和和諧感。',
        price: '1000',
        class: '水晶'
    },
    {
        name: '能量靈符卡組',
        img: 'imgs/product8.jpg',
        info: '這套靈符卡組是精心挑選的符號，代表正面的宇宙能量。這是一個強大的工具，支持您在生活中塑造正面的變革。',
        price: '777',
        class: '牌卡'
    },
    {
        name: '手工繞線項鍊',
        img: 'imgs/product4.jpg',
        info: '精心手工製作的繞線項鍊，每條都獨一無二，融入愛與巧思。不僅是飾物，更是獨特的藝術品。',
        price: '600',
        class: '手工製品'
    },
    {
        name: '天使之翼水晶',
        img: 'imgs/product9.jpg',
        info: '採用清澈水晶，散發天使之翼的能量，增進靈性連接，帶來心靈平靜。',
        price: '800',
        class: '水晶'
    },
    {
        name: '晶瑩幸運水晶',
        img: 'imgs/product10.jpg',
        info: '美麗晶瑩，被視為帶來幸運和好運的水晶。擁有積極能量，吸引豐盛和正面的變革。',
        price: '900',
        class: '水晶'
    },
    {
        name: '神秘夜空黑曜石',
        img: 'imgs/product11.jpg',
        info: '黑曜石象徵深度靈性，具有強大的能量，幫助淨化能場，保護免受負面影響。',
        price: '1200',
        class: '水晶'
    },
    {
        name: '夢幻光芒水晶',
        img: 'imgs/product12.jpg',
        info: '充滿夢幻色彩的水晶珠，散發柔和光芒，增添浪漫與寧靜氛圍。',
        price: '950',
        class: '水晶'
    },
    {
        name: '星辰織影手鍊',
        img: 'imgs/product13.jpg',
        info: '精心編織的星辰圖案，彰顯獨特品味，帶來幸運光芒。',
        price: '450',
        class: '手鍊'
    },
    {
        name: '藍寶石能量手鍊',
        img: 'imgs/product14.jpg',
        info: '藍寶石的平靜力量，助您保持冷靜，穩定情緒。',
        price: '650',
        class: '手鍊'
    },
    {
        name: '星夜銀河手鍊',
        img: 'imgs/product15.jpg',
        info: '綴有星夜元素，如銀河般璀璨。帶您遨遊宇宙，獲得啟示和平靜。',
        price: '580',
        class: '手鍊'
    },
    {
        name: '夢幻水晶花手鍊',
        img: 'imgs/product16.jpg',
        info: '如夢似幻的水晶花朵，象徵著愛與美，帶來愉悅心情。',
        price: '500',
        class: '手鍊'
    },
    {
        name: '繽紛幸運手鍊',
        img: 'imgs/product17.jpg',
        info: '多彩的手鍊，每色代表一種幸運，搭配您的每一天。',
        price: '650',
        class: '手鍊'
    },
    {
        name: '靜謐橄欖翡翠手鍊',
        img: 'imgs/product18.jpg',
        info: '橄欖翡翠散發寧靜之力，助您保持冷靜，促進內在平和。',
        price: '720',
        class: '手鍊'
    },
    {
        name: '璀璨星辰項鍊',
        img: 'imgs/product19.jpg',
        info: '以星辰元素為靈感，璀璨閃耀，象徵著希望和夢想。',
        price: '880',
        class: '項鍊'
    },
    {
        name: '自然之愛琥珀項鍊',
        img: 'imgs/product20.jpg',
        info: '真愛的象徵，以琥珀製成，散發自然之愛的溫暖。',
        price: '600',
        class: '項鍊'
    },
    {
        name: '幸運四葉草項鍊',
        img: 'imgs/product21.jpg',
        info: '四葉草是幸運的象徵，戴上它，獲得好運的庇佑。',
        price: '480',
        class: '項鍊'
    },
    {
        name: '秘境水晶球項鍊',
        img: 'imgs/product22.jpg',
        info: '水晶球中隱藏著神秘能量，引領您進入心靈的奇妙冒險。',
        price: '720',
        class: '項鍊'
    },
    {
        name: '迷人琉璃花頸鍊',
        img: 'imgs/product23.jpg',
        info: '精緻琉璃花朵，美麗迷人，象徵著花開富貴。',
        price: '550',
        class: '項鍊'
    },
    {
        name: '夢幻星光戒指',
        img: 'imgs/product24.jpg',
        info: '散發夢幻星光，如星辰閃耀，為您的手指增添華麗風采。',
        price: '780',
        class: '戒指'
    },
    {
        name: '愛意紅玫瑰戒指',
        img: 'imgs/product25.jpg',
        info: '紅玫瑰的象徵，代表濃濃的愛意，成為愛情的美麗象徵。',
        price: '520',
        class: '戒指'
    },
    {
        name: '靈感藍色寶石戒指',
        img: 'imgs/product26.jpg',
        info: '藍色寶石散發靈感之光，啟發您的創造力和思維。',
        price: '680',
        class: '戒指'
    },
    {
        name: '翡翠綠意戒指',
        img: 'imgs/product27.jpg',
        info: '綠色翡翠象徵著繁榮和幸運，戴上它，擁抱豐盛。',
        price: '620',
        class: '戒指'
    },
    {
        name: '光芒水晶花戒指',
        img: 'imgs/product28.jpg',
        info: '水晶花朵綻放光芒，如夢如幻，點綴手指間的華美。',
        price: '550',
        class: '戒指'
    },
    {
        name: '清新橙柚精油',
        img: 'imgs/product29.jpg',
        info: '橙柚的果香，令人振奮，提升活力和情緒。',
        price: '180',
        class: '精油'
    },
    {
        name: '寧靜夜晚精油',
        img: 'imgs/product30.jpg',
        info: '薰衣草和檜木混合，營造寧靜的夜晚氛圍，促進放鬆入眠。',
        price: '280',
        class: '精油'
    },
    {
        name: '舒適香薰油',
        img: 'imgs/product31.jpg',
        info: '薰衣草與薄荷的混合，創造出令人舒適涼爽的香氣，適合冥想。',
        price: '320',
        class: '精油'
    },
    {
        name: '玫瑰花園花香精油',
        img: 'imgs/product32.jpg',
        info: '純正玫瑰香氣，猶如置身花園，帶給您愉悅而柔和的感受。',
        price: '380',
        class: '精油'
    },
    {
        name: '柑橘果香橙皮精油',
        img: 'imgs/product33.jpg',
        info: '柑橘的果香，橙皮的清新，為您帶來陽光灑落的愉悅心情。',
        price: '240',
        class: '精油'
    },
    {
        name: '夜間舒眠精油',
        img: 'imgs/product34.jpg',
        info: '薰衣草香氣助您深度放鬆，提升夜間的舒適感，促進良好睡眠。',
        price: '380',
        class: '精油'
    },
    {
        name: '四葉草香氛蠟燭',
        img: 'imgs/product34.jpg',
        info: '以四葉草為靈感，散發清新幸運香氣，營造溫馨愉悅的氛圍。',
        price: '600',
        class: '香氛'
    },
    {
        name: '夢幻夜空星光蠟燭',
        img: 'imgs/product36.jpg',
        info: '夜空星光的浪漫，融入香氛蠟燭中，營造夢幻般的氛圍。',
        price: '700',
        class: '香氛'
    },
    {
        name: '清新橙花柑橘香氛燭',
        img: 'imgs/product37.jpg',
        info: '橙花與柑橘的香氣交織，帶來清新宜人的香氛，提升空間氛圍。',
        price: '600',
        class: '香氛'
    },
    {
        name: '寧靜夜晚薰衣草香氛燭',
        img: 'imgs/product38.jpg',
        info: '薰衣草的淡雅香氣，助您享受寧靜夜晚，放鬆身心。',
        price: '680',
        class: '香氛'
    },
    {
        name: '檀木玫瑰香氛蠟燭',
        img: 'imgs/product39.jpg',
        info: '檀木和玫瑰香氣相融，營造溫馨浪漫的氛圍，宛如在花園中漫步。',
        price: '800',
        class: '香氛'
    },
    {
        name: '塔羅智慧牌卡',
        img: 'imgs/product40.jpg',
        info: '啟發性的塔羅卡，提供深刻的洞察和引導，助您面對未來。',
        price: '900',
        class: '牌卡'
    },
    {
        name: '靈性啟示神秘牌卡',
        img: 'imgs/product41.jpg',
        info: '每張牌卡蘊含深奧的靈性啟示，為您的占卜體驗帶來神秘感和啟發。',
        price: '1200',
        class: '牌卡'
    },
    {
        name: '彩虹編織手鍊',
        img: 'imgs/product42.jpg',
        info: '由繽紛編織而成，彩虹色彩代表希望與喜悅，展現手工藝的獨特魅力。',
        price: '680',
        class: '手工製品'
    },
]

//渲染商品開始
const productsList = document.querySelector('.l-product-list');

// 每頁顯示的商品數量為20
const itemsPerPage = 20;

//抓取<、>、頁數按鈕&監聽
const pageNum = document.getElementsByClassName('num-btn');
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')


for (i = 0; i < pageNum.length; i++) {
    pageNum[i].addEventListener('click', checkPage, false);
}

prevBtn.addEventListener('click', goToPrevPage, false);
nextBtn.addEventListener('click', goToNextPage, false);


let page = 1;

function checkPage(e) {
    page = parseInt(e.target.innerText); // 將頁碼轉換為數字
    render(data, page); // 重新渲染商品列表
    updateButtonState();
}

function goToPrevPage() {
    if (page > 1) {
        page--;
        render(data, page);
        updateButtonState();
    }
}

function goToNextPage() {
    if (page < Math.ceil(data.length / itemsPerPage)) {
        page++;
        render(data, page);
        updateButtonState();
    }
}

function updateButtonState() {

    // 判斷是否在第一頁，是的話隱藏 prevBtn，否則顯示
    prevBtn.style.display = (page === 1 ? 'none' : 'inline');

    // 判斷是否在最後一頁，是的話隱藏 nextBtn，否則顯示
    nextBtn.style.display = (page === Math.ceil(data.length / itemsPerPage) ? 'none' : 'inline');

}

function render(data, page = 1) {
    // 計算起始索引和結束索引
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 截取要顯示的商品
    const slicedData = data.slice(startIndex, endIndex);

    //組字串
    let str = '';
    slicedData.forEach(function (products) {
        str += `<a href="#" class=" col-6 col-md-3 mb-20">
        <div class="l-card-product">
            <div class="l-card-pic"><img src="${products.img}" alt="${products.name}"></div>
            <div class="l-card-text">
                <h3 class="mb-8">${products.name}</h3>
                <p class="mb-8">${products.info}</p>
                <p>NT $${products.price}</p>
            </div>
            <i class="fa-regular fa-heart heart"></i>
                        <i class="fa-solid fa-cart-shopping add-cart"></i>
        </div>
    </a>`;
    })

    //塞入字串
    productsList.innerHTML = str;
}
render(data, page);
updateButtonState();

//渲染商品結束

//篩選商品開始
const selectProduct = document.getElementsByClassName('select-btn');

function updateList(e) {
    const val = e.target.innerText;
    let tempData = [];
    data.forEach(function (product) {
        if (product.class === val) tempData.push(product);
    });
    render(tempData);
}

for (i = 0; i < selectProduct.length; i++) {
    selectProduct[i].addEventListener('click', updateList, false);
}

//篩選商品結束