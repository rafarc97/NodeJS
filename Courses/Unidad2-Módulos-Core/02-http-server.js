/*
------
|HTTP|
------

Http será la clase que nos permita levantar un servidor web y poder empezar a hacer aplicaciones para internet.

Tenemos una serie de parámetros:
    http.METHODS (métodos que acepta: put, post, get, delete para hacer apps API Rest)
    hhtp.STATUS_CODE ()
    http.CreateServer (método para crear servidor)
    http.createClient (podremos hacer clientes/servidores http)

La clase http es un emisor de eventos. La mayoría de los módulos principales de nodejs dependen de la clase
EventEmitter (emisor de eventos), el cual se puede ejecutar una sola vez o poner una escucha addEvenListener

Cuando nosotros interactuamos con un servidor http vamos a tener una petición (request) al servidor y el servidor
nos dará una respuesta, por ello tendremos un request Server y un response Server.


*/


//Versión 1
/*
let http = require('http') //llamamos a un módulo interno de node que se llama http

//el método createServer recibe una función con dos parámetros (petición y respuesta)
http.createServer(function (request, response) {
    //Mandamos a las cabeceras de http (navegador) cuando encuentre el código 200 (éxito) un texto plano
	response.writeHead(200, {'Content-Type':'text/plain'})
    //Le envío un mensaje
    response.end('Hello World\n')
}).listen(3000, "127.0.0.1")//ejecuta también el método http (listen) que le indica por qué puerto va a estar escuchando mi app

console.log('Server running at http://127.0.0.1:1337/')

*/


//Versión 2 (mejora)
//En esta versión sacamos la función anónima dentro del http.CreateServer

let http = require('http')

function webServer(req, res){
	res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hola Node.js</h1>')
    //También se podría escribir así, aunque es mejor indentar por cada método una línea
    //para que sea un código más expresivo y legible
    //res.writeHead(200, {'Content-Type':'text/html'}).end('<h1>Hola Node.js</h1>')
}

http
	.createServer(webServer)
	.listen(3000, 'localhost') //los desarrolladores de node suelen trabajar con el puerto 3000

console.log('Servidor corriendo en http://localhost:3000/')