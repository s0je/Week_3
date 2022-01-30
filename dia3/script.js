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
    for(let i =0; i<viajes.length;i++)
    {
        if(viajes[i].destino == "Canarias" || viajes[i].destino == "canarias" || viajes[i].destino== "Galicia" || viajes[i].destino== "galicia" || viajes[i].destino== "Mallorca" || viajes[i].destino== "mallorca")
        {
            console.log(viajes[i]);
        }else{
            console.log("No hay destinos mas buscados");
        }
    }
}

function buscar()
{
    let temp = document.getElementById("buscar");
    let tabla = document.getElementById("tabla");

    let filtraArray = viajes.filter(obj ,key)
    {
        return obj[key].includes(temp.value);
    }
    tabla.innerHTML = "<tr><th>Nombre</th></tr>";
    for(let id of filtraArray)
    {
        tabla.innerHTML += "<tr><td>"+id+"</td></td>";
    }
}