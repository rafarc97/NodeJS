'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.clientsGET = function clientsGET (req, res, next, id, name, email, role) {
  Default.clientsGET(id, name, email, role)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsIdDELETE = function clientsIdDELETE (req, res, next, id) {
  Default.clientsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsIdGET = function clientsIdGET (req, res, next, id) {
  Default.clientsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsIdPUT = function clientsIdPUT (req, res, next, id) {
  Default.clientsIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsNameGET = function clientsNameGET (req, res, next, name) {
  Default.clientsNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientsPOST = function clientsPOST (req, res, next, clients) {
  Default.clientsPOST(clients)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
