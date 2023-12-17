
//header 漢堡選單 開始
const hamburger = document.getElementById('hamburger');
const menuList = document.querySelector('.menu-list-list');
function toggleMenu() {
    //判斷目前display為何
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
}

function closeMenu(e) {
    //判斷class 是否有'menu-list-list' 若有就執行關閉
    if (e.target.classList.contains('menu-list-list')) {
        menuList.style.display = 'none';
    }
}
menuList.addEventListener('click', closeMenu, false);
hamburger.addEventListener('click', toggleMenu, false);
//header 漢堡選單 結束

//隨機數字工具
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * ((max - min) + 1)) + min;
    return num;
}
//登入燈箱 開始

//隨機驗證碼
let num = document.getElementById('num');
let again = document.getElementById('again');

function randNum() {
    let str = '';
    for (i = 0; i < 4; i++) {
        let number = rand(0, 9);
        str += number;
    }
    num.innerText = str;
}
again.onclick = randNum;
//隨機驗證碼
const logIn = document.getElementById('log-in');
const closeBtn = document.getElementById('close-ntn');
const loginModal = document.getElementById('log-in-modal');

function openLoginModal() {
    if (loginModal.style.display == 'none') {
        loginModal.style.display = 'block';
        randNum();
    }
}
function closeLoginModal() {
    if (loginModal.style.display == 'block') {
        loginModal.style.display = 'none';
    }
}

logIn.addEventListener('click', openLoginModal, false);
closeBtn.addEventListener('click', closeLoginModal, false);

//密碼顯示
let passwordInput = document.getElementById('loginPassword');
let eyeIcon = document.querySelector('.eye i');


function togglePasswordView() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
}
eyeIcon.addEventListener('click', togglePasswordView, false);
//密碼顯示

//資料驗證
const subminBtn = document.getElementById('submit-login');
const loginEmail = document.getElementById('loginEmail');
const loginNum = document.getElementById('loginNum');
function checkLoginInfo(e) {
    if (loginEmail.value == '') {
        alert('請填寫會員信箱');
        e.preventDefault();
        return;
    }
    if (passwordInput.value == '') {
        alert('請填寫密碼');
        e.preventDefault();
        return;
    }

    if (loginNum.value != num.innerText) {
        alert('驗證碼錯誤');
        e.preventDefault();
        return;
    } else {
        alert('驗證碼正確');
        return;
    }
}
subminBtn.addEventListener('click', checkLoginInfo, false);
//資料驗證
//登入燈箱 結束

//註冊燈箱 開始

//隨機驗證碼
let signupNum = document.getElementById('signup-num');
let signupAgain = document.getElementById('signup-again');

function randSignupNum() {
    let str = '';
    for (i = 0; i < 4; i++) {
        let number = rand(0, 9);
        str += number;
    }
    signupNum.innerText = str;
}
signupAgain.onclick = randSignupNum;
//隨機驗證碼

const sigeUp = document.getElementById('sign-up');
const close = document.getElementById('close-modal');
const signupModal = document.getElementById('sign-up-modal');
function openSignupModal() {
    if (signupModal.style.display == 'none') {
        signupModal.style.display = 'block';
        randSignupNum();
    }
}
function closeSignupModal() {
    if (signupModal.style.display == 'block') {
        signupModal.style.display = 'none';
    }
}

sigeUp.addEventListener('click', openSignupModal, false);
close.addEventListener('click', closeSignupModal, false);

//密碼顯示
let signupPasswordInput1 = document.getElementById('s-password1');
let signupPasswordInput2 = document.getElementById('s-password2');
let signupEyeIcon1 = document.getElementById('signup-eye1');
let signupEyeIcon2 = document.getElementById('signup-eye2');


function toggleSignupPasswordView() {
    if (signupPasswordInput1.type === 'password') {
        signupPasswordInput1.type = 'text';
        signupEyeIcon1.classList.remove('fa-eye-slash');
        signupEyeIcon1.classList.add('fa-eye');
    } else {
        signupPasswordInput1.type = 'password';
        signupEyeIcon1.classList.remove('fa-eye');
        signupEyeIcon1.classList.add('fa-eye-slash');
    }
}
function toggleSignupPasswordView2() {
    if (signupPasswordInput2.type === 'password') {
        signupPasswordInput2.type = 'text';
        signupEyeIcon2.classList.remove('fa-eye-slash');
        signupEyeIcon2.classList.add('fa-eye');
    } else {
        signupPasswordInput2.type = 'password';
        signupEyeIcon2.classList.remove('fa-eye');
        signupEyeIcon2.classList.add('fa-eye-slash');
    }
}
signupEyeIcon1.addEventListener('click', toggleSignupPasswordView, false);
signupEyeIcon2.addEventListener('click', toggleSignupPasswordView2, false);
//密碼顯示

//註冊燈箱 結束

// footer 選單開合 
const footerOpen = document.querySelectorAll('.footer-open');
function openFooterMenu(e) {
    // 使用 this 取得觸發事件的元素
    const clickBtn = this;

    // 找到下一個兄弟元素是 nav
    const nextNav = clickBtn.nextElementSibling;

    // 切換 nav 的顯示和隱藏
    if (nextNav.style.display === 'block') {
        nextNav.style.display = 'none';
        clickBtn.querySelector('i').style.transform = 'rotate(0deg)';
    } else {
        nextNav.style.display = 'block';
        clickBtn.querySelector('i').style.transform = 'rotate(180deg)';
    }
}
footerOpen.forEach(function (element) {
    element.addEventListener('click', openFooterMenu, false);
})
// footer 選單開合 結束

