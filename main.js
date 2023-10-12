const tempForm = document.querySelector('#tempForm');


// grabbing buttons
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

// grabbing the number element
const upperNumber = document.getElementById("upperNumber");

const inputNumber = document.getElementById("inputNumber");

// setting the initial number

// adding event listeners to the buttons
increase.addEventListener("click", function () {
    //number++;
    const number = parseInt(inputNumber.value) + 1;

    upperNumber.innerHTML = number;
});

decrease.addEventListener("click", function () {
    //number--;
    const number = parseInt(inputNumber.value) - 1;
    upperNumber.innerHTML = number;
});

