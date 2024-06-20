let isCelsiusToFahrenheit = true;

function convert() {
    let celsiusInput = document.getElementById('celsius');
    let fahrenheitInput = document.getElementById('fahrenheit');
    let resultInput = document.getElementById('result');
    let calculationInput = document.getElementById('calculation');

    if (isCelsiusToFahrenheit) {
        let celsius = celsiusInput.value;
        if (celsius === '') {
            alert('Anda Berada di Conversi Celcius, Masukkan nilai Celsius.');
            return;
        }

        let fahrenheit = (celsius * 9 / 5) + 32;
        resultInput.value = `${fahrenheit.toFixed(2)}°F`;
        calculationInput.value = `(${celsius} x 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        let fahrenheit = fahrenheitInput.value;
        if (fahrenheit === '') {
            alert('Masukkan nilai Fahrenheit.');
            return;
        }

        let celsius = (fahrenheit - 32) * 5 / 9;
        resultInput.value = `${celsius.toFixed(2)}°C`;
        calculationInput.value = `(${fahrenheit} - 32) x 5/9 = ${celsius.toFixed(2)}°C`;
    }
}

function resetForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('result').value = '';
    document.getElementById('calculation').value = '';
    toggleInputFields(); // Ensure input fields are toggled correctly after reset
}

function reverseValues() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;

    let directionText = isCelsiusToFahrenheit ? "Konversi dari Celsius ke Fahrenheit" : "Konversi dari Fahrenheit ke Celsius";
    document.getElementById('conversion-direction').innerHTML = `<p>${directionText}</p>`;

    resetForm(); // Reset form fields
    toggleInputFields(); // Toggle input fields
}

function toggleInputFields() {
    let celsiusInput = document.getElementById('celsius');
    let fahrenheitInput = document.getElementById('fahrenheit');

    if (isCelsiusToFahrenheit) {
        celsiusInput.disabled = false;
        fahrenheitInput.disabled = true;
    } else {
        celsiusInput.disabled = true;
        fahrenheitInput.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let directionText = isCelsiusToFahrenheit ? "Konversi dari Celsius ke Fahrenheit" : "Konversi dari Fahrenheit ke Celsius";
    document.getElementById('conversion-direction').innerHTML = `<p>${directionText}</p>`;
    toggleInputFields();
});
