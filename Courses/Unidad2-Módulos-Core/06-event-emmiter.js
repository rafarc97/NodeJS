/* 
---------------------
|EMISORES DE EVENTOS|
---------------------

La manera en como trabaja la emisión de eventos en Node, es a través de un patrón de diseño
de software llamado "Patrón Observador".
Vamos a tener dos obejetos, el que publica y el que escucha.
Se utiliza mucho para la comunicación bidireccional.

*/

//En UpperCamelCase
let EventEmmiter = require('events').EventEmitter, //del método require podemos ejecutar métodos que tenga ese módulo
    pub = new EventEmmiter()


//EL on es un eventlistener
pub
    .on('myevent',function (message){
        console.log(message)
    })
    .once('myevent',function(message){
        console.log('Se emite la primera vez. ' + message)
    })

//emit nos permite emitir un evento
pub.emit('myevent','Soy un emisor de eventos')
pub.emit('myevent','Volviendo a emitir')

//remove para borrar eventos
pub.removeAllListeners('myevent')

//comprobamos que se ha borrado, este mensaje no saldrá
pub.emit('myevent','Volviendo a emitir')