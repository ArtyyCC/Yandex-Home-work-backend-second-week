const {staticFile} = require('../appModules/http-utils');
const {getData, endpoints} = require('../appModules/api');
const {config, makeRatingFile} = require('../appModules/rating');

const mainRouteController = async (response, publicUrl, extname) => {
    const data = await getData(endpoints.games);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    response.statusCode = 200;
    staticFile(response, publicUrl, extname);
}

module.exports = mainRouteController