const path = require("path");
const {staticFile, mimeTypes} = require('../appModules/http-utils')
const defaultRouteController = async (response, url) => {
    const extname = String(path.extname(url)).toLowerCase();
    if (extname in mimeTypes) {
        staticFile(response, url, extname);
    } else {
        response.statusCode = 404;
        response.end("Not Found");
    }
}

module.exports = defaultRouteController;