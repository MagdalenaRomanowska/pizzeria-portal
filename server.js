/* global require, process */

const fs = require('fs');//skrot od file system, wbudowane w Node.js
const path = require('path'); // służy modyfikacji konwersji ścieżek do plików.
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');
const middlewares = jsonServer.defaults({
  static: 'build', //katalog źródłowy plików statycznych.
  noCors: false,
});
const port = process.env.PORT || 3131;

server.get(/^\/panel.*/, (req,res) =>{ //kod do obsługi ścieżek na serwerze. Dotyczy pakietu Express, backend.
  if(req.url === '/panel'){//ta cała funkcja: jeżeli URL zaczyna się od
    // /panel to ma być zwrócony plik z katalogu build, jeżeli istnieje.
    //Jeżeli nie ma takiego pliku (z żądania) to ma być zwrócony plik index.html.
    // Dzięki temu widzimy, że wszystie adresy z naszego panelu mają mieć przedrostek
    // /panel.
    req.url += '/';
  }
  const filePath = __dirname+req.url.replace('/panel', '/build');
  if(fs.existsSync(filePath)){
    res.sendFile(filePath);
  } else {
    res.sendFile(path.join(__dirname+'/build/index.html'));
  }
});

server.use(function(req, res, next) {//ta funkcja sprawdza czy żądany adres ma
  //przedrostek /api. Jeśli tak, to zapytanie zostanie obsłużone przez json server.
  //Jeśli to nie jest zapytanie do api, to chcemy potraktować to zapytanie tak,
  // jakby dotyczylo podkatalogu front w katalogu build.
  const api = /^\/api(.*)$/.exec(req.url);

  if (api && api.length > 1) {
    req.url = api[1] || '/';
  } else {
    req.url = '/front' + req.url;
  }
  next();
});

server.use(middlewares);
server.use(router);

server.listen(port);

//kod uruchamiany tylko na serwerze.
