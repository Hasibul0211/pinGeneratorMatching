function getPin() {
    const generatePin = Math.round(Math.random() * 10000);
    const pinString = generatePin + '';



    if (pinString.length == 4) {
        return generatePin;
    }
    else {
        return getPin();
    }

}

function generatepin() {
    document.getElementById('show-pin').value = getPin();

}

document.getElementById('keypad').addEventListener('click', function (event) {
    let clickNumber = event.target.innerText;
    const calcInput = document.getElementById('get-input');
    if (isNaN(clickNumber)) {
        if (clickNumber == 'C') {
            calcInput.value = '';
        }


    }

    else {

        const prevCalc = calcInput.value;
        const newCal = prevCalc + clickNumber;
        calcInput.value = newCal;
    }

})

function submitBtn() {
    const pin = document.getElementById('show-pin').value;
    const typeNumber = document.getElementById('get-input').value;
    const successMsg = document.getElementById('success');
    const failedMsg = document.getElementById('failed');
    if (pin == typeNumber) {
        successMsg.style.display = 'block';
        failedMsg.style.display = 'none';
    }
    else {

        failedMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}