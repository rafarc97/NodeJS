/* 
-----
|URL|
-----
Es un módulo que dispone de varias utilidades para la resolución y análisis de las URL.

--------------
|QUERY STRING|
--------------

Nos permite manejar de forma óptima las URL en forma de objeto y convertirlas a cadenas de texto
*/


'use strict'

let http = require('http').createServer(webServer),
    path = require('path'),
    url = require('url'),
    urls = [
        {
            id: 1,
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            id: 2,
            route: 'acerca',
            output: '<h2>Acerca</h2>'
        },
        {
            id: 3,
            route: 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ]

function webServer(req,res){
    let message = '<h1>Hola Node.js</h1>',
    pathURL = path.basename(req.url), //este método devuelve la última posición de la ruta
    //la propiedad query nos permite analizar paso de parámetros, en nuestro caso el id
    //toma una cadena de texto de la url y devuelve un objeto
    id = url.parse(req.url,true).query.id    

    console.log(`path: ${pathURL}, id: ${id}`)
    console.log(id)

    urls.forEach(function (pos){
        if(pos.route == pathURL || pos.id == id){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(message + pos.output)
        }
    })
    if(!res.finished){
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end('<h1>Error 404: Not Fount.</h1>')
    }
}

http.listen(3000)
console.log('Servidor corriendo en http://localhost:3000/')


//Si escribimos en el navegador /?id=2 nos saldría acerca, y así con los demás id