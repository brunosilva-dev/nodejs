let http = require("http");

let server = http
  .createServer(function (req, res) {
    let categoria = req.url;

    if (categoria == "/tecnologia") {
      res.end("<html><body>Portal de Tecnologia</body></html>");
    } else if (categoria == "/moda") {
      res.end("<html><body>Portal de Moda</body></html>");
    } else if (categoria == "/beleza") {
      res.end("<html><body>Portal de Beleza</body></html>");
    } else {
      res.end("<html><body>Portal de Notícias</body></html>");
    }
  })
  .listen(3000);
