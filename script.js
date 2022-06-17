let blockNav = document.querySelectorAll('.nav__block');
let btnsHeader = document.querySelectorAll('.header__btn');

blockNav.forEach(block => {
    block.addEventListener('click', toggleBtnNavStatus);
});

btnsHeader.forEach(btn => {
    btn.addEventListener('click', toggleBtnHeaderStatus);
});

function toggleBtnNavStatus(e) {
    let btnNavActive = this.querySelector('.active');
    if (e.target.classList.contains('nav__btn')) {
        btnNavActive.classList.remove('active');
        e.target.classList.add('active');
    }
}

function toggleBtnHeaderStatus(e) {
    let btnHeaderActive = document.querySelector('.header__btn.active');
    btnHeaderActive.classList.remove('active');
    e.target.classList.add('active');
}