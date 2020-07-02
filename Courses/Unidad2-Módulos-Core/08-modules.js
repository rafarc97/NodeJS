let myData = require('./my-data.js'),
    Clock = require('./clock-es5'),
    reloj = new Clock()
//También funcion sin el .js:
//let myData = require('./my-data')

console.log(
    myData.name,
    myData.email,
    myData.phone
)

reloj.on('tictac',function(){
    reloj.theTime()
})