let num = 0;
const tempForm = document.querySelector('#tempForm');

// grabbing buttons
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

// grabbing the number element
const count = document.getElementById("count");
const inputNumber = document.getElementById("inputNumber");

// adding event listeners to the buttons
// increase.addEventListener("click", function () {
//     //number++;
//     const number = parseInt(inputNumber.value) + 1;
//     count.innerHTML = number;
// });

// decrease.addEventListener("click", function () {
//     //number--;
//     const number = parseInt(inputNumber.value) - 1;
//     count.innerHTML = number;
// });

increase.addEventListener('click', () => {
    const newValue = parseInt(inputNumber.value, 10) || 0;
    num += newValue;
    updateCount();
});
decrease.addEventListener('click', () => {
    const newValue = parseInt(inputNumber.value, 10) || 0;
    num -= newValue;
    updateCount();
});


function updateCount() {
    count.textContent = num;
    if (num < 0) {
        count.classList.add('negative');
    } else {
        count.classList.remove('negative');
    }
}