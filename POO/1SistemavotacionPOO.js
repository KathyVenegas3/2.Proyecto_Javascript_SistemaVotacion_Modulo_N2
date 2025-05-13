// Sistema de votacion basado en programacion orientada a objetos

// Comenzamos definiendo como constante el Q de preguntas que son obligatorias a crear en la encuesta
const NUMERO_PREGUNTAS = 8; // El objetivo de definirlo como constante es para que el usuario que cree la encuesta ingrese las 8 preguntas de manera obligatoria y que no pueda ser reasignada la varible con otro dato el resto del codigo

// Se utiliza la clase como una plantilla para crear los objetos de la encuesta y como parte de la POO
// La clase pregunta se utiliza como modelo para crear objetos que representen a cada pregunta creada 
// El constructor lo utilizaremos para ejecutar atumaticamente el programa cuando se crea una nueva pregunta. Nos sirve para inicializar las propiedades
class Pregunta {
    constructor(texto, opcionA, opcionB) {
        this.texto = texto;
        this.opcionA = opcionA;
        this.opcionB = opcionB;
        this.votosA = 0;
        this.votosB = 0;
    }

    // mostrarPregunta es el nombre del metodo que estamos definiendo dentro de la clase pregunta y sirve para mostrar la pregunta y sus respectivas opciones
    mostrarPregunta = (numero) => { // Usamos la Función flecha parar escribir una funcion pequeña 
        return `Pregunta ${numero}: ${this.texto} (A: ${this.opcionA}, B: ${this.opcionB})`;
    }  // Esta linea nos permitira ingresar la pregunta y las opciones A y B en el prompt

    votar = (alternativa) => { // Utilizamos votar como nombre del metodo que se encargara de contar los votos
        const voto = alternativa.toUpperCase();
        if (voto === 'A') {  // Utilizamos el IF como flujo de control
            this.votosA++; // Nos sirve para incrementar el valor de votos A cada vez que se seleccione esta opcion
            console.log(`Voto por A registrado para: ${this.texto}`); // Nos permite revisar el mensaje de salida en la consola del navegador, segun la opcion seleccionada
        } else if (voto === 'B') {  // En caso de que la condicion anterior no se cumpla y sea esta opcion la seleccionada
            this.votosB++; // Nos sirve para incrementar el valor de votos B cada vez que se seleccione esta opcion
            console.log(`Voto por B registrado para: ${this.texto}`); // Nos permite revisar el mensaje de salida en la consola del navegador, segun la opcion seleccionada
        } else {
            console.log("Opción de voto inválida."); // En caso de que no se seleccione alguna de las opciones propuestas en el codigo, aparece un mensaje en la consola de valor no valido
        }
    }

    obtenerResultados = () => { // Función de flecha que nos permitira devolver la cadena de texto con los resultados de la votacion
        return `Resultados para: ${this.texto} - A: ${this.votosA} votos, B: ${this.votosB} votos`;
    }
}

//Nuevamente definimos una clase, pero en este caso la utilizamos para crear la encuesta y sus metodos
class Encuesta {
    constructor() {  // Constructor de la clase Encuesta el que se ejecutara automaticamente cuando se cree una nueva instancia en la clase Encuesta
        this.preguntas = []; // Esta propiedad es un array que nos permitira almacenar todos los objetos que son parte de la encuesta. Cada vez que se cree la encuesta, este array estara sin informacion al principio
        this.encuestaCreada = false; //Funcionara como indicador para identificar si el proceso de creacion de la encuesta se ha completado
        // Enlazar el contexto de 'this' a los métodos, y nos permitira acceder y modificar las propiedades de la clase (this.preguntas y this.encuestaCreada)
        this.crearEncuesta = this.crearEncuesta.bind(this);
        this.mostrarOpcionesVotacion = this.mostrarOpcionesVotacion.bind(this);
        this.iniciarVotacion = this.iniciarVotacion.bind(this);
        this.agregarPregunta = this.agregarPregunta.bind(this);
        this.mostrarResultados = this.mostrarResultados.bind(this);
    }

    // Esta seccion representa el método para agregar preguntas a la encuesta
    agregarPregunta = (texto, opcionA, opcionB) => { // Función de flecha que nos permitira añadir una pregunta en la encuesta
        //Texto: Sera la defincion de la pregunta; Opcion A: Sera la respuesta A para la pregunta; Opcion B: sera la segunda opcion de respuesta a la pregunta
        // Se utiliza el if como control de flujo condicional de la encuesta que verifica que no se puedan agregar mas preguntas de las definidas en la constante NUMERO_PREGUNTAS
        if (this.preguntas.length < NUMERO_PREGUNTAS) {
            const nuevaPregunta = new Pregunta(texto, opcionA, opcionB);
            this.preguntas.push(nuevaPregunta);
            console.log(`Pregunta "${texto}" agregada.`);
            return true;
        } else {
            console.log(`Ya se han agregado las ${NUMERO_PREGUNTAS} preguntas.`);
            return false;  // Si se intenta agregar más preguntas, se muestra un mensaje de error
        }
    }

    // Esta seccion representa el metodo para crear la encuesta
    crearEncuesta = () => { // Función de flecha
        this.preguntas = []; // Con esto reiniciamos el array this.preguntas a un array vacio
        for (let i = 1; i <= NUMERO_PREGUNTAS; i++) {    // Iniciamos un bucle que hara que se ejecute el valor Numero_Preguntas 8 veces que fueron las definidas. La variable de control parte en 1 y se va incrementando en cada iteracion. 
            // Este bucle nos permite solicitar la informacion para cada una de las preguntas creadas previamente
            const textoPregunta = prompt(`Ingrese el texto de la pregunta ${i}:`);
            const opcionA = prompt(`Ingrese la opción A para la pregunta ${i}:`);
            const opcionB = prompt(`Ingrese la opción B para la pregunta ${i}:`);

           // Con el IF, realizamos verificacion de que el usuario ingreso el texto para la pregunta y ambas opciones solicitadas
            if (textoPregunta && opcionA && opcionB) {
                this.agregarPregunta(textoPregunta, opcionA, opcionB);
            } else {  // En caso de que el usuario no ingrese la pregunta o las opciones, se muestra un mensaje de error
                alert(`Se deben registrar las ${NUMERO_PREGUNTAS} preguntas con sus respectivas opciones.`);
                this.preguntas = [];
                this.encuestaCreada = false;
                return;
            }
        }
        // Despues de que se ejecute el bucle FOR, se levantara un mensaje al usuario indicando que la encuesta fue creada exitosamente y que ahora puede votar
        alert("Encuesta creada exitosamente. Ahora puedes votar.");
        this.encuestaCreada = true;
        this.mostrarOpcionesVotacion();
    }

    // Esta seccion representa el metodo para mostrar las opciones de votacion
    // En este caso, se utiliza el prompt para solicitar al usuario que ingrese su voto    
    mostrarOpcionesVotacion = () => { // Función de flecha
        if (this.preguntas.length === NUMERO_PREGUNTAS) { // Verifica que la encuesta creo el numero de preguntas obligatorio antes de empezar la votacion
            console.log("\n--- Comienza la votación ---"); //Mensaje para la consola indicando que la votacion partio
           // Iniciamos el bucle for para iterar sobre cada pregunta almacenada previamente en el array
            for (let i = 0; i < this.preguntas.length; i++) {
                const pregunta = this.preguntas[i];
                const respuesta = prompt(`${pregunta.mostrarPregunta(i + 1)}\nSelecciona tu voto (A o B):`);
                pregunta.votar(respuesta);
            }
            this.mostrarResultados(); // Despues de que el usuario ha votado en todas las preguntas llamamos el valor MostrarResultados para visualizar los resultados de la votacion en la consola
        } else {
            console.log("La encuesta no ha sido creada completamente.");
        }   // En caso de que la encuesta no haya sido creada completamente, se muestra un mensaje de error en la consola indicando que la votacion no puede comenzar si la encuesta no ha sido creada correctamente
    }

    // Esta seccion representa el metodo para mostrar los resultados de la votacion
    iniciarVotacion = () => { // Función de flecha
        if (this.encuestaCreada && this.preguntas.length === NUMERO_PREGUNTAS) {
            console.log("\n--- Comienza la votación ---");
            for (let i = 0; i < this.preguntas.length; i++) {
                const pregunta = this.preguntas[i];
                const respuesta = prompt(`${pregunta.mostrarPregunta(i + 1)}\nSelecciona tu voto (A o B):`);
                pregunta.votar(respuesta);
            }
            this.mostrarResultados();
        } else if (!this.encuestaCreada) {
            alert("La encuesta debe ser creada primero.");
        } else {
            alert(`La encuesta no está completa (faltan preguntas, se requieren ${NUMERO_PREGUNTAS}).`);
        }
    }

    mostrarResultados = () => { // Función de flecha que tiene como funcion mostrar los resultados de la encuesta en la consola
        console.log("\n--- Resultados de la Encuesta ---");  //muestra un encabezado en la consola para informar que se mostrar los resultados de la votacion
        this.preguntas.forEach(function(pregunta) { // Función anónima
            console.log(pregunta.obtenerResultados());
        });
    }
}

// Crear una instancia de la encuesta
const miEncuesta = new Encuesta();

// Funciones globales (con nombre)
function iniciarCreacionEncuesta() {
    miEncuesta.crearEncuesta();
}

function iniciarNuevaVotacion() {
    miEncuesta.iniciarVotacion();
}