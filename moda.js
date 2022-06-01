// const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

function calcularModa(lista) {
  const listaCount = {};

  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaCount).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    valorAcumulado[1] - nuevoValor[1];
  });

  // Ya que el indice del array comienza desde cero
  // Pero la longitud cuenta desde 1 hasta el total de elementos
  // Debemos restar 1 para obtener la última posición del array
  const moda = listaArray[listaArray.length - 1];

  return moda;
}

console.log(calcularModa([1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]));
