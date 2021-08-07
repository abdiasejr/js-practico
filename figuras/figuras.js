//Cuadrado
function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4 + `cm`
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado ** 2 + `cm²`
}    

//Triángulo
function perimetroTriangulo(ladoA, ladoB, ladoC) {
    return ladoA + ladoB + ladoC + `cm`;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2 + `cm²`;
}

//Círculo
function perimetroCirculo(radio){
    return radio * 2 * Math.PI + `cm`;
}

function areaCirculo(radio){
    return radio ** 2  * Math.PI + `cm²`;
}