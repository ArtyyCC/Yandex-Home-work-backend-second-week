const http = require('http');
const starter = require('./appModules/starter')
const { defaultRouteController, gameRouteController, voteRouteController, mainRouteController } = require('./controllers')

const server = http.createServer((request, response) => {
    const url = request.url;
    switch (url) {
        case "/":
            mainRouteController(response, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(response);
            break;
        case "/vote":
            voteRouteController(request,response);
            break;
        default:
            defaultRouteController(response, url);
    }
});

server.listen(3005, () => {
    starter();
    console.log("Сервер запущен!");
});
