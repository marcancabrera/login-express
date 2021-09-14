const users = require("./db.js");

class Controller {
  postUser = (req, res) => {
    const user = req.body;
    users.push(user);
    console.log(users);
    res.status("201").send(user);
  };

  getUser = (req, res) => {
    res.send(users);
  };

  login = (req, res) => {
    const exists = users.forEach((user) => {
      if (user.user === req.body.user && user.password === req.body.password) {
        //   res
      }
    });
    res.status("200").send("logged");
    console.log("hello");
  };
}

module.exports = Controller;
