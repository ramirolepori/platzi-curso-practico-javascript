//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
return lado * 4;
}

//console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado * lado;
}
//console.log("El area del cuadrado es " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triángulo es " + perimetroTriangulo + "cm");


function areaTriangulo(base, lado1){
    return (base * alturaTriangulo(base,lado1)) / 2;
}

function alturaTriangulo(base, lado1){
    return Math.sqrt((lado1 * lado1)-((base*base) / 4));
}


// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triángulo es " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del Circulo
console.group("Circulos")

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");


//Diametro
// function diametroCirculo(radio){
//     return radio*2;
// }

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
// const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia 
function perimetroCirculo(radio){
    const diametro = radio * 2;
    console.log(Math.PI * diametro);
    return Math.PI * diametro;
}

// const perimetroCirculo = PI * diametroCirculo;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo(radio){
    return Math.PI * (radio * radio);
}

// const areaCirculo = PI * (radioCirculo * radioCirculo);
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Aquí interactuamos con HTML

//Boton Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}


//Boton Triangulo
function calcularPerimetroTriangulo(){
    const value1 = parseFloat(document.getElementById("InputLado1Triangulo").value);
    const value2 = parseFloat(document.getElementById("InputLado2Triangulo").value);
    const value3 = parseFloat(document.getElementById("InputbaseTriangulo").value);
    
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const value1 = parseFloat(document.getElementById("InputLado1Triangulo").value);
    const value3 = parseFloat(document.getElementById("InputbaseTriangulo").value);
    
    const area = areaTriangulo(value3,value1);
    alert(area);
}


//Boton Circulo
 function calcularPerimetroCirculo(){
     const value1 = parseFloat(document.getElementById("InputCirculo").value);
    
     alert(perimetroCirculo(value1));
}
 function calcularAreaCirculo(){
     const value1 = parseFloat(document.getElementById("InputCirculo").value);
    
     alert(areaCirculo(value1));
     
}
