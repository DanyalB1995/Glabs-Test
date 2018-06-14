var fs = require('fs');
var xml2js = require('xml2js');
var FullJson = require('./models/FullJson.js');

var parser = new xml2js.Parser();

var jsonData = {};

function readConvertXML(dirname, onFileContent, onError) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function (filename) {
            fs.readFile(dirname + filename, 'utf-8', function (err, data) {
                if (err) {
                    onError(err);
                    return;
                }
                parser.parseString(data, function (err, result) {
                    
                });

            });
        });
    });
}

readConvertXML('docs/', function (filename, content) {
    jsonData[filename] = result;
}, function (err) {
    throw err;
});