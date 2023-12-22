let numberN;
let number = 11;
let sign = 1;
let result = 0;

do {
    numberN = Number(prompt("Введите число N (N>0)"));    
} while(numberN <= 0);

for (let i = 1; i <= numberN; i++){
    result += sign * (number / 10);
    sign *= -1;
    number += 1;
}
alert(result.toFixed(1));


