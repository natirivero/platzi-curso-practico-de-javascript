function calcularMediaAritmetica(lista) {
  /*  Ej. con for loop

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
      sumaLista = sumaLista + lista[i];
    } */

  // Ej. con el méodo reduce() de los arrays...
  const sumaLista = lista.reduce((valorAculumado = 0, nuevoElemento) => {
    return valorAculumado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// console.log(calcularMediaAritmetica([1, 14, 151, 98]));
