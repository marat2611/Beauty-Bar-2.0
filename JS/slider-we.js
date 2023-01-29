/*переменные и константы*/
let position =0;
const Slidertoshow = 4;
const Slidertoscroll = 1;
const container = document.querySelector(`.slider-container`);
const track = document.querySelector(`.slider-track`);
/*const item = document.querySelector(`.slider__item`);*/
const btnprev = document.querySelector(`.btn--prev`);
const btnnext = document.querySelector(`.btn--next`);
const items = document.querySelectorAll(`.slider__item`);
const itemscount = items.length;
const itemwith = container.clientWidth / Slidertoshow;
const moveposition = Slidertoscroll * itemwith;

items.forEach((item) => {
    item.style.minWidth = `${itemwith}px`; /*ширина элементов*/
})

btnnext.addEventListener(`click`, () => {
    const itemsleft = itemscount - (Math.abs(position) + Slidertoshow * itemwith) / itemwith;
    position -= itemsleft >= Slidertoscroll ? moveposition : itemsleft * itemwith;
    setposition();
    checkbtns();
})

btnprev.addEventListener(`click`, () => {
    const itemsleft = Math.abs(position) / itemwith;
    position += itemsleft >= Slidertoscroll ? moveposition : itemsleft * itemwith;
    setposition();
    checkbtns();
})

const setposition = () => {
    track.style.transform = `translatex(${position}px)`
};

const checkbtns = () => {
    btnprev.disabled = position === 0;
    btnnext.disabled = position <= - (itemscount - Slidertoshow) * itemwith
};