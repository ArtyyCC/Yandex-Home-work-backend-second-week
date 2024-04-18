const fs = require("fs");
const {config } = require('../appModules/rating');
const { getRandomGame } = require("../appModules/api");

const gameRouteController = async (response) => {
    try {
        const ratingFile = await fs.promises.readFile(config.PATH_TO_RATING_FILE);
        const data = JSON.parse(ratingFile);
        const game = getRandomGame(data);
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(game));
    } catch (error) {
        response.statusCode = 500;
        response.end('Internal Server Error');
    }
}

module.exports = gameRouteController;
