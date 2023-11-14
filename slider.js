const eggseriesCards = document.querySelector('.eggseries_cards');
const arrowBtns = document.querySelectorAll('#arrow_left, #arrow_right');
const firstCardWidth = eggseriesCards.querySelector('.prd_card').offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => { 
    btn.addEventListener('click', () => {
        eggseriesCards.scrollLeft += btn.id === 'arrow_left' ? -firstCardWidth : firstCardWidth;
    });
});


const dragStart = (e) => {
    isDragging = true;
    eggseriesCards.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = eggseriesCards.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    eggseriesCards.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    eggseriesCards.classList.remove('dragging');
}

eggseriesCards.addEventListener('mousedown', dragStart);
eggseriesCards.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);