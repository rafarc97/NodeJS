/*
------
|CORE|
------

El core es lo que nos da potencia en el lado del servidor con JS.
El núcleo de Node.js está formado por poco más de 35 módulos.

Es importante revisar su nivel de estabilidad al usarlos(documentación en node.org):
    0 - Deprecated 
    1 - Experimental
    2 - Stable
    3 - Locked

Algunos módulos son:
    Globals
    Process
    HTTP
    Buffer
    Stream
    File System (ej en unidad I realizado)
    Events
    Util
    Timers
    Módulos (require/exports)

Toda la información del núcleo está en el API DOCS


---------------------
|ORGANIZACIÓN CÓDIGO|
---------------------

    1. Librerías/módulos
    2. Constantes
    3. Objetos/Variables
    4. Funciones
    5. Eventos
    6. Ejecuciones


-----------
|camelCase|
-----------

Existe el UpperCamelCase y el lowerCamelCase, es más frecuente usar el lower.
Cuando una instrucción tenga una sola palabra, va en minúscula p.e require()
Solo las clases rompen esta regla, siempre van en mayúscula la letra inicial p.e EventEmmiter()
Cuando una instrucción tenga 2 o más palabras, a partir de la segunda la primera letra va en mayúscula p.e createServer()

*/

console.log('Hola desde node.js, esto se verá en la terminal de comandos')
console.log(2+5)

//es el elemento padre del navegador, pero en node, no tenemos el contexto de window
//console.log(window) 

//es un objeto global, guarda configuraciones de node. Este objeto daría error en la consola del navegador
console.log(global)

/*
Los objetos globales de node.js son:
    global
    process
    console (objeto que usamos para escribir en la consola)
    Class:Buffer (uno de los más importantes)
    require() (permite importar módulos a nuestro archivo)
*/

//El primer parámetro del método setInterval recibe la función que ejecutará,
//El segundo parámetro recibe el tiempo en milisegundos entre cada ejecución de la función
//Ctrl + C para detener ejecución de un script en consola
setInterval(function(){
    console.log('Hola Node.js')
}, 1000)

