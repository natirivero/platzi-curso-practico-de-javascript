const coupons = [
  {
    name: 'DTODIADELPADRE',
    discount: 15
  },
  {
    name: 'DTOJUL30',
    discount: 30
  },
  {
    name: 'DTOBLACKFRIDAY',
    discount: 25
  }
];

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

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  // para validar si el cupón que escribió el usuario está guardado en
  // la propiedad name de alguno de los objetos en la lista de cupones.
  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert('El cupón ' + couponValue + 'no es válido');
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById('ResultP');
    resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
  }
}
