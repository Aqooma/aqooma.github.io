let position = 0;
//Сколько будет показывать элеменов
const slidesToShow = 5;
//Сколько будет скролить
const slidesToScroll = 1;
const container = document.querySelector(".slider-container");
// лист с айтемами
const track = document.querySelector(".slider-track");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
//Количество элементов
const items = document.querySelectorAll(".slider-item");
const itemsCount = items.length;
//Получаем ширину каждого элемента
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

for(let i = 0; i < itemsCount; i++) {
    const cloneItem = items[i].cloneNode(true);
    cloneItem.classList.add('cloneNode')
    track.appendChild(cloneItem);
}
items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
})
btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    console.log(itemsLeft);
    
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth; ;
    setPosition()
   /*  checkButtons() */
});
btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition()
    /* checkButtons() */
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}
