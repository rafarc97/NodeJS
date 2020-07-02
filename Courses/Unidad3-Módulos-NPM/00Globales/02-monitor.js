/* 


*/



'use strict'

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

http.listen(3000, 'localhost')
console.log('Servidor corriendo en http://localhost:3000/')