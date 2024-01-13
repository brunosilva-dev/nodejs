# Node

- Importar bibliotecas para dentro do JS

```node
let http = require("http"); //Está incorporando a lib http
```

- Criar/subir um servidor onde irá precisar um argumento (normalmente utiliza-se uma function como parâmetro). Abaixo tem um exemplo onde são passados os parâmetro dentro da function e dentro da função é a resposta com retorno em html. O listen é para que ele entenda que na porta 3000 deve subir o server.

```node
let server = http.createServer(function (req, res) {
  res.end("<html><body>Portal de Notícias</body></html>");
});

server.listen(3000);
```

- Inserindo rotas para o servidor por exemplo localhost:3000/categoria

```node
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
```

- Instalar as ferramentas abaixo para apoio na utilizado do node

> Express - é um framework nodejs para web, onde ele traz uma API para apoio

> EJS - que é uma linguagem de modelagem para HTML utilizando JS

> NPM - gerenciador de pacotes

> Nodemon - reinicia automaticamente o servidor JS quando há alteração dentro do projeto

- Iniciando NPM dentro do projeto

> Quando é instalado node, o npm vem junto

> No prompt de comando dentro do projeto digite npm init

> Após inicir o npm, será preciso dar o nome ao projeto > Escolher a versão > descrição > entry point(ponto de entrada, caso for fornecer como módulos a outros usuários) > test command > git repository > keywords > author > license > verificação se está ok

- Instalando o express dentro do projeto

> npm install express -save (no projeto da aula foi npm install express@4.15.3 -save)

> Será criado dentro do projeto uma página chamada node_modules e no package.json é incluido as dependencias

- Refatorando para express

> o módulo require('express') executa uma função, porém não retorna ela, é necesário fazer a chamada na função colocando require('express')() ou executar a função dentro da váriavel let app = express();

> No express não é preciso adicionar o createServer, pois, apenas utilizando .listen já irá selecionar a porta e subir

> Dentro de liste é preciso informar a porta e a resposta que no caso será uma function retornando algo que no exemplo é a informação no console de que o servidor está no ar

> Podemos criar as rotas e organizar todo o projeto

> Ao invés de usar o end como antes, agora utilizaremos o send()

```node
let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("<html><body>Portal de Notícias</body></html>");
});

app.get("/tecnologia", function (req, res) {
  res.send("<html><body>Notícias de Tecnologia</body></html>");
});

app.listen(3000, function () {
  console.log("Servidor rodando com Express");
});
```

- Instalando EJS

> Permite escrever paginas HTML com engine JS

> Comando para efetuar a instalação do EJS "npm install ejs --save" (no projeto foi usado npm install ejs@2.5.6 --save)

> Após a instalação, deve inserir dentro do código o .set('view engine', 'ejs') para informar que existe uma nova geração de views e que será o EJS

```node
let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("<html><body>Portal de Notícias</body></html>");
});

app.get("/tecnologia", function (req, res) {
  res.send("<html><body>Notícias de Tecnologia</body></html>");
});

app.listen(3000, function () {
  console.log("Servidor rodando com Express");
});
```

- Gerar o diretório views para centralizar todas as views HTML dentro de um local

> Agora com o EJS gerando o arquivo, não precisamos mais usar o método res.send() mas sim res.render(), pois, no send enviavamos o html dentro do método e agora com render apenas indicamos o arquivo HTML

```node
let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home/index");
});

app.get("/formulario_inclusao_noticia", function (req, res) {
  res.render("admin/form_add_noticia");
});

app.get("/noticias", function (req, res) {
  res.render("noticias/noticias");
});

app.listen(3000, function () {
  console.log("Servidor rodando com Express");
});
```
