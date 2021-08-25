let numberList = [2,3,5,2,3,2,5,5,4,2,1,5,3,1,4];

let countList = {};

function calcularModa(numberList) {
    
    numberList.map(
        elemento => {
            if (countList[elemento]) {
                countList[elemento] += 1;
            }
            else{
                countList[elemento] = 1;
            }
        }
    )
    const list = Object.entries(countList).sort((a,b) => a[1] - b[1]);
    return list[list.length-1];
        
}

console.log(calcularModa(numberList));


