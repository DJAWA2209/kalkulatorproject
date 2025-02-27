function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        // Menggunakan eval untuk menghitung hasil
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}
function calculateTrigonometric(value, operation) {
    let radians = value * (Math.PI / 180);
    switch (operation) {
        case 'sin':
            return Math.sin(radians);
        case 'cos':
            return Math.cos(radians);
        case 'tan':
            return Math.tan(radians);
        default:
            return null;
    }
}