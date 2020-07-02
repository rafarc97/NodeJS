/*
---------
|STREAMS|
---------

'Chorros' de información que se transmiten en 'Pedazos' (Chunks) 
	3 tipos de stream: Lectura / Escritura / Duplex (permite ambas)
	Son Instancias de EventEmitter (permite manipular eventos en nodejs)
	Acceso asíncrono
	Es raro crear streams directamente
	Pero muchos recursos nos ofrecen este interfaz
	Detrás de muchos mecanismos de Node.JS
		stdin/stdout
		request de HTTP
		Sockets
		Manipulación de ficheros/imágenes
*/


let fs = require('fs'),
    readStream = fs.createReadStream('assets/nombres.txt'),
    writeStream = fs.createWriteStream('assets/nombres_copia.txt')

readStream.pipe(writeStream) //se crea la copia
    
readStream
    .on('data',function(chunk){ //el on permite asignar eventos a funciones, el evento data (mientras haya archivo (datos), ejecutamos una funcion)
        console.log(
            'He leído: ',
            chunk.length,
            'caracteres'
        )
    })
    .on('end',function (){
        console.log('Terminé de leer el archivo')
    })

/* 
Con esto podemos ver que ya estamos manejando eventos en nodejs
*/

