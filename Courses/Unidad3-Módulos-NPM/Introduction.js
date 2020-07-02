/* 
-----
|NPM|
-----

Gestor de paquetes de Node y de todo JS
Es el repositorio de todos los frameworks, librerías tanto del frontend como backend de JS
En esta sección aprenderemos a saber los paquetes que tenemos a disposición y como descargarlos
Dentro de la web oficial de npm podremos buscar paquetes para usarlos en nuestros proyectos de
acorde a nuestras necesidades
En la web oficial de npm podemos incluso creandonos una cuenta crear nuestro propio paquete privado
que podamos estar desarrollando para una empresa o algo similar

Dependiendo de la naturaleza del paquete existen 4 tipos de instalaciones:

    Única: 
    
        $npm install nombre_paquete 
    
        No recomendada porque cuando nosotros instalamos un
        paquete en una aplicación, ya lo podemos utilizar pero cuando subimos nuestro proyecto
        a github para compartirlo, generalmente estos paquetes que son dependencias de nuestro proyecto
        no se suben porque quizás se tenga que descargar mucho código y esto solo provocará que
        se vuelva más pesado nuestra carpeta del proyecto. También existe otra razón importante,
        y es que estos paquetes se pueden configurar en un archivo de configuración llamado 
        package.json. En este archivo de configuración es donde yo le indico a mi app de node
        todo lo que debe de estar ejecutando para su correcto funcionamiento. Por ello cuando
        corremos una app en node lo primero que tenemos que hacer es correr ese archivo de
        configuración para que de esta manera se empiecen a descargar todas las librerías o 
        paquetes que se necesite

        Si por ejemplo vamos a descargar el módulo forms de NPM, abrimos la terminal en la
        carpeta donde vayamos a realizar nuestro proyecto y escribimos $npm install forms,
        tras eso se creará una carpeta en dicho directorio y en la terminal nos indicará
        una vez finalizada la descarga/instalación, todos los paquetes que se han necesitado
        descargar. Todos estos paquetes aparecerán en forma de carpetas, dentro de la carpeta 
        generada en nuestro directorio.

        A la hora de subir nuestro proyecto a github se suele añadir dentro de la carpeta node_modules 
        la carpeta .gitignore para que no se suba. Pero, a partir de esta sección que vamos a comenzar
        a usar paquetes externos que no son parte de core de node, entonces, en cada ejercicio vamos a
        configurar un archivo package.json





    Global: 
    
        $npm install nombre-paquete -g

        Cuando lo instalamos de manera única se instaló unicamente en la carpeta desde donde abrimos
        la consola, pero cuando lo isntalamos de manera global los paquetes no se descargan/isntalan
        en esa carpeta, sino que se instalan en las carpetas de instalación de node. Esa carpeta se
        nos indica en la terminal una vez acabada la instalación para que podamos acceder a ella.




    Como dependencia del proyecto:

        $npm install nombre-paquete --save

        Al instalarlo de esta manera, nuestro proyecto se guarda dentro del archivo de configuración
        package.json (siempre y cuando encuentre ese archivo dentro de nuestra carpeta). Si lo encuentra
        no podrá guardar esta dependencia dentro de nuestro archivo de configuración.

    


    Como dependencia de desarrollo:

        $npm install nombre-paquete --save-dev

        Cuando mi paquete lo requiera el proyecto que estamos desarrollando SI o SI, entonces tendremos que
        instalar los paquetes como dependencia del proyecto, pero, cuando descarguemos paquetes que por ejemplo
        ayuden a mejorar el rendimiento de nuestra aplicación pero no son imprescindibles, entonces lo podremos
        descargar como dependendia de desarrollo. Son paquetes que básicamente se suelen lanzar cuando nuestra 
        aplicación se lance ya en producción, pero que no son imprescindibles durante el proceso de desarrollo.
        Un ejemplo podría ser un paquete que se encargará de comprimir imágenes para ayudar a que un determinado
        proceso se ejecute más rápidamente. 









Desinstalación de paquetes:

    $npm uninstall nombre_paquete (para los paquetes instalados en nuestra carpeta de proyecto)

    $npm uninstal nombre_paquete -g (para los paquetes instalados de forma global, que están en otro directorio guardados)
 
    


Comando $npm help

Podremos encontrar todos los comandos que podemos trabajar con npm
*/

