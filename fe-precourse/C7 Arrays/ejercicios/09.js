function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
var numRan= Math.floor(Math.random() * array.length);

return array[numRan];
}

module.exports = obtenerElementoAleatorio;
