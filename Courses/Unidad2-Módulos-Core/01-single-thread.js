/*
---------------
|SINGLE THREAD|
---------------

Es básicamente el módulo process, que es el objeto global que permite acceder a cualquier sitio
Cada cosa que le quiera añadir al hilo único del proceso de node, puedo ejecutarlo en el método process

*/

function singleThread(){

    process.argv[2] = 'Estamos aprendiendo Node.js'
    process.argv[3] = 19
    process.argv[4] = null
    process.argv[5] = true

    //Estamos accediendo a las propiedades del método process
    console.log('---------------------------------------------')
    console.log('         EL PROCESO DE NODE.JS         ')
    /*
    La memoria interna de node cada vez que ejecuto un proceso le da un id dinámicamente
    Cuando vayamos a montar una aplicación en producción de node, vamos a tener que dejar
    actívamente ese proceso y si después queremos ejecutarlo de nuevo, es importante conocer
    el id del proceso
    */
    console.log('Id del proceso ........... ' + process.pid) //devuelve id proceso
    console.log('Título.................... ' + process.title) //devuelve título proceso
    console.log('Directorio de Node........ ' + process.execPath) //donde se ejecuta node internamente en mi máquina	
    console.log('Directorio Actual......... ' + process.cwd()) 
    console.log('Versión de Node........... ' + process.version) 
    //Se genera un arreglo donde se irán guardando todas las dependencias que vayamos instalando
	console.log('Versiones Dependencias.... ' + process.versions) 
	console.log('Plataforma (S.O.)......... ' + process.platform)
	console.log('Arquitectura (S.O.)....... ' + process.arch) 
    console.log('Tiempo activo de Node..... ' + process.uptime()) 
    /*
    Igual que en JS tenemos el objeto argument al cual le podemos ir pasando parámetros en el frontend
    aquí tenemos argv, que es un arreglo con 2 parámetros que corresponde con 2 rutas, una con lo que 
    devuelve execPath y otro con lo que devuelve cwd(). Podemos añadirle más argumentos.
    */
	console.log('Argumentos del proceso.... ' + process.argv) //
	console.log('---------------------------------------------')
}

singleThread()

/*
En un mismo servidor, si tuvieramos la necesidad de ejecutar varias aplicaciones node, podemos hacerlo, entonces
el id de proceso será el identificador de nuestro single thread. Podemos tener tantos procesos ejecutándose al
tiempo como necesite nuestra aplicación/proyecto.
*/