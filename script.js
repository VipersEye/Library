// variables

let mainLibrary = [
    
    {
        id: 0,
        title: '1984',
        author: 'George Orwell',
        pages: 227,
        year: 1949,
        summary: 'Perhaps, 1984 is one of the most famous dystopian novels. The novel was first published in 1906. The main character, Winston Smith, lives in London and works in the Ministry of Truth. Smith is a citizen of the government where all people are under total surveillance and any free-thinking is punished. Winston does not share these ideas, but he carefully hides it, because anyone who is uncovered undergoes an unavoidable "healing" equivalent to mental death.',
        cover: './images/covers/1984 _ George Orwell.jpg',
        rating: 5,
        'user rating': null,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 1,
        title: 'A Storm of Swords',
        author: 'George R. R. Martin',
        pages: 1216,
        year: 2000,
        summary: 'Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken. Joffrey, of House Lannister, sits on the Iron Throne, the uneasy ruler of the land of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, the victim of the jealous sorceress who holds him in her evil thrall. But young Robb, of House Stark, still rules the North from the fortress of Riverrun. Robb plots against his despised Lannister enemies, even as they hold his sister hostage at King’s Landing, the seat of the Iron Throne. Meanwhile, making her way across a blood-drenched continent is the exiled queen, Daenerys, mistress of the only three dragons still left in the world...',
        cover: './images/covers/A Storm of Swords _ George R. R. Martin.jpg',
        rating: 5,
        'user rating': 4,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 2,
        title: 'All Quiet on the Western Front',
        author: 'Erich Maria Remarque',
        pages: 304,
        year: 1929,
        summary: 'This is the testament of Paul Bäumer, who enlists with his classmates in the German army during World War I. They become soldiers with youthful enthusiasm. But the world of duty, culture, and progress they had been taught breaks in pieces under the first bombardment in the trenches.',
        cover: './images/covers/All Quiet on the Western Front _ Erich Maria Remarque.jpg',
        rating: 4,
        'user rating': null,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 3,
        title: 'Faust',
        author: 'Johann Wolfgang von Goethe',
        pages: 488,
        year: 1808,
        summary: 'Goethe’s two-part dramatic work, Faust, based on a traditional theme, and finally completed in 1831, is an exploration of that restless intellectual and emotional urge which found its fullest expression in the European Romantic movement, to which Goethe was an early and major contributor. Part I of the work outlines a pact Faust makes with the devil, Mephistopheles, and encompasses the tragedy of Gretchen, whom Faust seduces. Part II, developed over a long period of Goethe’s later life, reflects Goethe’s own transition from a predominantly Romantic to a wider world-view and explores more extensive themes, including the values of the Classical past, as it moves towards the work’s resolution.',
        cover: './images/covers/Faust _ Johann Wolfgang von Goethe.jpg',
        rating: 3,
        'user rating': 4,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 4,
        title: 'For Whom the Bell Tolls',
        author: 'Ernest Hemingway',
        pages: 576,
        year: 1940,
        summary: 'Presented by Hemingway\'s grandson Seán Hemingway, with a personal foreword by the author’s son Patrick Hemingway, this new enhanced Library Edition of Ernest Hemingway\'s masterpiece about an American in the Spanish Civil War features early drafts and supplementary material, including three previously uncollected short stories on war by one of the greatest writers on the subject in history.',
        cover: './images/covers/For Whom the Bell Tolls _ Ernest Hemingway.jpg',
        rating: 5,
        'user rating': null,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 5,
        title: 'Moby-Dick',
        author: 'Herman Melville',
        pages: 504,
        year: 1851,
        summary: 'Narrated by the crew member Ishmael, this epic whaling adventure follows the crew of the Pequod, as its captain, Ahab, descends deeper and deeper into madness on his quest to find and kill the white whale that maimed him. Beyond the surface—of ship life, whaling, and the hunt for the elusive Moby Dick—are allegorical references to life, and even the universe, in this masterpiece by Herman Melville.',
        cover: './images/covers/Moby-Dick _ Herman Melville.jpg',
        rating: 5,
        'user rating': 2,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 6,
        title: 'Sword of Destiny',
        author: 'Andrzej Sapkowski',
        pages: 384,
        year: 1992,
        summary: 'Sword of Destiny (Polish: Miecz przeznaczenia) is the second book in Andrzej Sapkowski\'s The Witcher series in terms of story chronology, although the original Polish edition was published in 1992, before The Last Wish (but after the Wiedźmin short story collection made obsolete by The Last Wish). Some of the individual short stories were first published in the Fantastyka magazine.',
        cover: './images/covers/Sword of Destiny _ Andrzej Sapkowski.jpg',
        rating: 4,
        'user rating': null,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 7,
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        pages: 1276,
        year: 1944,
        summary: 'Thrown in prison for a crime he has not committed, Edmond Dantes is confined to the grim fortress of If. There he learns of a great hoard of treasure hidden on the Isle of Monte Cristo and he becomes determined not only to escape, but also to unearth the treasure and use it to plot the destruction of the three men responsible for his incarceration. Dumas’ epic tale of suffering and retribution, inspired by a real-life case of wrongful imprisonment, was a huge popular success when it was first serialized in the 1840s.',
        cover: './images/covers/The Count of Monte Cristo _ Alexandre Dumas.jpg',
        rating: 5,
        'user rating': null,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },

    {
        id: 8,
        title: 'The Two Towers',
        author: 'J.R.R. Tolkien',
        pages: 1209,
        year: 1954,
        summary: 'The second volume in J.R.R. Tolkien\'s epic adventure THE LORD OF THE RINGS One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go. “Among the greatest works of imaginative fiction of the twentieth century. The book presents us with the richest profusion of new lands and creatures, from the beauty of Lothlórien to the horror of Mordor.”',
        cover: './images/covers/The Two Towers _ J.R.R. Tolkien.jpg',
        rating: 4,
        'user rating': null,
        'in collection': false,
        bookmark: false,
        recommends: [],
    },
];
let currentUser = {
    id: 0,
    name: 'Nik',
    library: [],
};
let currentLibrary;

let blockNav = document.querySelectorAll('.nav__block');
let btnsHeader = document.querySelectorAll('.header__btn');
let inputAside = document.querySelector('.input_aside');
let searchInput = document.querySelector('.input_search');
let popupNewBook = document.querySelector('.popup');

// event listeners

blockNav.forEach(block => {
    block.addEventListener('click', toggleBtnNavStatus);
});

btnsHeader.forEach(btn => {
    btn.addEventListener('click', toggleBtnHeaderStatus);
});

document.addEventListener('keypress', (e)=>{
    if (
      e.key === 'Enter' 
      && inputAside === document.activeElement 
      && inputAside.value !== ''
    ) {
        let authorAvatar = document.querySelector('.aside__commenting .avatar_aside');
        let avatarSrc = authorAvatar.getAttribute('src');
        addComment(inputAside.value, avatarSrc);
        inputAside.value = '';
    }
});

searchInput.addEventListener('input', searchBooks);

popupNewBook.addEventListener('click', (e) => {
    if (e.target.closest('.popup__btn_close')) {
        closePopup();
    } else if (e.target.closest('.popup__btn_add')) {
        addBookToLibrary(e);
    }
} );

// calls
identifyCurrentLibrary();
displayBookCards();

// functions

function toggleBtnNavStatus(e) {
    let btnNavActive = this.querySelector('.active');
    if (e.target.closest('.nav__btn')) {
        if (e.target.closest('.nav__btn_add')) {
            showPopup();
        } else {
            btnNavActive.classList.remove('active');
            e.target.closest('.nav__btn').classList.add('active');
            identifyCurrentLibrary();
            displayBookCards();
        }
    }
}

function toggleBtnHeaderStatus(e) {
    let btnHeaderActive = document.querySelector('.header__btn.active');
    btnHeaderActive.classList.remove('active');
    e.target.classList.add('active');
    displayBookCards();
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

function calculateTransitionOrigin(e) {
    let bookImageContainer = e.currentTarget;
    let bookImage = bookImageContainer.querySelector('.books__img');
    let rect = bookImageContainer.getBoundingClientRect();
    let originX = e.clientX - rect.left;
    let originY = e.clientY - rect.top;
    bookImage.style.transformOrigin = `${originX}px ${originY}px`;
}

function displayBookCards() {

    let booksContainer = document.querySelector('.books');
    let cardTemplate = document.querySelector('#template_card');

    removeBookCards();

    let activeBtnFilter = document.querySelector('.header__btn.active');
    let filter = activeBtnFilter.classList.contains('header__btn_newest') ? 'year' : 'rating';

    sortBooks(filter);

    for (let book of currentLibrary) {
        let {id, title, author, cover, bookmark} = book;

        let bookCard = cardTemplate.content.cloneNode(true).querySelector('.books__card');
        let bookTitle = bookCard.querySelector('.books__name');
        let bookAuthor = bookCard.querySelector('.books__author');
        let bookCover = bookCard.querySelector('.books__img');

        bookCard.setAttribute('book_id', id);
        bookTitle.textContent = title;
        bookAuthor.textContent = author;
        bookCover.setAttribute('src', cover);

        if (book['in collection']) {
            let btnAdd = bookCard.querySelector('.books__button_add');
            toggleBtnAddStyles(btnAdd);
        }
        if (bookmark) {
            let btnBookmark = bookCard.querySelector('.books__button_bookmark');
            toggleBtnBookmarkStyles(btnBookmark);
        }

        bookCard.addEventListener('click', (e)=>{
            if (e.target.closest('.books__button_info')) {
                displayBookInfo(e.currentTarget);
            } else if (e.target.closest('.books__star')) {
                addUserRating(e);
            } else if (e.target.closest('.books__button_add')) {
                toggleBtnAddStyles(e.target);
                addBookToCollection(e);
            } else if (e.target.closest('.books__button_checked')) {
                toggleBtnAddStyles(e.target);
                removeBookFromCollection(e);
            } else if (e.target.closest('.books__button_bookmark')) {
                if (e.target.closest('.books__button').classList.contains('books__button_bookmark_active')) {
                    removeBookmark(e);
                } else {
                    addBookmark(e);
                }
                toggleBtnBookmarkStyles(e.target);
            } 
        });
        
        let bookImageContainer = bookCard.querySelector('.books__img-container');
        bookImageContainer.addEventListener('mousemove', calculateTransitionOrigin);

        booksContainer.appendChild(bookCard);
    }
}

function displayBookInfo(bookCard) {
    if (bookCard.querySelector('.books__info') === null) {
        let bookInfoTemplate = document.querySelector('#template_info');
        let bookInfo = bookInfoTemplate.content.cloneNode(true).querySelector('.books__info');
        let bookId = bookCard.getAttribute('book_id');
        let book = mainLibrary[bookId];
        let {summary, rating} = book;
        
        let bookInfoSummary = bookInfo.querySelector('.books__summary-text');
        bookInfoSummary.textContent = summary;

        let bookRatingStars = bookInfo.querySelectorAll('.icon_star');
        for (let i = 0; i < rating; i++) {
            bookRatingStars[i].classList.add('icon_star_rate');
        }
        if (book['user rating']) {
            for (let i = 0; i < book['user rating']; i++) {
                bookRatingStars[i].classList.add('icon_star_active');
            }
        }

        let starsContainer = bookInfo.querySelector('.books__rating');
        let btnsStars = starsContainer.querySelectorAll('.books__star');
        btnsStars.forEach(btn => {
            btn.addEventListener('mouseenter', hoverRatingStar);
        });

        starsContainer.addEventListener('mouseleave', displayUserRating);

        chooseInfoPosition(bookCard, bookInfo);        

        bookCard.appendChild(bookInfo);
    } else {
        chooseInfoPosition(bookCard, bookCard.querySelector('.books__info'));
    }
    let btnBookInfo = bookCard.querySelector('.books__button_info');    
    bookCard.classList.toggle('books__card_active');
    btnBookInfo.classList.toggle('books__button_info_active'); 
    bookCard.querySelector('.books__info').classList.toggle('books__info_active');
}

function chooseInfoPosition(bookCard, bookInfo) {
    let bookCardPosition = bookCard.offsetLeft;
    let bookInfoWidth = bookCard.offsetWidth;
    let containerWidth = bookCard.parentElement.offsetWidth;
    
    if (bookCardPosition + bookInfoWidth + 300 < containerWidth) {
        bookInfo.classList.add('books__info_right');
        bookInfo.classList.remove('books__info_left');
    } else {
        bookInfo.classList.add('books__info_left');
        bookInfo.classList.remove('books__info_right');
    }
}

function hoverRatingStar(e) {
    let starsContainer = e.target.parentElement;
    let stars = starsContainer.querySelectorAll('.icon_star');
    let rating = e.target.getAttribute('rating');

    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('icon_star_active');
    }

    for (let i = +rating; i < 5; i++) {
        stars[i].classList.remove('icon_star_active');
    }
}

function addUserRating(e) {
    let bookId = e.currentTarget.getAttribute('book_id');
    let book = mainLibrary[bookId];
    let newUserRating = e.target.closest('.books__star').getAttribute('rating');
    let currentUserRating = book['user rating'];

    if (currentUserRating === newUserRating) {
        book['user rating'] = null;
    } else {
        book['user rating'] = newUserRating;
    }
}

function displayUserRating(e) {
    let bookId = e.target.closest('.books__card').getAttribute('book_id');
    let book = mainLibrary[bookId];
    let currentUserRating = book['user rating'];
    let bookRatingStars = e.target.querySelectorAll('.icon_star');

    if (currentUserRating) {
        for (let i = 0; i < currentUserRating; i++) {
            bookRatingStars[i].classList.add('icon_star_active');
        }

        for (let i = 4; i > currentUserRating - 1; i--) {
            bookRatingStars[i].classList.remove('icon_star_active');
        }
    } else {
        for (let i = 0; i < 5; i++) {
            bookRatingStars[i].classList.remove('icon_star_active');
        }
    }
}

function sortBooks(filter) {
    currentLibrary.sort( (bookOne, bookTwo) => {
        if (bookOne[filter] > bookTwo[filter]) return -1;
        else if (bookOne[filter] < bookTwo[filter]) return 1;
        else if (bookOne[filter] === bookTwo[filter]) {
            return bookOne.title < bookTwo.title ? -1 : 1;
        }
    } );
}

function removeBookCards() {
    let booksContainer = document.querySelector('.books');
    let allBookCards = booksContainer.querySelectorAll('.books__card');

    for (let i = 0; i < allBookCards.length; i++) {
        booksContainer.removeChild(allBookCards[i]);
    }
}

function searchBooks(e) {
    let searchingValue = e.target.value.toLowerCase();
    identifyCurrentLibrary();
    currentLibrary = currentLibrary.filter( book => book.title.toLowerCase().includes(searchingValue) || book.author.toLowerCase().includes(searchingValue) );
    displayBookCards();
}

function toggleBtnAddStyles(target) {
    let btnAdd = target.closest('.books__button');
    let btnAddSvg = btnAdd.querySelector('.books__icon');
    let btnAddIcon = btnAddSvg.querySelector('use');
    if (btnAdd.classList.contains('books__button_add')) {
        btnAddIcon.setAttribute('xlink:href', '#checked');
    } else {
        btnAddIcon.setAttribute('xlink:href', '#plus');
    }
    btnAdd.classList.toggle('books__button_add');
    btnAdd.classList.toggle('books__button_checked');
    btnAddSvg.classList.toggle('books__icon_add');
    btnAddSvg.classList.toggle('books__icon_checked');
}

function addBookToCollection(e) {
    let bookId = e.target.closest('.books__card').getAttribute('book_id');
    let newBook = mainLibrary.find( book => book.id === +bookId );
    newBook['in collection'] = true;
    currentUser.library.push(newBook);
}

function removeBookFromCollection(e) {
    let bookId = e.target.closest('.books__card').getAttribute('book_id');
    let book = mainLibrary.find( book => book.id === +bookId );
    book['in collection'] = false;
    currentUser.library = currentUser.library.filter( book => book.id !== +bookId );
    identifyCurrentLibrary();
    displayBookCards();
}

function identifyCurrentLibrary() {
    let activeBtn = document.querySelector('.nav__btn_browse.active').getAttribute('id');
    switch (activeBtn) {
        case ('btn-collection'):
            currentLibrary = [...currentUser.library];
            break;
        case ('btn-bookstore'):
            currentLibrary = [...mainLibrary];
            break;
        case ('btn-reading'):
            currentLibrary = [];
            for (let book of mainLibrary) {
                if (book.bookmark) currentLibrary.push(book);
            }
            break;
    }
}

function toggleBtnBookmarkStyles(target) {
    let btnBookmark = target.closest('.books__button');
    btnBookmark.classList.toggle('books__button_bookmark_active');
}

function addBookmark(e) {
    let bookId = e.target.closest('.books__card').getAttribute('book_id');
    let book = mainLibrary.find( book => book.id === +bookId );
    book.bookmark = true;
}

function removeBookmark(e) {
    let bookId = e.target.closest('.books__card').getAttribute('book_id');
    let book = mainLibrary.find( book => book.id === +bookId );
    book.bookmark = false;
    identifyCurrentLibrary();
    displayBookCards();
}

function showPopup() {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_active');
}

function closePopup() {
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_active');
}

function addBookToLibrary(e) {
    let popupInputs = document.querySelectorAll('.popup__input, .popup__textarea');
    for (let input of popupInputs) {
        if (input.checkValidity() === false) {
            return;
        }
    }
    e.preventDefault();
    
    let title = document.querySelector('.popup__input[name="title"]').value;
    let author = document.querySelector('.popup__input[name="author"]').value;
    let pages = document.querySelector('.popup__input[name="pages"]').value;
    let year = document.querySelector('.popup__input[name="year"]').value;
    let file = document.querySelector('.popup__input[name="image"]').files[0];
    let summary = document.querySelector('.popup__textarea[name="summary"]').value;
    let cover = window.URL.createObjectURL(file);
    let newBook = new Book(title, author, pages, year, summary, cover);

    mainLibrary.push(newBook);

    identifyCurrentLibrary();
    displayBookCards();
    closePopup();
    popupInputs.forEach( input => input.value = '');
}

function Book(title, author, pages, year, summary, cover) {
    this.id = mainLibrary.length;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.summary = summary;
    this.cover = cover;
    this.rating = null;
    this['user rating'] = null;
    this['in collection'] = false;
    this.bookmark = false;
    this.recommends = [];
}