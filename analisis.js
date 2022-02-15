//Helpers

function esPar(numero){
    return (numero % 2 === 0)
};

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(listaOrdenada){
    const mitad = parseInt(listaOrdenada.length / 2);

    if(esPar(listaOrdenada  .length)){
        const personaMitad1 = listaOrdenada[mitad - 1];
        const personaMitad2 = listaOrdenada[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = listaOrdenada[mitad];
        return personaMitad
    }
};

//Medianana General
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosCol);

//Mediana del top 10%
const spliceStart =(salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});