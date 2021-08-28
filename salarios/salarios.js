const listaPersona = [];

class Persona {

    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        // this.currency = currency;
    }

    getName(name){
        this.name = name;
    }

    setName(name){
        this.name = name;
    }

    getSalary(salary){
        this.salary = salary;
    }

    setSalary(salary){
        this.salary = salary;
    }
}

const lista = document.getElementById("content");
let listaSalarios = [];
let listaOrdenada = [];
let mediana = 0;
let promedio = 0;
let propiedad = 0;

function registrarSalario() {
    
    let inputNombre = document.getElementById("inputNombre");
    let inputSalario = document.getElementById("inputSalario");
    
    if (inputNombre.value && inputSalario.value) {
        listaPersona.push( new Persona(inputNombre.value, inputSalario.value));
        if (propiedad < listaPersona.length) {
            lista.innerHTML += `${Number(propiedad)+1}. ${listaPersona[propiedad].name} ${listaPersona[propiedad].salary} <br/>`;
            propiedad++;        
        }
    }   
    cargarDatos(); 
}

function cargarDatos() {
    listaSalarios = listaPersona.map((persona) => persona.salary);
    listaOrdenada = listaSalarios.sort((a,b) => a - b);
}
function esPar(number) {
    return (number % 2)
}
function calcularPromedio() {
    promedioSalarios(listaOrdenada);
    function promedioSalarios(listaSalarios) {
        const suma = listaSalarios.reduce((a = 0, b) => Number(a) + Number(b));
        promedio = suma / listaSalarios.length;
    }
}
function calcularMediana() {
    function medianaSalarios(listaSalarios) {
        const midList = Math.floor(listaSalarios.length / 2)
        
        if (esPar(listaSalarios.length)) {
            mediana = listaSalarios[midList];
        } else{
            mediana = (Number(listaSalarios[midList]) + Number(listaSalarios[midList - 1])) / 2;       
        }
        
        return mediana
    }
    medianaSalarios(listaOrdenada);
}
function calcularTop() {
    console.log(listaOrdenada.filter(elemento => (elemento > ((listaOrdenada[listaOrdenada.length * 0.9-1]))
        )));
}
