const fs = require('fs');
const mimeTypes = require("./mime-types");


const staticFile = (res, filePath, ext) => {
    res.setHeader("Content-type", mimeTypes[ext]);
    fs.readFile('./public' + filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Not Found');
        }
        res.end(data);
    });
}

module.exports = staticFile