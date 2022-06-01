ulist = [];

function calcularMediana(ulist) {
  const lista = ulist.sort(function (a, b) {
    return a - b;
  });

  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAculumado = 0, nuevoElemento) => {
      return valorAculumado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
  }

  const mitadLista = parseInt(lista.length / 2);

  function esPar(numerito) {
    // si numerito dividido entre dos no deja ningún residuo
    // numerito es par
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;

    return mediana;
  } else {
    mediana = lista[mitadLista];

    return mediana;
  }
}

console.log(calcularMediana([750, 900, 100, 200, 500, 40000000]));
