let countSmallerNumber = 0;
let numberK = Number(prompt("Введите число K."));
let comparableNumber;

do {
    comparableNumber = Number(prompt("Введите сопоставимое число."));
    if (comparableNumber !== 0 && comparableNumber < numberK) {
        countSmallerNumber++;
    }
} while (comparableNumber !== 0);
alert("Количество чисел меньших " + numberK + ": " + countSmallerNumber);


