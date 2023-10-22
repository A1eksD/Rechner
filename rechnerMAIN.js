let zahlen = []; // flas mans braucht


//funnction1
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
    multiplyFirst2Nr(nr1, nr2, result1);
    
}


//funnction2
function claculateResult2() {  // überarbeiten
    let digitSum = 0; 
    while (result1 > 0) {
        digitSum += result1 % 10;
        result1 = Math.floor(result1 / 10);
    }

}


//funnction3
function multiplyFirst2Nr(nr1, nr2, result1) { 
    let constante = 0;
    if (nr1 === 0) {
        constante = nr2 * 2
    } else {
        constante = nr1 * 2
    }
    let resultDunction3 = result1 - constante
    document.getElementById('result').innerHTML = `Deine Zahl lautet ${resultDunction3}!`; // test

}