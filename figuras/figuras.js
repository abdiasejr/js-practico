//Cuadrado
console.group(`Cuadrado`);
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado mide: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado mide: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado ** 2;
console.log(`El área del cuadrado mide: ${areaCuadrado}cm²`);
console.groupEnd();

//Triángulo
console.group(`Triángulo`);
const ladoTrianguloA = 6;
const ladoTrianguloB = 6;
const ladoTrianguloC = 4;
console.log(`Los lados del triángulo ABC miden: ${ladoTrianguloA}cm , ${ladoTrianguloB}cm, ${ladoTrianguloC}cm.`)

const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + ladoTrianguloC;
console.log(`El perímetro del triángulo mide: ${perimetroTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`);

const areaTriangulo = (ladoTrianguloC * alturaTriangulo)  / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm²`);
console.groupEnd();

//Círculo
console.group(`Círculo`);
const radioCirculo = 4;
console.log(`El radio del círculo mide: ${radioCirculo}cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo mide: ${diametroCirculo}cm`);

const π = Math.PI;
const perimetroCirculo = (diametroCirculo * π);
console.log(`El perímetro de la circunferencia mide: ${perimetroCirculo}cm`);

const areaCirculo = (radioCirculo * radioCirculo) * π;
console.log(`El área de la círculo mide: ${areaCirculo}cm²`);
console.groupEnd();