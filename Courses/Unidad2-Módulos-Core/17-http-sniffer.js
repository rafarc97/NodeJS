/* 
---------
|SNIFFER|
---------

Con este mecanismo podemos extraer el código HTML de una página web.
Al ejecutar este archivo, imprimirá por la terminal todo el código HTML de la web de google.com
Por otro lado, si vamos a localhost:3000 en nuestro navegador, podremos ver todo ese código jalado de google
de forma local en nuestro localhost
*/


'use strict'

let http = require('http'),
    options = {
        host: 'www.google.com',
        port: 80,

        //Si nos vamos a cualquier apartado de cualquier web y copiamos el path aquí, extraeremos
        //en lugar del HTML  de la web, eñl HTML de ese apartado
        path: '/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header'
    },
    htmlCode = ''

function httpClient(res){
    console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`)
    res.on('data',function(data){
        htmlCode += data
        console.log(data,
                    data.toString()) //nos imprime datos en binario por ello tenemos que convertirlo a cadena de texto

    }) //mientras existan datos => ejecuta la función tipo callback
}

function httpError(err){
    console.log(`El sitio ${options.host} NO ha respondido. Código de Estado: ${err.code}. Error: ${err.message}`)
}

function webServer(req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(htmlCode)
}

/*Recordemos que tenemos métodos http tanto para trabajar con el cliente como con el servidor,
en este caso .get trabaja con el cliente, .on error también ,pero .createServer y .listen
son métodos del lado del servidor, por ello necesitamos una instancia para invocar 
primero a los dos métodos del cliente y luego otra para los 2 del servidor*/
http
    .get(options,httpClient)
    .on('error',httpError)
http
    .createServer(webServer)
    .listen(3000)

console.log('Servidor corriendo en http://localhost:3000/')

//