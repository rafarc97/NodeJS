//Vamos a encerrar el código en una función autoejecutable anónima 
//(se ejecuta en el momento en que el archivo carga)

let Clock = (function(){

    let EventEmmiter = require('events').EventEmitter,
    inherits = require('util').inherits

    //constructor
    let Clock = function (){
        //this hace referencia a la variable clock. Esto se hace porque this no está en
        //el contexto de la función setInterval. Eso se soluciona con las arrow functions
        let self = this 

        setInterval(function (){
            //console.log('Hola')
            self.emit('tictac')
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
            message = hours + ':' + min + ':' + sec + ampm
        
        function addZero(num){ return (num < 10) ? ('0' + num) : num}
        
        console.log(message)
    }

    return Clock
})()

module.exports = Clock