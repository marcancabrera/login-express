const Routes = require("./routes.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

class App {
  constructor() {
    this.init();
    this.initRoutes();
  }

  init = () => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.listen(3010, () => {
      console.log("Runnig at http://localhost:3010");
    });
  };

  initRoutes = () => {
    new Routes(app);
  };
}

new App();
