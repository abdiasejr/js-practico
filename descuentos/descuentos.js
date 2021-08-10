var precio = document.getElementById("inputPrecio");
var descuento = document.getElementById("inputDescuento");
var cupon = document.getElementById("inputCupon");
var resultado = document.getElementById("resultado");

let cupones = {
    '': 0,
    '10OFF': 10,
    '15OFF': 15,
    '30OFF': 30,
    '50OFF': 50,
    '%FREE%': 100, 
};


function descuentoProducto(){

    Object.values(cupones).forEach( elemento => {
        if (cupones[cupon.value] == elemento) {
            descuento.value = Number(descuento.value) + cupones[cupon.value];
        }
    });

    const compra =  precio.value * (100 - descuento.value) / 100;
    if (compra) {
        return resultado.innerHTML = `Detalle compra: ${compra}$`; 
    }  else {
        return resultado.innerHTML = `Descuento no aplica`;
    }
}