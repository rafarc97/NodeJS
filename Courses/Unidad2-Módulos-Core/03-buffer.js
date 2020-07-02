/*
--------
|BUFFER|
--------

Es una tira de bytes (datos binarios) 
Similar a un array de entero
Tamañó fijo
Manipular datos directamente de tipo:
    Sockets (permiten comunicaciñón bidireccional)
    Streams (permiten enviar información)
    Implementar protocolos complejos (http,ftp,smtp,...)
    Manipulación de ficheros/imágenes 
    Criptografía 
*/

const buf = Buffer.alloc(100), 
    buf2 = Buffer.alloc(26),
    str = '\u00bd + \u00bc = \u00be' //1/2 + 1/4 = 3/4  en formato ascii

console.log(
    buf,//aparecerán impresas las 100 posiciones del buffer
    buf.toString('ascii'),
    str, //1/2 + 1/4 = 3/4 
    str.length + ' caractéres', //9 caractéres(suma todos los espacios + \u00bd cuenta como 1, + el igual)
    Buffer.byteLength(str,'utf8') + ' bytes') //los 9 caractéres en memoria de servidor están ocupando 12 bytes
    
buf.write('abcd',0,4,'utf-8')

for (let i = 0; i < buf2.length; i++){
    buf2[i] = i + 97 //97 en ascii = letra 'a'    
}

console.log(buf2.toString('ascii'))

/*
Los buffer son como el equivalente que tenemos con los arreglos en el frontend.
*/