let nombre = document.getElementById("nombre");
let origen = document.getElementById("origen");
let destino = document.getElementById("destino");
let nPersonas = document.getElementById("nSPersonas");
let fecha = document.getElementById("fecha");

let viajes = [];

function addViajes(addNombre,addOrigen,addDestino,addNPersonas, addFecha){

    let nuevoViaje = {
        nombre : addNombre,
        origen : addOrigen,
        destino : addDestino,
        nPersonas : addNPersonas,
        fecha : addFecha
    };
    console.log(nuevoViaje);
    viajes.push(nuevoViaje);
}