'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.politicsIdGET = function politicsIdGET (req, res, next, id) {
  Default.politicsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.politicsPolicyidIdGET = function politicsPolicyidIdGET (req, res, next, id) {
  Default.politicsPolicyidIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
