const http = require('http');
const https = require('https');
const unzipper = require('unzipper');


function auth(request, response){

}

http.createServer(function (request, response) {
  // if(request.url.match(/auth/)){
  //   return auth(request, response);
  // }

  // request.pipe(unzipper.Extract({ path: '../server/public' }));
}).listen(8084);