const tempForm = document.querySelector('#tempForm');

// grabbing buttons
const increase = document.getElementById("+");
const decrease = document.getElementById("-");

// grabbing the number element
const count = document.getElementById("count");
const inputNumber = document.getElementById("inputNumber");

// adding event listeners to the buttons
increase.addEventListener("click", function () {
    //number++;
    const number = parseInt(inputNumber.value) + 1;
    count.innerHTML = number;
});

decrease.addEventListener("click", function () {
    //number--;
    const number = parseInt(inputNumber.value) - 1;
    count.innerHTML = number;
});

