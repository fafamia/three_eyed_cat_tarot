$(document).ready(function () {
    setTimeout(function () {
        $(".loading").fadeOut(300);
    }, 2000);
    $('.headerpage').load('header.html');
    $('.footerpage').load('footer.html', insrc);
});

function insrc() {
    $.getScript('JS/layout.js');
}