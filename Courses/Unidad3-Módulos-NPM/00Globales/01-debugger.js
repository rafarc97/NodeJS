/* 
---------------------------
|DEBUG CON EL CORE DE NODE|
---------------------------

    Para debuggear escribir en la terminal:
    
    $node debug nombre_archivo

    Y tendremos que irnos localhost:puerto_que_indique_terminal

    Por cada línea donde aparezca "debugger" en nuestro código ahí se hará una pausa, son como breakpoints













    


-------------------
|PAQUETES GLOBALES|
-------------------

Se instalan localmente en nuestro ordenador
Están disponibles en todo momento
Son paquetes que nos yudarán generalmente en tareas administrativas (monitoreo,depuración,automatización,...)

Los que vamos a ver concretamente son:
    node-inspector
    supervisor
    nodemon
    forever
    pm2



----------------
|NODE INSPECTOR|
----------------

    $node-debug mi-archivo.js

Nos permite hacer debugg de una manera más amigable. Cuando ejecutamos dicho comando, se abre en nuestro
navegador un programa que nos aydará a debugear nuestro código.




------------
|SUPERVISOR|
------------

    $supervisot mi-archivo.js (aunque tiene otras formas, ver en documetacion oficial de npm)

Nos permiten supervisar un archivo y cada vez que este tenga un cambio reiniciará el archivo para que podamos tener
los cambios de primera mano. Se suele hacer cuando se deteca errores o algún cambio en el archivo. 





---------
|NODEMON|
---------

    $nodemon miarchivo.js

Es un monitor de script que se dedica a revisar todos los archivos de un directorio y los cambios que tengan
y reinicia el archivo en su caso.

----------------------
|INSTALACIÓN MÚLTIPLE|
----------------------

Un ej sería:

    $npm i nodemon -g supervisor -g
*/

'use strict'

let http = require('http')

function webServer(req, res){
    debugger
    res.writeHead(200, {'Content-Type':'text/html'})
    debugger;
    res.end('<h1>Hola Node.js</h1>')
}

http
	.createServer(webServer)
	.listen(3000, 'localhost')

console.log('Servidor corriendo en http://localhost:3000/')