const acc = document.querySelectorAll('.faq-accordion');

for(let i=0; i < acc.length; i++){
    acc[i].addEventListener('click', () => {
        let answer = acc[i].querySelector('.accordion-answer');
        let plusSign = acc[i].querySelector('.plus-circle');

        if (answer.style.visibility === 'visible'){
            console.log(answer)
            answer.style.opacity = '0';
            answer.style.visibility = 'hidden';
            answer.style.maxHeight = '0';
            plusSign.style.transform = 'rotate(0)'
        }else {
            answer.style.opacity = '1';
            answer.style.visibility = 'visible';
            answer.style.maxHeight = '3000px';
            plusSign.style.transform = 'rotate(45deg)'
        }
    });
}