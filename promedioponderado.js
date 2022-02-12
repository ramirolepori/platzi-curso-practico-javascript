const notas = [
    {
        nombre: "Matematicas",
        nota: 10,
        credito: 2,
    },
    {
        nombre: "Fisica",
        nota: 8,
        credito: 5,
    },
    {
        nombre: "Quimica",
        nota: 7,
        credito: 5,
    },
];

let notasConCredito = [];
let sumaCreditos = 0;
let sumaNotasConCredito = 0;

notasConCredito = notas.map(function(noteObject){
    sumaCreditos = sumaCreditos + noteObject.credito;
    return noteObject.nota * noteObject.credito;
})

sumaNotasConCredito = notasConCredito.reduce(function(a=0, b){
    return a + b;
});

const promedioPonderado = sumaNotasConCredito /sumaCreditos;