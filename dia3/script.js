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
<<<<<<< HEAD
    for(let i =0; i<viajes.length;i++)
    {
        if(viajes[i].destino == "Canarias" || viajes[i].destino == "canarias" || viajes[i].destino== "Galicia" || viajes[i].destino== "galicia" || viajes[i].destino== "Mallorca" || viajes[i].destino== "mallorca")
        {
            console.log(viajes);
        }else{
            console.log("No hay destinos mas buscados");
        }
    }
}
function filtrado(){
    let filtrado = viajes.filter(filtro);
    console.log(filtrado);
}

function buscar()
{
    let temp = document.getElementById("buscar");
    let tabla = document.getElementById("tabla");

    let filtraArray = viajes.filter(obj ,key)
    {
        return obj[key].includes(temp.value);
    }

    tabla.innerHTML = "<tr><th>Nombre</th></tr>"

    for(let i=0;i<viajes.length;i++)
    {
        for(let j of viajes[i])
        {
            tabla.innerHTML += "<tr><td>${j}</td></tr>"
        }
    }
=======
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
>>>>>>> main
}