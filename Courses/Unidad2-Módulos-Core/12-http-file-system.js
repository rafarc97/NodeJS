/* Aquí ejecutamos un servidor HTTP como la apertura de un archivo de mi sistema */

let http = require('http').createServer(webServer),
    fs = require('fs'),
    index = fs.createReadStream('assets/index.html')

function webServer(req, res){
    function readFile(err,data){
        if(err) throw err
        res.end(data)
    }
    res.writeHead(404, {'Content-Type':'text/html'})
    fs.readFile('assets/index.html',readFile)
    index.pipe(res)
}

http.listen(3000, 'localhost') //los desarrolladores de node suelen trabajar con el puerto 3000
console.log('Servidor corriendo en http://localhost:3000/')