const numberList = [
    4e8,
    500,
    200,
    100,
];

let midList = Math.floor(numberList.length / 2); 
let mediana;

function esPar(number) {
    if (number % 2) {
        return false;
    }
    else {
        return true;
    }
}

function calcularMediana(numberList) {
    
    if (esPar(numberList.length)) {
        mediana = (numberList[midList] + numberList[midList - 1]) / 2;
    } else {
        mediana = numberList[midList];
    }
    return mediana;
}
calcularMediana(numberList.sort((a,b) => a - b));