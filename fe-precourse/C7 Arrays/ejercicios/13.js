function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
var parNum= array.filter(numero=> numero%2===0)
return parNum;
}

module.exports = filtrarNumerosPares;
