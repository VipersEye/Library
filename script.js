let blockNav = document.querySelectorAll('.nav__block');
let btnsHeader = document.querySelectorAll('.header__btn');
let inputAside = document.querySelector('.input_aside');

blockNav.forEach(block => {
    block.addEventListener('click', toggleBtnNavStatus);
});

btnsHeader.forEach(btn => {
    btn.addEventListener('click', toggleBtnHeaderStatus);
});

document.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter' && inputAside === document.activeElement && inputAside.value) {
        let authorAvatar = document.querySelector('.aside__commenting .aside__avatar');
        let avatarSrc = authorAvatar.getAttribute('src');
        addComment(inputAside.value, avatarSrc);
        inputAside.value = '';
    }
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

function addComment(text, imgSrc) {
    let template = document.querySelector('#template_comment');
    let newComment = template.content.cloneNode('true').querySelector('.aside__comment');
    
    let commentText = newComment.querySelector('.aside__comment-text');
    commentText.textContent = text;

    let commentAvatar = newComment.querySelector('.aside__avatar');
    commentAvatar.setAttribute('src', imgSrc);

    let lastCommentBlock = document.querySelector('.aside__comment-block:last-child');

    lastCommentBlock.appendChild(newComment);
}