const cardContainer = document.querySelector('.card-carousel-scroll');
const card = document.querySelector('.cards');
const cardNext = document.querySelector('.card-next');
const cardPrev = document.querySelector('.card-prev');

let cards = document.querySelectorAll('.card');
let cardIndex = 1; 

const firstCardClone = cards[0].cloneNode(true);
const secondCardClone = cards[1].cloneNode(true);
const secondCardClone2 = cards[1].cloneNode(true);

const thirdCardClone = cards[2].cloneNode(true);
const thirdCardClone2 = cards[2].cloneNode(true);

const fourthCardClone = cards[3].cloneNode(true);
const fourthCardClone2 = cards[3].cloneNode(true);

const fifthCardClone = cards[4].cloneNode(true);
const fifthCardClone2 = cards[4].cloneNode(true);

const sixthCardClone = cards[5].cloneNode(true);

firstCardClone.id = 'first-card-clone'
secondCardClone.id = 'second-card-clone'
secondCardClone2.id = 'second-card-clone2'

thirdCardClone.id = 'third-card-clone'
thirdCardClone2.id = 'third-card-clone2'


fourthCardClone.id = 'fourth-card-clone'
fourthCardClone2.id = 'fourth-card-clone2'

fifthCardClone.id = 'fifth-card-clone'
fifthCardClone2.id = 'fifth-card-clone2'

sixthCardClone.id = 'sixth-card-clone'

card.append(firstCardClone)
card.append(secondCardClone2)
card.append(thirdCardClone2)
card.append(fourthCardClone2)
card.append(fifthCardClone2)

card.prepend(sixthCardClone)
card.prepend(fifthCardClone)
card.prepend(fourthCardClone)
card.prepend(thirdCardClone)
card.prepend(secondCardClone)




let cardWidth = cards[cardIndex].clientWidth;

card.style.transform = `translateX(${-cardWidth*5}px)`;
const getCards = () => document.querySelectorAll('.card')

card.addEventListener('transitionend', () => {
    cards = getCards()
    if(cards[cardIndex+4].id === firstCardClone.id){
        card.style.transition = 'none';
        cardIndex = 1;
        card.style.transform = `translateX(${-cardWidth*5}px)`;

    }
    if(cards[cardIndex+4].id === secondCardClone.id){
        card.style.transition = 'none';
        cardIndex = 2;
        card.style.transform = `translateX(${-cardWidth*6}px)`;
    }
});

const moveToNextCard = ()=>{
    cards = getCards()
    if(cardIndex >= 7) return;
    cardIndex++;
    card.style.transform = `translateX(${-cardWidth*(cardIndex+4)}px)`;
    card.style.transition = ` all 1.5s ease 0s`;
}

const moveToPreviousCard = ()=>{   
    cards = getCards()
    if(cardIndex <= -4) return;
    cardIndex--;
    card.style.transform = `translateX(${-cardWidth*(cardIndex+4)}px)`;
    card.style.transition = ` all 1.5s ease 0s`;
}

cardNext.addEventListener('click', moveToNextCard);
cardPrev.addEventListener('click', moveToPreviousCard);

