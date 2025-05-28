function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var masGra= array[0];
  var indMasGra= 0;

  for(var i=1; i< array.length; i++){
    if(array[i]> masGra){
      masGra= array[i];
      indMasGra= i
    }
  }
  return indMasGra
  }


module.exports = encontrarIndiceMayor;
