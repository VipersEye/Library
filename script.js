let blockNav = document.querySelectorAll('.nav__block');
let btnsHeader = document.querySelectorAll('.header__btn');
let inputAside = document.querySelector('.input_aside');
let bookCards = document.querySelectorAll('.books__card');

// event listeners

blockNav.forEach(block => {
    block.addEventListener('click', toggleBtnNavStatus);
});

btnsHeader.forEach(btn => {
    btn.addEventListener('click', toggleBtnHeaderStatus);
});

document.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter' && inputAside === document.activeElement && inputAside.value) {
        let authorAvatar = document.querySelector('.aside__commenting .avatar_aside');
        let avatarSrc = authorAvatar.getAttribute('src');
        addComment(inputAside.value, avatarSrc);
        inputAside.value = '';
    }
});

bookCards.forEach(card => {
    card.addEventListener('click', (e)=>{
        let targetClassList = e.target.classList;
        if (
            targetClassList.contains('books__button_info') || 
            targetClassList.contains('books__icon_info') ||
            e.target.parentElement.classList.contains('books__icon_info')) {
                displayBookInfo(e.currentTarget);
        }
    });
});

// functions

function toggleBtnNavStatus(e) {
    let btnNavActive = this.querySelector('.active');
    if (e.target.classList.contains('nav__btn')) {
        btnNavActive.classList.remove('active');
        e.target.classList.add('active');
    } else if (e.target.parentElement.classList.contains('nav__btn')) {
        btnNavActive.classList.remove('active');
        e.target.parentElement.classList.add('active');
    }
}

function toggleBtnHeaderStatus(e) {
    let btnHeaderActive = document.querySelector('.header__btn.active');
    btnHeaderActive.classList.remove('active');
    e.target.classList.add('active');
}

function addComment(text, imgSrc) {
    let template = document.querySelector('#template_comment');
    let newComment = template.content.cloneNode('true').querySelector('.aside__comment');
    
    let commentText = newComment.querySelector('.aside__comment-text');
    commentText.textContent = text;

    let commentAvatar = newComment.querySelector('.avatar_aside');
    commentAvatar.setAttribute('src', imgSrc);

    let lastCommentBlock = document.querySelector('.aside__comment-block:last-child');

    lastCommentBlock.appendChild(newComment);
}

function displayBookInfo(bookCard) {
    let bookInfo = bookCard.querySelector('.books__info');
    let btnBookInfo = bookCard.querySelector('.books__button_info');

    bookCard.classList.toggle('books__card_active');
    btnBookInfo.classList.toggle('books__button_info_active'); 
    bookInfo.classList.toggle('books__info_active');
}