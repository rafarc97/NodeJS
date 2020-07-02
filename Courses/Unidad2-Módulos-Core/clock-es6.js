//Vamos a encerrar el código en una función autoejecutable anónima 
//(se ejecuta en el momento en que el archivo carga)



/* 
Una nueva característica de ES6 son los Template Strings.
Es una nueva implementación para las cadenas de texto usando el caracter "`" 

Para las clases en ES6 en nodeJS necesitamos usar el modo estricto
*/

'use strict'


let Clock = (function(){

    let EventEmmiter = require('events').EventEmitter,
    inherits = require('util').inherits

    //constructor
    let Clock = function (){
        //let self = this

        setInterval(() => {
            //console.log('Hola')
            this.emit('tictac')
        },1000)
    }

    //inherits necesita el constructor y el constructor Padre
    inherits(Clock,EventEmmiter)

    //extendemos el prototipo del objet Clock y le añadimos un método
    Clock.prototype.theTime = function(){
        let date = new Date(),
            hoursAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
            hours = addZero(hoursAmPm),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            ampm = (date.getHours() < 12) ? 'am' : 'pm',
            message = `${hours}:${min}:${sec}${ampm}`
        
        function addZero(num){ return (num < 10) ? ('0' + num) : num}
        
        console.log(message)
    }

    return Clock
})()

module.exports = Clock


/* 
Una nueva característica de ES6 son los Template Strings.
Es una nueva implementación para las cadenas de texto usando el caracter "`" 
*/