const questionList = document.getElementsByClassName('question-item');

function openAnswer(e) {
    let clickQ = e.target.closest('.question-item');
    let ans = clickQ.querySelector('.answer-text');

    if (ans.style.display === 'none') {
        ans.style.display = 'block';
        clickQ.querySelector('i').style.transform = 'rotate(180deg)';
    } else {
        ans.style.display = 'none';
        clickQ.querySelector('i').style.transform = 'rotate(0deg)';
    }
}


function init() {
    for (let i = 0; i < questionList.length; i++) {
        questionList[i].addEventListener('click', openAnswer);
    }
}

window.addEventListener("load", init, false);