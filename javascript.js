function calculateDifference() {
    let total = parseFloat(document.getElementById('total').value);
    let percent = parseFloat(document.getElementById('percent').value);
    let person = parseFloat(document.getElementById('person').value);
    let tipAmount = (total * percent) / 100;
    let totalMinusTip = total - tipAmount;
    let tipPerPerson = tipAmount / person;

    document.getElementById('result').innerText = tipPerPerson.toFixed(2);
}
