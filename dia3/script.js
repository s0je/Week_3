let nomb = document.getElementById("nombre");
let origin = document.getElementById("origen");
let destiny = document.getElementById("destino");
let nPersons = document.getElementById("nSPersonas");
let date = document.getElementById("fecha");

let viajes = [];

function addViajes(){

    let nuevoViaje = {
        nombre : nomb,
        origen : origin,
        destino : destiny,
        nPersonas : nPersons,
        fecha : date
    };
    console.log(nuevoViaje);
    viajes.push(nuevoViaje);
}

function flitrar()
{
    console.log("esto funciona");
}