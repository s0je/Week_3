let nomb = document.getElementById("nombre");
let origin = document.getElementById("origen");
let destiny = document.getElementById("destino");
let nPersons = document.getElementById("nSPersonas");
let date = document.getElementById("fecha");

let viajes = [];

function addViajes(){

    let nuevoViaje = {
        "nombre" : nomb.value,
        "origen" : origin.value,
        "destino" : destiny.value,
        "nPersonas" : nPersons.value,
        "fecha" : date.value
    };
    console.log(nuevoViaje);
    viajes.push(nuevoViaje);
}

function filtro()
{
    if(nuevoViaje.destino == "Canarias" || nuevoViaje.destino == "canarias" || nuevoViaje.destino== "Galicia" || nuevoViaje.destino== "galicia" || nuevoViaje.destino== "Mallorca" || nuevoViaje.destino== "mallorca")
    {
        console.log(nuevoViaje);
    }else{
        console.log("No hay destinos mas buscados");
    }
}
function filtrado(){
    let filtrado = nuevoViaje.filter(filtro);
    console.log(filtrado);
}