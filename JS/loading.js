$(document).ready(function () {
    $('.headerpage').load('header.html');
    $('.footerpage').load('footer.html', insrc);
});

function insrc() {
    $.getScript('JS/layout.js');
}