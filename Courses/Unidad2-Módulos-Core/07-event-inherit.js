/* 
----------
|HERENCIA|
----------


*/

let EventEmmiter = require('events').EventEmitter,
    inherits = require('util').inherits

let Clock = function (){
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
        hours = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        message = hours + ':' + min + ':' + sec
    
        console.log(message)
}

let reloj = new Clock()
reloj.on('tictac',function(){
    reloj.theTime()
})