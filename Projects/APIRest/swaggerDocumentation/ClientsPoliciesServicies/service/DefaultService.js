'use strict';


/**
 * Obtener lista de políticas enlazada a un cliente
 *
 * id String Id cliente
 * returns List
 **/
exports.politicsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "clientId" : "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
  "inceptionDate" : "2000-01-23",
  "amountInsured" : 1825.89,
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "installmentPayment" : true,
  "email" : "inesblankenship@quotezart.com"
}, {
  "clientId" : "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
  "inceptionDate" : "2000-01-23",
  "amountInsured" : 1825.89,
  "id" : "a0ece5db-cd14-4f21-812f-966633e7be86",
  "installmentPayment" : true,
  "email" : "inesblankenship@quotezart.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener el usuario enlazado a la política
 *
 * id String Código de la política
 * returns String
 **/
exports.politicsPolicyidIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "a0ece5db-cd14-4f21-812f-966633e7be86";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

