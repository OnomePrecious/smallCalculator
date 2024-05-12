let result = '';

function append(value) {
    result += value;
    document.getElementById('displayCalculator').value = result;
}

function calculate() {
    try {
        result = eval(result);
        document.getElementById('displayCalculator').value = result;
    } catch (error) {
        document.getElementById('displayCalculator').value = 'Error';
    }
}
