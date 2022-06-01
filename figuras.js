// Código del cuadrado
console.group('Cuadrado');

// const lado = 5;

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

// Código del tiángulo
console.group('Triangulo');

// const lado1 = 6;
// const lado2 = 6;
// const base = 4;
// const altura = 5.5;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

// Código del círculo
console.group('Círculos');

// const radio = 4;

// Diámetro
const diametroCirculo = (radio) => radio * 2;

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// área
const areaCirculo = (radio) => radio * radio * PI;

console.groupEnd();

// Add line comment: Ctrl+K Ctrl+C
// Remove line comment: Ctrl+K Ctrl+U
// Toggle block comment: Ctrl+Shift+A

// Aquí Interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const lado1 = parseFloat(document.getElementById('lado1Triangulo').value);
  const lado2 = parseFloat(document.getElementById('lado2Triangulo').value);
  const base = parseFloat(document.getElementById('baseTriangulo').value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = document.getElementById('baseTriangulo').value;
  const altura = document.getElementById('alturaTriangulo').value;

  const area = areaTriangulo(base, altura);
  alert(area);
}

// Circulo
function calcularDiametroCirculo() {
  const input = document.getElementById('inputCirculo');
  const value = input.value;

  const diametro = diametroCirculo(value);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById('inputCirculo');
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById('inputCirculo');
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

// altura triángulo isoceles
function calcHeight() {
  const catetoA = parseFloat(document.getElementById('catetoA_Isoceles').value);
  const catetoB = parseFloat(document.getElementById('catetoB_Isoceles').value);
  const base = parseFloat(document.getElementById('baseIsoceles').value);

  if (catetoA !== catetoB) {
    console.error('Los catetos a y b NO son iguales');
  } else {
    const altura = Math.sqrt(catetoA * catetoA - (base * base) / 4);
    alert(altura);
  }
}

// hipotenusa triángulo rectangulo
function calcHypotenuse() {
  const catetoA = parseFloat(
    document.getElementById('catetoA_Rectangulo').value
  );
  const catetoB = parseFloat(
    document.getElementById('catetoB_Rectangulo').value
  );

  const Hypotenuse = Math.sqrt(catetoA * catetoA + catetoB * catetoB);
  alert(Hypotenuse);
}
