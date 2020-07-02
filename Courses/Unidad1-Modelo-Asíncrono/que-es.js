/*
-------------------
|¿QUÉ ES NODE-JS ?|
-------------------

Es una plataforma de desarrollo software creada en 2009
JS en el lado del servidor
Basado en la máquina virtual de Chrome (V8)
V8 está escrito en C (muy rápido)
Multiplataforma
Es una marca registrada y es open source
Asíncrono y orientado a eventos
Es concurrente sin paralelismo
Single Thread basado en callbacks
caseSensitive
Ideal para aplicaciones que consumen datos en tiempo real y que se ejecutan a través de dispositivos distribuidos
Lo usan muchas empresas (Paypal,Yahoo,LinkedIn,eBay,Uber,...)
Compila directamente a código máquina sin un intérprete gracias a V8
Modelo I/O orientado a eventos
Arquitectura unificada (JS Full Stack)
Código reutilizable (frontend, backend y base de datos)
Excelente rendimiento y escalabilidad
Fuerte y apasionada comunidad

 
--------------------------------
|¿QUÉ PODEMOS HACER CON NODEJS?|
--------------------------------

Aplicaciones cliente-servidor
Aplcaciones servidor-servidor (networking)
Chats,Juegos,Cliente de Correo,Traductores,...
Aplicaciones Colaborativas y Redes Sociales
Estadísticas y Analíticas
Aplicaciones de Red (línea de comandos o admin. de sistemas)
Sitios Web,Blogs y CMS's
Controlar Hardware

 
------------------------
|CONCEPTOS IMPORTANTES:|
------------------------


NODE JS es como un MESERO (símil para entender su modelo asíncrono (concurrente) y no bloqueante):
Es un Patrón Reactor del mundo real
Para aprovecharlo, tiene que haber varios clientes
Un cliente no termina más rápido por asignarle un mesero exclusivo
Cada cliente termina a su ritmo


Paralelismo: varios objetos realizando una acción simultáneamente (síncrono)
Concurrencia: un solo objeto con varias tareas "activas" entre las que va alternando (asíncrono)

Bloqueante: una tarea no deja que otra distinta se ejecute hasta que no acabe (se ejecuta una tarea detrás de otra)
No Bloqueante: varias tareas ejecutándose simultáneamente. Las tareas no necesitan esperar la finalización de otra para poder ejecutarse


-----------------
|OTROS CONCEPTOS|
-----------------


Single Thread: NodeJS es Single Thread basado en Callbacks, es decir, en NodeJS disponemos de un único hilo conductor, el cual puede, gracias al modelo asíncrono,
estar recibiendo constantemente en un ciclo varias peticiones las cuales se irán sirviendo. Cuando estas peticiones estén listas se irán enviando las respuestas.

Event Loop: imagen en carpeta "./Introducción"

¿Puede NodeJS enviar peticiones HTTP de manera concurrente en un solo hilo sin tener candado? SÍ.


-----------------
|INFRAESTRUCTURA|
-----------------


FrontEnd: el navegador es nuestro cliente. Se utiliza HTML (para el contenido), CSS (para el diseño) y JavaScript (para la programación)

BackEnd: no necesita precompilarse. Se ejecuta y al tener integrado V8 el tiempo de procesamiento es muy rápido. Si se están utilizando BBDD documentales
como MongoBD (es una base de datos hecha en JS), no necesitamos hacer un cambio de lenguaje a SQL, sino que la BBDD está en mi propio lenguaje de programación
haciendo que podamos tener una app Fullstack teniendo el mismo lenguaje de programación (JS) tanto en Frontend como Backend.


-------------------
|SI ERES FRONTEND:|
-------------------

Tenemos mucho ganado dedicándonos al desarrollo de Backend con NodeJS
Es la mejor oprción para hacer backend puesto que ya sabemos JavaScript
Si no nos interesa el backend, sus módulos nos harán mejor frontend
Podemos empezar nuestra carrera como Full Stack JavaScript Developer

MEAN.JS (Mongo Express Angular NodeJS)


-----------------------------------
|JAVASCRIPT EN EL FRONTEND/BACKEND|
-----------------------------------

Frontend:
No importa el SO
No hay datos binarios
Apenas hay E/S
Un único usuario
Todo es accesible con objetos y valores primitivos

Backend:
Llamadas al SO
Muchos datos binarios
Muchas E/S
Usuarios y permisos
Puertos y Servidores
Middlewares


------
|IOjs|
------

Es un fork (copia) amigable de NodeJS compatible con npm liderado bajo un modelo de gobernabilidad abierta (open gobernance), es decir,
que no hay de por medio intereses de particulares.

Surgió porque NodeJS comenzó a crecer pero se estancó.
IO.js fué liderado por los contribuyentes más activos de Node.js y el CEO de NPM. SU objetivo fue arreglar de lo que carecía Node.js

Tiene soporte para las últimas versiones de V8
Desarrollo activo haciendo liberaciones semanales
Integración continua y ejecución de pruebas al 100%
Vinculación con la comunidad
Gobernabilidad abierta por la comunidad y no por empresas
Hoja de ruta predecible
Versiones compatibles con SemVer
Comenzó a incrementar su actividad

*/


/*
---------------------
|ABRIENDO UN FICHERO|
---------------------

Código Bloqueante: 
Abrimos archivo
Leemos archivo (necesito abrir antes => bloqueante)
Imprimir contenido
Hacer algo más si se desea


Código No Bloqueante:
Abrimos archivo
Leer archivo
Hacer algo más si se desea
(Cuando se termine, imprimir contenido => no bloqueante)

*/

//Código Bloqueante
let fs = require('fs')
console.log('\nAbriendo archivos...')

let content = fs.readFile('archivo.txt','utf8')
console.log(content)

console.log('\nHaciendo otra cosa\n')
console.log(process.uptime()) //tiempo ejecución

//Código No Bloqueante
let fs = require('fs')
console.log('\nAbriendo archivos...')

let content = fs.readFile('archivo.txt','utf8',function(error,content) { //uso de callbacks => asincronía, no bloqueo
    console.log(content)
})

console.log('\nHaciendo otra cosa\n')
console.log(process.uptime())

//Los callbacks pueden producir el Callback Hell (pirámide del infierno). Solución para este código No Bloqueante sin posibilidad de Callback Hell:
let fs = require('fs')
console.log('\nAbriendo archivos...')

function imprimir(error,content){
    console.log(content)
}

let content = fs.readFile('archivo.txt','utf8',imprimir)

console.log('\nHaciendo otra cosa\n')
console.log(process.uptime())
//Otra solución sería utilizar promesas