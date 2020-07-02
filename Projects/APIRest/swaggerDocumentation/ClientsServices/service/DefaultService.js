'use strict';


/**
 * Permite obtener la lista de todos los clientes
 *
 * id String Código del cliente
 * name String Nombre del cliente
 * email String Email del cliente
 * role String Role del cliente
 * returns List
 **/
exports.clientsGET = function(id,name,email,role) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : "admin",
  "name" : "Britney",
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "email" : "britneyblankenship@quotezart.com"
}, {
  "role" : "admin",
  "name" : "Britney",
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "email" : "britneyblankenship@quotezart.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Borrar información de un cliente ingresando su ID
 *
 * id String Código del cliente
 * returns String
 **/
exports.clientsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Client <id> deleted\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener información de un cliente ingresando su ID
 *
 * id String Código del cliente
 * returns List
 **/
exports.clientsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : "admin",
  "name" : "Britney",
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "email" : "britneyblankenship@quotezart.com"
}, {
  "role" : "admin",
  "name" : "Britney",
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "email" : "britneyblankenship@quotezart.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar el nombre de un cliente ingresando su ID
 *
 * id String Código del cliente
 * returns String
 **/
exports.clientsIdPUT = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Client <id> updated\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener información de un cliente ingresando su nombre
 *
 * name String Nombre del cliente
 * returns List
 **/
exports.clientsNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "role" : "admin",
  "name" : "Britney",
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "email" : "britneyblankenship@quotezart.com"
}, {
  "role" : "admin",
  "name" : "Britney",
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "email" : "britneyblankenship@quotezart.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite añadir clientes en nuestra base de datos
 *
 * clients clients Crear un nuevo cliente en la base de datos (optional)
 * returns String
 **/
exports.clientsPOST = function(clients) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "OK";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

