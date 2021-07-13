// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

{/* <div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
</div> */}
const counterRef = document.querySelector('#value');
const decrementRef = document.querySelector('[data-action = "decrement"]');
const incrementRef = document.querySelector('[data-action = "increment"]');

const counterValue = counterRef.textContent;
const decrementValue = decrementRef.textContent;
const incrementValue = incrementRef.textContent;

decrementRef.addEventListener('click', onBtnDecrementClick);
incrementRef.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick(event) {
    console.log(event.currentTarget.value);
};

function onBtnIncrementClick(event) {
    console.log(event.currentTarget.value);
};

console.log(counterValue);
console.log(decrementValue);
console.log(incrementValue);
