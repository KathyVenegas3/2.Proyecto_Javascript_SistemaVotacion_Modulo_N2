// // Sistema de votacion basado en programacion funcional

// Definicion de variables y constantes
const NUMERO_PREGUNTAS = 8; //Cantidad de preguntas obligatorias que tendra la encuesta, queda como un valor fijo
//Esto nos permite facilitar la gestion del flujo de la encuesta, dado que permite controlar la iteracion entre preguntas, determinando cuando finalizar la encuesta
let preguntas = []; // Variable para almacenar las preguntas de la encuesta
let encuestaCreada = false; //Variable booleana para indicar si encuesta ha sido creada o no
let preguntaActualIndex = 0; // Variable para llevar registro del indice de la pregunta que se esta mostrando al usuario en ese momento
const todasLasRespuestas = []; // Array para almacenar las respuestas de todos los usuarios que participen en la votacion
let usuariosVotados = 0; //Permite contar la cantidad de usuarios que han votado en la encuesta

// Elementos del DOM los utilizaremos para declarar variables para almacenar referencias a elementos especificos del HTML 
let preguntasContainer;
let crearEncuestaBtn;
let mensajeError;
let votarContainer;
let preguntaActualElement;
let opcionAElement;
let opcionBElement;
let votarBtn;
let mensajeVotoError;
let siguientePreguntaBtn;
let realizarVotacionBtn; 

// Función para generar los campos de entrada de las preguntas en el HTML, que cada campo tenga un identificador, campos  de entrada para ingresar el texto de la pregunta etc...
const generarFormularioPreguntasHTML = () => {
    let html = '';
    for (let i = 0; i < NUMERO_PREGUNTAS; i++) {
        html += `
            <div>
                <label for="pregunta-${i + 1}">Pregunta ${i + 1}:</label> 
                <input type="text" id="pregunta-${i + 1}" placeholder="Ingrese la pregunta">
                <label for="opcion-a-${i + 1}">Opción A:</label>
                <input type="text" id="opcion-a-${i + 1}" placeholder="Opción A">
                <label for="opcion-b-${i + 1}">Opción B:</label>
                <input type="text" id="opcion-b-${i + 1}" placeholder="Opción B">
            </div>
        `;
    }
    return html;  // Funcion que contiene todo el codigo del formulario generado por el usuario
};

// Función para mostrar las preguntas y opciones en la consola del navegador y las opciones por la que han votado los usuario almacenadas en el array
const mostrarPreguntasEnConsola = () => {
    if (preguntas.length > 0) {   // Verificacion para validar que array preguntas, tenga al menos una pregunta antes de intentar mostrar el resto.
        console.log("\n--- Preguntas de la Encuesta ---"); // Si el array no esta vacio se muestra un dato en la consola para indicar que se estan mostrando las preguntas de la encuesta
        preguntas.forEach((pregunta, index) => {   // Permite iterar sobre cada elemento dentro del array preguntas, y para cada elemento se ejecuta la funcion que se encuentra dentro del forEach
            console.log(`\nPregunta ${index + 1}: ${pregunta.pregunta}`);
            console.log(`  Opción A: ${pregunta.opciones.A}`);
            console.log(`  Opción B: ${pregunta.opciones.B}`);
        });
        console.log("-------------------------------\n");
    }
};

// Función para crear la encuesta la cual se llamara desde el HTML
const crearEncuesta = () => {
    preguntas.length = 0; // Permite eliminar elementos que haya podido tener el array, dejandolo vacio con el fin de garantizar que al inciar la creacion de una nueva encuesta cualquier informacion de encuestas anteriores se borre
    let error = false;  // Este valor actua como bandera para rastriar si se encuentra algun error durante el proceso de validacion de preguntas
    for (let i = 0;i < NUMERO_PREGUNTAS; i++) { //Permite iterar sobre cada una de las preguntas que se deben crear 
        const preguntaInput = document.getElementById(`pregunta-${i + 1}`);
        const opcionAInput = document.getElementById(`opcion-a-${i + 1}`);
        const opcionBInput = document.getElementById(`opcion-b-${i + 1}`);

        // 2. Implementación de control de flujos condicionales que evalua si alguno de los valores de los campos de entrada obtenidos en la iteracion actual esta vacio
        if (!preguntaInput.value || !opcionAInput.value || !opcionBInput.value) {
            mensajeError.textContent = "Se deben registrar las 8 preguntas con sus respectivas opciones, intente nuevamente"; // Mensaje para usuario en caso de que le falte llenar informacion
            error = true;
            break;  // Permite determinar el punto en donde se encuestra ejecutando el bucle
        }

        // 3. Manipulación de estructuras de datos a traves de objetos y array 
        preguntas.push({   // Permite agregar un nuevo objeto al array preguntas, cada objeto contiene la pregunta y las opciones A y B
            pregunta: preguntaInput.value,
            opciones: { A: opcionAInput.value, B: opcionBInput.value }
        });
    }

    //Funcion condicional que verifica el valor de la variable error, esto permite asegurar que las acciones posteriores a la creacion del formulario se realicen solo si todas las preguntas han sido creadas e ingresadas correctamente
    if (!error) {
        mensajeError.textContent = "";   //La utilizaremos para borrar cualquer mensajede error que se puede haber mostrado previamente si la encuesta fue creado exitosamente
        encuestaCreada = true; // Variable Booleana que nos indica si se ha creado existosamente el cuestionario
        document.getElementById('encuesta-container').style.display = 'none'; // Ocultar el formulario de creación para dar paso a la votacion
        votarContainer.style.display = 'block'; //Permite mostrar las preguntas de la encuesta para que los usuarios puedan votar
        realizarVotacionBtn.style.display = 'block'; // Inicia proceso de visualizacion de preguntas
        preguntaActualIndex = 0; // Reiniciar el índice de la pregunta para la primera votación
        // No se limpian las respuestas, estas se van acumulando
        usuariosVotados++;  // Nos ayuda a actualizar el contador de votos realizados
        mostrarPreguntaActual(); // Muestra la pregunta actual en el navegador para que el usuario pueda votar
        mostrarPreguntasEnConsola(); // Muestra las preguntas creadas en la consola
        console.log("\n--- Nueva Sesión de Votación ---");  //La utilizamos para mostrar en la consola las preguntas creadas 
    }
};

// Función para iniciar una nueva votación
const realizarVotacion = () => {  // Permite iniciar el el proceso de votacion para un nuevo usuario, alguien distinto al que creo la encuesta originalmente
    if (encuestaCreada) {  //Condicional para indicar que si la encuesta esta creada se puede realizar votacion
        votarContainer.style.display = 'block';
        preguntaActualIndex = 0; // Reiniciar el índice de la pregunta para el nuevo votante
        mostrarPreguntaActual(); 
        console.log("\n--- Nueva Sesión de Votación ---");
    } else {
        alert("La encuesta aún no ha sido creada.");
    }
};

// Función para mostrar la pregunta actual
const mostrarPreguntaActual = () => {  // Permite actualizar la interfaz del usuario para mostrar la pregunta actual y sus opciones
    if (preguntaActualIndex < preguntas.length) {
        preguntaActualElement.textContent = `Pregunta ${preguntaActualIndex + 1}: ${preguntas[preguntaActualIndex].pregunta}`;
        opcionAElement.textContent = preguntas[preguntaActualIndex].opciones.A;
        opcionBElement.textContent = preguntas[preguntaActualIndex].opciones.B;
        mensajeVotoError.textContent = "";
        siguientePreguntaBtn.disabled = true;
        votarBtn.disabled = false; // Habilitar el botón de votar al mostrar la pregunta
        // Se desmarca las opciones previamente seleccionadas
        const opcionesRadio = document.querySelectorAll('input[name="opcion"]');
        opcionesRadio.forEach(radio => radio.checked = false);
    } else {
        preguntaActualElement.textContent = "¡Gracias por participar!";
        votarContainer.style.display = 'none';
        mostrarResultadosConsolaAcumulados(); // Mostrar resultados acumulados al finalizar en consola
    }
};

// Función para registrar el voto
const registrarVoto = () => {
    // 1. Uso de variables
    const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');

    // 2. Implementación de control de flujos (condiciones)
    if (!opcionSeleccionada) {
        mensajeVotoError.textContent = "Por favor, selecciona una opción.";
        return;
    }

    const respuesta = {
        pregunta: preguntas[preguntaActualIndex].pregunta,
        respuesta: opcionSeleccionada.value,
        usuario: usuariosVotados // Asignar el número de usuario al voto
    };
    todasLasRespuestas.push(respuesta); // Guardar la respuesta en el array global
    console.log(`Usuario ${usuariosVotados} - Voto registrado para la pregunta "${respuesta.pregunta}": Opción ${respuesta.respuesta}`);
    mensajeVotoError.textContent = "";
    siguientePreguntaBtn.disabled = false;
    votarBtn.disabled = true; // Deshabilitar el botón de votar hasta la siguiente pregunta
};

// Función para mostrar los resultados acumulados en la consola de forma legible
const mostrarResultadosConsolaAcumulados = () => {
    if (encuestaCreada && preguntas.length > 0 && todasLasRespuestas.length > 0) {
        console.log("\n--- Resultados Consolidados de la Encuesta ---");
        preguntas.forEach((pregunta, index) => {
            const votosA = todasLasRespuestas.filter(resp => resp.pregunta === pregunta.pregunta && resp.respuesta === 'A').length;
            const votosB = todasLasRespuestas.filter(resp => resp.pregunta === pregunta.pregunta && resp.respuesta === 'B').length;
            const totalVotos = votosA + votosB;
            const porcentajeA = totalVotos > 0 ? ((votosA / totalVotos) * 100).toFixed(2) : 0;
            const porcentajeB = totalVotos > 0 ? ((votosB / totalVotos) * 100).toFixed(2) : 0;

            console.log(`\nPregunta ${index + 1}: ${pregunta.pregunta}`);
            console.log(`  Opción A (${pregunta.opciones.A}): ${votosA} votos (${porcentajeA}%)`);
            console.log(`  Opción B (${pregunta.opciones.B}): ${votosB} votos (${porcentajeB}%)`);
        });
        console.log(`\nTotal de participantes: ${usuariosVotados}`);
        console.log("---------------------------------------------\n");
    } else if (encuestaCreada) {
        console.log("\n--- La encuesta ha sido creada, aún no hay votos acumulados. ---\n");
    }
};

// Evento para el botón de siguiente pregunta (se asigna después de cargar el DOM)
const siguientePregunta = () => {
    preguntaActualIndex++;
    mostrarPreguntaActual();
};

// Función para inicializar el script después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    preguntasContainer = document.getElementById('preguntas-container');
    crearEncuestaBtn = document.getElementById('crear-encuesta-btn');
    mensajeError = document.getElementById('mensaje-error');
    votarContainer = document.getElementById('votar-container');
    preguntaActualElement = document.getElementById('pregunta-actual');
    opcionAElement = document.getElementById('opcion-a');
    opcionBElement = document.getElementById('opcion-b');
    votarBtn = document.getElementById('votar-btn');
    mensajeVotoError = document.getElementById('mensaje-voto-error');
    siguientePreguntaBtn = document.getElementById('siguiente-pregunta-btn');
    realizarVotacionBtn = document.getElementById('realizar-votacion-btn'); // Asignar el botón renombrado

    // Generar el formulario de preguntas dinámicamente en el HTML
    preguntasContainer.innerHTML = generarFormularioPreguntasHTML();

    // Asignar los event listeners
    crearEncuestaBtn.addEventListener('click', crearEncuesta);
    votarBtn.addEventListener('click', registrarVoto);
    siguientePreguntaBtn.addEventListener('click', siguientePregunta);
    realizarVotacionBtn.addEventListener('click', realizarVotacion); // Evento para el botón renombrado

    // Inicialmente, ocultamos la sección de votación y el botón de nueva votación
    votarContainer.style.display = 'none';
    realizarVotacionBtn.style.display = 'none';
});