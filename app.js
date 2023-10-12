const tempForm = document.querySelector('#tempForm');
const tInput = document.querySelector('#tInput');
const fRadio = document.querySelector('#fahrenheit');
const cRadio = document.querySelector('#celsius');
const resultWindow = document.querySelector('#result');
const clearBtn = document.querySelector('#Clear');
const tempDiv = document.querySelector('#tempDiv');

tempForm.onsubmit = function (e) {
    e.preventDefault();
    const toFahrenheit = function (celsius) {
        return ((celsius * 9 / 5) + 32);
    };
    const toCelsius = function (fahrenheit) {
        return ((fahrenheit - 32) * 5 / 9);
    }
    let result;
    if (cRadio.checked) {
        result = toFahrenheit(tInput.value);
        console.log('to fahrenheit', result);
        if (result <= 32) {
            tempDiv.style.backgroundColor = 'blue';
        } else if (result > 32 && result < 212) {
            tempDiv.style.background = 'yellow';
        } else if (result >= 212) {
            tempDiv.style.backgroundColor = 'red';
        }
    } else if (fRadio.checked) {
        result = toCelsius(tInput.value);
        console.log('to celsius', result);
        if (result <= 0) {
            tempDiv.style.backgroundColor = 'blue';
        } else if (0 < result < 100) {
            tempDiv.style.background = 'yellow';
        } else if (result >= 100) {
            tempDiv.style.backgroundColor = 'red';
        }
    }
    resultWindow.textContent = result;
}
//create math formulas

clearBtn.onclick = function () {
    result.textContent = this.form.reset();
}