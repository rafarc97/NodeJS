'use strict'

let http = require('http'),
    options = {
        host: 'google.com',
        port: 80,
        path: '/'
    }

http
    .get(options, function (res){
        console.log(`El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`)
    })
    .on('error',function(err){
        console.log(`El sitio ${options.host} NO ha respondido. Código de Estado: ${err.code}. Error: ${err.message}`)
    })