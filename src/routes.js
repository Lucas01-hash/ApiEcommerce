// Importações necessarias
const { Router } = require("express");
const route = new Router();

// Importação de controllers
const ProdutoController = require("./app/controllers/ControllersProdutos/AdminControllerUsuario/produtoAdminController");

// rotas

route.get("/", function (req, res) {
  res.send("Olá mundo");
});

route.get("/produtos", ProdutoController.index);
route.get("/produto/:id", ProdutoController.show);
route.post("/produto", ProdutoController.store);
route.put("/produto/:id", ProdutoController.update);
route.delete("/produto/:id", ProdutoController.delete);

// exportação do arquivo
module.exports = route;
