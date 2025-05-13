# 2.Proyecto_Javascript_SistemaVotacion_Modulo_N

Proyecto: Creación de un sistema de votación en JavaScript

Introducción:
Con los conocimientos adquiridos en el Módulo 2 del Bootcamp, desarrollaremos un sistema de votación a través de un cuestionario interactivo de selección múltiple utilizando JavaScript.

Propósito:
El sistema de votación debe permitir a los usuarios crear encuestas, votar y visualizar los resultados en tiempo real.

El desarrollo de este proyecto permitirá poner en práctica los siguientes conocimientos:

1.Uso de variables, constantes, operadores aritméticos y de comparación.

2.Implementación de control de flujos mediante condicionales y bucles.

3.Manipulación de estructuras de datos: Objetos y Arrays.

4.Uso de funciones, funciones flecha y funciones anónimas.

5.Implementación de Programación Orientada a Objetos (POO) y Programación Funcional (PF).

6.Uso de GIT.

Instrucciones para la programación en POO y PF

- El programa debe permitir a los usuarios crear encuestas con opciones de respuesta.

- Permitir a los usuarios votar en las encuestas creadas.

- Mostrar los resultados en tiempo real.

- Almacenar los datos de las encuestas y los votos en una variable.

- Almacenar los datos en una estructura de datos.

- La solución debe implementarse utilizando tanto POO como PF.

El proyecto estará disponible en el siguiente repositorio de GitHub: 👉 https://github.com/KathyVenegas3

Desarrollo del proyecto

El sistema se enfoca en la creación de encuestas con dos opciones de respuesta por parte de los usuarios. La temática del cuestionario dependerá de la necesidad de cada usuario, quien podrá ingresar las preguntas y opciones correspondientes. El sistema no contiene preguntas ni respuestas predefinidas.

Explicación de la solución con Programación Orientada a Objetos (POO)

El código aplica conceptos básicos de POO en JavaScript, tales como:

1.Clases: Pregunta, Encuesta.

2.Objetos: Instancias de las clases.

3.Métodos: Funciones dentro de las clases.

4.Variables: voto, respuesta, pregunta, i, textoPregunta, opciónA, opciónB, nuevaPregunta.

5.Constantes: NUMERO_PREGUNTAS.

6.Operadores aritméticos: ++, =.

7.Operadores de comparación: ===, <.

Se utilizaron estructuras de control (if, else if, else) para controlar el flujo del programa y ejecutar acciones como votar, agregar preguntas, crear encuestas, mostrar opciones e iniciar la votación.

Las clases Pregunta y Encuesta permiten modelar la estructura de los datos mediante objetos y arrays. Se emplean funciones con nombre para iniciar encuestas, funciones flecha para métodos dentro de clases, y funciones anónimas como callbacks.

El programa permite:

-Crear una encuesta con 8 preguntas obligatorias y dos opciones de respuesta (A y B).

-Permitir la votación una vez que la encuesta cumple con los requisitos.

-Validar que existan exactamente 8 preguntas y dos alternativas válidas.

-Verificar que el usuario conteste las 8 preguntas seleccionando solo una de las dos opciones.

-Mostrar los resultados en tiempo real mediante la consola.

-Generar una nueva votación basada en una encuesta anterior, incluso por otro usuario.

Explicación de la solución con Programación Funcional (PF)

El código también aplica conceptos fundamentales de programación funcional en JavaScript:

1.Uso de variables (let, const).

2.Definición de constantes (const NUMERO_PREGUNTAS).

3.Operadores aritméticos: +, *, /.

4.Operadores de comparación: <, !, ===, >.

5.Estos elementos permiten almacenar datos, realizar cálculos y tomar decisiones lógicas dentro del flujo del programa.

6.Se utiliza control de flujo mediante condicionales y bucles para validar la creación de encuestas, verificar campos completos y determinar las preguntas a mostrar. Los bucles (for, forEach) permiten iterar sobre preguntas y ejecutar las acciones necesarias.

Estructuras de datos:

Se emplean objetos para organizar las preguntas y arrays para almacenar votos de los usuarios, permitiendo un acceso y manipulación de datos clara y ordenada.

Funciones:

Se utilizan funciones flecha y anónimas para encapsular lógica reutilizable, hacer el código más modular y comprensible.

Acciones logradas:

-Crear encuestas con 8 preguntas y dos opciones (A y B).

-Permitir la votación bajo condiciones previamente definidas.

-Validar la estructura de la encuesta.

-Exigir respuestas completas (una opción por pregunta).

-Mostrar resultados acumulados en tiempo real por consola.

-Posibilidad de generar nuevas votaciones con encuestas ya creadas.

-Elementos funcionales observados en el código:

-Tratamiento de funciones como valores.

-Creación de funciones puras en ciertas secciones.

-Uso limitado de inmutabilidad en la creación de objetos.

-Contención de efectos secundarios mediante funciones específicas.

-Uso de funciones de orden superior como addEventListener y forEach.
