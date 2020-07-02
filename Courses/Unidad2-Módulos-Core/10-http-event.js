let http = require('http').createServer()

function webServer(req, res){
	res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hola Node.js</h1>')
    //También se podría escribir así, aunque es mejor indentar por cada método una línea
    //para que sea un código más expresivo y legible
    //res.writeHead(200, {'Content-Type':'text/html'}).end('<h1>Hola Node.js</h1>')
}

http
	.on('request',webServer)
	.listen(3000, 'localhost') //los desarrolladores de node suelen trabajar con el puerto 3000

console.log('Servidor corriendo en http://localhost:3000/')