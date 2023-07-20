hideLoading();

const slideContainer = document.querySelector('.carousel-container');
const slide = document.querySelector('.slides');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let slides = document.querySelectorAll('.slide');
let index = 1; 

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slide.append(firstClone)
slide.prepend(lastClone)

let slideWidth = slides[index].clientWidth; 
const slideContent = document.querySelectorAll('.slide-content');
const slideControl = document.querySelector('.slide-controls-real');
let slideMargin = window.getComputedStyle(slideContent[1]).marginRight;

    slideControl.style.right =  (parseInt(slideMargin.replace(/px/,""))-4.6)+"px";
    if(document.body.clientWidth < '1366'){
        slideControl.style.right =  (parseInt(slideMargin.replace(/px/,""))+16)+"px";
        console.log(slideMargin)
        console.log(slideControl.style.right =  (parseInt(slideMargin.replace(/px/,""))+16)+"px");
    }
    let timeout;
window.addEventListener("resize", () => {
    slides.forEach(slide => {
        slide.style.width = '100vw';
    })
    let slideMargin = window.getComputedStyle(slideContent[1]).marginRight;
    slideControl.style.right =  (parseInt(slideMargin.replace(/px/,""))-4.6)+"px";
    if(document.body.clientWidth < '1366'){
        slideControl.style.right =  (parseInt(slideMargin.replace(/px/,""))+16)+"px";

        console.log(slideControl.style.right =  (parseInt(slideMargin.replace(/px/,""))+16)+"px");
    }
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
        slideWidth = slides[index].clientWidth;
        slide.style.transform = `translateX(${-(document.body.clientWidth+4.6)*index}px)`;
    }, 200);

});

slide.style.transform = `translateX(${-slideWidth*index}px)`;

const getSlides = () => document.querySelectorAll('.slide')

slide.addEventListener('transitionend', () => {
    slides = getSlides()
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-(document.body.clientWidth+4.6)*index}px)`;
    }
    if(slides[index].id === lastClone.id){
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-(document.body.clientWidth+4.6)*index}px)`;
    }
});

const moveToNextSlide = ()=>{
    slides = getSlides()
    if(index >= slides.length -1) return;
    index++;
    slide.style.transform = `translateX(${-(document.body.clientWidth+4.6)*index}px)`;
    slide.style.transition = ` all 1.5s ease 0s`
}
const moveToPreviousSlide = ()=>{   
    slides = getSlides()
    if(index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-(document.body.clientWidth+4.6)*index}px)`;
    slide.style.transition = ` all 1.5s ease 0s`
}
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

const searchBtn = document.querySelector('.search-btn');
const searchClose = document.querySelector('.search-close');

const headerSearch = document.querySelector('.header-search');
const transparent = document.querySelector('.transparent-div');

searchBtn.addEventListener('click', () => {
    headerSearch.style.display = 'block';
    transparent.style.display = 'block'
});
searchClose.addEventListener('click', () => {
    headerSearch.style.display = 'none';
    transparent.style.display = 'none'
});



function hideLoading() {
    const loading = document.querySelector('.starting');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        loading.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1500)
}

