let Zahlen = [];

function claculate() { //alle zahlen zsm rechenen
    let nr1 = +document.getElementById('number1').value;
    let nr2 = +document.getElementById('number2').value;
    let nr3 = +document.getElementById('number3').value;
    let nr4 = +document.getElementById('number4').value;
    let nr5 = +document.getElementById('number5').value;
    let nr6 = +document.getElementById('number6').value;
    let nr7 = +document.getElementById('number7').value;
    let nr8 = +document.getElementById('number8').value;

    let result1 = nr1 + nr2 + nr3 + nr4 + nr5 + nr6 + nr7 + nr8;
    return result1;
}

function claculateResult2() {
    let digitSum = 0;
    while (result1 > 0) {
        digitSum += result1 % 10;
        result1 = Math.floor(result1 / 10);
    }

}


function multFirst2Nr() { // konstannte berechnen
    let Nr1 = +document.getElementById('number1').value;
    let Nr2 = +document.getElementById('number2').value;
    let constante = 0;
    if (Nr1 == 0) {
        constante = Nr2 * 2
    } else {
        constante = Nr1 * 2
    }
    document.getElementById('result').innerHTML = `Deine Zahl lautet ${constante}!`;

}