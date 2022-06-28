let suma = 0;


const equipo = []

class jugador{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = parseInt(edad);
    }
}

function calculadorTotal() {
    suma = suma + edad
}

function resultado(a, b) {
    return a / b
}
function datosJugador() {
    nombre = prompt("Ingresa el nombre del integrante")
    edad = parseInt(prompt("Ingresa la edad del integrante"))

    return new jugador(nombre, edad);
}


alert(`Bienvenidos a Palomo Fútbol 5. Ahora podés calcular el promedio de edad de tu equipo`)

let cant = parseInt(prompt("Ingresa la cantidad de integrantes que conforman tu equipo. Tambíen podés incluir los suplentes."))

for (let i = 0; i < cant; i++) {
    equipo.push(new datosJugador());
    calculadorTotal();
    console.log(suma);
}
console.log(equipo);

alert(`El promedio de edad de tu equipo es de ${resultado(suma, cant)} y en total suman ${suma} años`)
console.log(`El promedio de edad es ${resultado(suma, cant)}`);


