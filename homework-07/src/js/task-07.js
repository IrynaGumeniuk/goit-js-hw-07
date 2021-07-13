// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" />
//     <br />
//     <span id="text">Абракадабра!</span>

const inputEl = document.getElementById('font-size-control');
inputEl.getAttribute('min, 0');
inputEl.getAttribute('max, 100');


const textEl = document.getElementById('text');



inputEl.addEventListener('input', onRangeChange);

function onRangeChange(event) {
    console.log('Меня двигают');
}