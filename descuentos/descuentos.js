const precio = document.getElementById("inputPrecio");
const descuento = document.getElementById("inputDescuento");
const resultado = document.getElementById("resultado");

function descuentoProducto(){
    const compra =  precio.value * (100 - descuento.value) / 100;
    if (compra) {
        return resultado.innerHTML = `Detalle compra: ${compra}$`; 
    }  else {
        return resultado.innerHTML = `Descuento no aplica`;
    }
}