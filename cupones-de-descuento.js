const coupons = ['DTODIADELPADRE', 'DTOJUL30', 'DTOBLACKFRIDAY'];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcPriceDiscount() {
  const inputPrice = document.getElementById('InputPrice');
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById('InputCoupon');
  const couponValue = inputCoupon.value;

  if (!coupons.includes(couponValue)) {
    alert('El cupón ' + couponValue + ' no es válido');
  } else {
    switch (couponValue) {
      case coupons[0]: // 'DTODIADELPADRE'
        priceDiscount = 15;
        break;
      case coupons[1]: // 'DTOJUL30'
        priceDiscount = 30;
        break;
      case coupons[2]: // 'DTOBLACKFRIDAY'
        priceDiscount = 25;
        break;
    }
  }
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    priceDiscount
  );

  const resultP = document.getElementById('ResultP');
  resultP.innerText = 'El precio con descuento es: $' + precioConDescuento;

  return;
}
