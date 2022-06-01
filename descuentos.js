// const precio = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcPriceDiscount() {
  const inputPrice = document.getElementById('InputPrice');
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById('InputDiscount');
  const priceDiscount = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    priceDiscount
  );

  const resultP = document.getElementById('ResultP');
  resultP.innerText = 'El precio con descuento es: $' + precioConDescuento;

  return;
}
