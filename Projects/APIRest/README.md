VALIDATION ASSESMENT

As a insurance company we've been asked to develop an application that
manage some information about our insurance policies and company clients.
To do that, we have two services that provide us with all the data needed:

* The list of company clients can be found at:
http://www.mocky.io/v2/5808862710000087232b75ac

* The list of company policies can be found at:
http://www.mocky.io/v2/580891a4100000e8242b75c5

With that information, we need to create a Web API that exposes services
with some constraints:

* Get user data filtered by user id 
* Get user data filterd by user name 
* Get the list of policies linked to a user name 
* Get the user linked to a policy 

We have the following constraints:

* To use Postman to check queries	
* Usage of last technologies (mandatory Node.js)
* Solution properly structured and documented

As our stakeholders are very fussy, here you have some tips:

* Add everything you thing it's needed to ensure product's quality.
* Research about the best npm (e.g Axios)
* Try to “dockerize” some code. 			

------------------------------------------------------------------------------------------------------------------------------------------------------------------
### CONFIGURACIÓN con DOCKER :whale:

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

1. Clonar el respositorio
2. Abrir una terminal por cada microservicio 
3. Configurar la imagen y contenedor para arrancar cada microservicio

- CREAMOS IMAGENES DOCKER:

```
docker build -t clients-service .
docker build -t politics-service .
docker build -t clientspoliticsservices .
```

- COMPROBAMOS QUE SE HA CREADO:

```
docker images
```

- EJECUTAMOS CONTENEDORES:

```
docker run -it -p 3001:3000 clients-service
docker run -it -p 4001:4000 politics-service
docker run -it -p 5001:5000 clientspoliticsservices
```

### CONFIGURACIÓN sin DOCKER :wrench:

1. Clonar el respositorio
2. Nos aseguramos de tener la base de datos mongodb instalado con sus respectivas configuraciones y luego la arrancamos con las siguientes instrucciones:

```
sudo apt-get install mongodb
cd /lib/systemd/system
sudo touch mongodb.service
sudo nano mongodb.service
systemctl list-unit-files --type=service
sudo systemctl enable mongodb.service
systemctl list-unit-files --type=service
sudo systemctl start mongodb

```
2. Abrir una terminal por cada microservicio 
3. Ejecutar la siguientes instrucciones en cada carpeta de cada microservicio para la descarga de todas las dependencias del proyecto:

```
npm install
```

4. Entrar en src desde la terminal y ejecutamos el proyecto con nodemon:

```
nodemon index.js
```
