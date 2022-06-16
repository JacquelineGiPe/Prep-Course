// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);  // .toUpperCase devuelve en mayuscula lo que le pidamos 
                                                     // .slice devuelve desde la posicion en que le indiquemos 
  
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  console.log(cb);
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma = numeros.reduce(
    (previousValue, currentValue) => {return previousValue + currentValue}
  );
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(element => cb(element));  // .forEach itera el array para pasar cada elemnto por el callback que le invocamos

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  console.log('primero'+ array)
  console.log(cb)
  var map1 = array.map(x => cb(x)); //crea un nuevo array convirtiendo cada elemento en otro como si fuera una "funcion"
  return map1;
  console.log('pasado'+map1)

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var result = array.filter(array => array[0] == 'a'); //crea nuevo array filtrando los elementos que le pasamos de otro array
  return result;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
