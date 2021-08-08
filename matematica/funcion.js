function alturaTriangulo(ladoA, ladoB,base) {
    if (ladoA + ladoB > base) {
        if (ladoA == ladoB && ladoB != base) {
            return Math.sqrt(ladoA ** 2 - (base / 2) ** 2); 
        } else {
            return "No es isoceles";
        }
    } else {
        return "No forma triángulo isoceles";
    }
}
console.log(alturaTriangulo(3,3,2));