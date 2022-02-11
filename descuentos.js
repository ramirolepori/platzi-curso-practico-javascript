// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDescount(){
    const priceValue = document.getElementById("InputPrice").value;

    const discountValue = document.getElementById("InputDiscount").value;
    
    const precioConDesuento = calcularPrecioConDescuento(priceValue,discountValue);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDesuento;
}

