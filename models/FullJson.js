/*var mongoose = require("mongoose");

var schema = mongoose.Schema({
        key: JSON
    }),
    Json = mongoose.model('JSON', schema),
    toSave = new Json({
        key: yourJsonObject
    });

toSave.save(function (err) {
    'use strict';
    if (err) {
        throw err;
    }
    console.log('woo!');
})*/

module.exports = {
    test: test
}

function test(name, json){
    console.log(name + ": " + JSON.stringify(json, null, 2));
}