// Helpers (Utils)
function esPar(numerito) {
  /* long version would be: 
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  } */
  return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// Mediana General
const salariosPais = peru.map(function (personita) {
  return personita.salary;
});

const salariosPaisSorted = salariosPais.sort((salaryA, salaryB) => {
  salaryA - salaryB;
});

const medianaGeneralPais = medianaSalarios(salariosPaisSorted);

// Mediana del Top 10%
const spliceStart = (salariosPaisSorted.length * 90) / 100;
const spliceCount = salariosPaisSorted.length - spliceStart;
const salariosPaisTop10 = salariosPaisSorted.splice(spliceStart, spliceCount);

const medianaTop10Pais = medianaSalarios(salariosPaisTop10);

console.log({ medianaGeneralPais, medianaTop10Pais });
