const argumentos = process.argv.slice(2);

const { registrar, leer } = require("./operaciones.js");

if (argumentos[0] != null) { //Si el argumento es diferente a null

    if (argumentos[0] == "registrar" || argumentos[0] == "leer") { //condición si true
        switch (argumentos[0]) {  //Expresión
            case (argumentos[0] = "registrar"): // Cuando el valor coincide con el argumento 1
                registrar(argumentos.slice(1));
                break;
            case (argumentos[0] = "leer"): //Cuando el valor coincide con el argumento 2
                leer("citas.json");
                break;
        }
    } else { // Condición si false
        console.log(`${argumentos[0]} error`);
    }
} else {

    //check if at least one action was entered
    console.log("Favor ingresa una acción");
}