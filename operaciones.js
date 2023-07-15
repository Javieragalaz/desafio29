const fs = require("fs");  // importar funciones


//REGISTRAR
const registrar = (info) => {

    // Leer JSON y sumar información
    const contenido = fs.readFileSync("citas.json", "utf8");

    if (info.length == 5) { //condición de 5 argumentos

        // Arreglo de objetos
        const mascota = {
            Nombre: info[0],
            Edad: info[1],
            Tipo: info[2],
            Color: info[3],
            Enfermedad: info[4],
        };

        // Ver el JSON como arreglo y no string
        var data = JSON.parse(contenido);


        // Agregar datos de mascota
        data.push(mascota);
        console.log("Nueva cita agendada.")

        // Agrega la información a citas.json
        fs.writeFileSync("citas.json", JSON.stringify(data))
    }
};

//LEER
const leer = (archivo) => {

    const leer = fs.readFileSync(archivo, "utf8");

    //Leer el arreglo

    JSON.parse(leer).forEach((element) => {

        console.log(element);
    });
};

module.exports = { registrar, leer };