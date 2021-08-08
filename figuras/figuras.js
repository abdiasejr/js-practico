const inputCuadrado = document.getElementById("inputCuadrado");

const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const inputC = document.getElementById("inputC");
const inputAltura = document.getElementById("inputAltura")

const inputRadio = document.getElementById("inputRadio");

//Cuadrado
function perimetroCuadrado(){
    return alert(inputCuadrado.value * 4 + `cm`);
}

function areaCuadrado() {
    return alert(inputCuadrado.value ** 2 + `cm²`);
}    

//Triángulo
function perimetroTriangulo() {
    return alert((inputA.value + inputB.value + inputC.value) + `cm`);;
}

function areaTriangulo() {
    return alert((inputB.value * inputAltura.value) / 2 + `cm²`);
}

//Círculo
function perimetroCirculo(){
    return alert(inputRadio.value * 2 * Math.PI + `cm`);
}

function areaCirculo(){
    return alert(inputRadio.value ** 2  * Math.PI + `cm²`);
}