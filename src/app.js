const express = require("express");
const cors = require("cors");
const routes = require("./routes");

class App {
  constructor() {
    this.server = express();

    this.server.use(cors());
    require("./app/database");

    this.midleeware();
    this.routes();
  }

  midleeware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
