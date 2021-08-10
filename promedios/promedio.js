const numberList = [
    100,
    200,
    300,
    500,
];

function mediaLista(arrayList) {

    let suma = arrayList.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    let promedio = suma / arrayList.length;

    console.log(suma + ' / ' + arrayList.length + ' = ' + promedio);
}

mediaLista(numberList);