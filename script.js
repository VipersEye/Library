let blockNav = document.querySelectorAll('.nav__block');

blockNav.forEach(block => {
    block.addEventListener('click', toggleBtnNavStatus);
});

function toggleBtnNavStatus(e) {
    let btnNavActive = this.querySelector('.active');
    if (e.target.classList.contains('nav__btn')) {
        btnNavActive.classList.remove('active');
        e.target.classList.add('active');
    }
}