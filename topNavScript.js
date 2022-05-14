//hamburger menu & slide out nav

const burgerElement = document.querySelector('.hamburgerMenu');
const topNavUl = document.querySelector('.topNavFlex');
console.log(topNavUl);
const topNavLi = document.querySelectorAll('.topNavli a');
console.log(topNavLi);

burgerElement.addEventListener('focus', function (e) {
    console.log(burgerElement);
    topNavUl.classList.toggle('revealMenu');
})

burgerElement.addEventListener('click', function (e) {
    topNavUl.classList.toggle('revealMenu');
})

topNavLi.forEach( (item) => {
    item.onfocus = function() {
        item.classList.toggle('highlight');
    }
    item.onblur = function () {
        item.classList.toggle('highlight');
    }
})