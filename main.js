const eggseriesCards = document.querySelector('.eggseries_cards');

let isDragging = false, startX, startScrollLeft;

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