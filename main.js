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

increase.addEventListener('mouseover', () => {
    increase.style.backgroundColor = '#fff';
    increase.style.color = '#3498DB';
});
increase.addEventListener('mouseout', () => {
    increase.style.backgroundColor = '#3498DB';
    increase.style.color = '#fff';
});
decrease.addEventListener('mouseover', () => {
    decrease.style.backgroundColor = '#fff';
    decrease.style.color = '#3498DB';
});
decrease.addEventListener('mouseout', () => {
    decrease.style.backgroundColor = '#3498DB';
    decrease.style.color = '#fff';
});