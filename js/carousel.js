// Carousel Simple
const carouselSimple = document.querySelector('.carouselSimple');
const itemsContainerSimple = carouselSimple.querySelector('.itemsContainer');

const scrollLeftSimple = document.querySelector('.scrollLeftSimple');
const scrollRightSimple = document.querySelector('.scrollRightSimple');

scrollRightSimple.addEventListener('click', carouselScrollRightSimple);
scrollLeftSimple.addEventListener('click', carouselScrollLeftSimple);

function carouselScrollLeftSimple() {
    scrollRightSimple.removeEventListener('click', carouselScrollRightSimple);
    scrollLeftSimple.removeEventListener('click', carouselScrollLeftSimple);
    itemsContainerSimple.scrollLeft -= 160;

    setTimeout(() => {
        scrollRightSimple.addEventListener('click', carouselScrollRightSimple);
        scrollLeftSimple.addEventListener('click', carouselScrollLeftSimple);
    }, 300);
}

function carouselScrollRightSimple() {
    scrollRightSimple.removeEventListener('click', carouselScrollRightSimple);
    scrollLeftSimple.removeEventListener('click', carouselScrollLeftSimple);
    itemsContainerSimple.scrollLeft += 160;

    setTimeout(() => {
        scrollRightSimple.addEventListener('click', carouselScrollRightSimple);
        scrollLeftSimple.addEventListener('click', carouselScrollLeftSimple);
    }, 300);
}

// Carousel Description
const carouselDescription = document.querySelector('.carouselWithDescription');
const itemsContainerDescription = carouselDescription.querySelector('.itemsContainer');

const scrollLeftDescription = document.querySelector('.scrollLeftDescription');
const scrollRightDescription = document.querySelector('.scrollRightDescription');

scrollRightDescription.addEventListener('click', carouselScrollRightDescription);
scrollLeftDescription.addEventListener('click', carouselScrollLeftDescription);

function carouselScrollLeftDescription() {
    scrollRightDescription.removeEventListener('click', carouselScrollRightDescription);
    scrollLeftDescription.removeEventListener('click', carouselScrollLeftDescription);
    itemsContainerDescription.scrollLeft -= 427;

    setTimeout(() => {
        scrollRightDescription.addEventListener('click', carouselScrollRightDescription);
        scrollLeftDescription.addEventListener('click', carouselScrollLeftDescription);
    }, 400);
}

function carouselScrollRightDescription() {
    scrollRightDescription.removeEventListener('click', carouselScrollRightDescription);
    scrollLeftDescription.removeEventListener('click', carouselScrollLeftDescription);
    itemsContainerDescription.scrollLeft += 427;

    setTimeout(() => {
        scrollRightDescription.addEventListener('click', carouselScrollRightDescription);
        scrollLeftDescription.addEventListener('click', carouselScrollLeftDescription);
    }, 400);
}


