// import express from "express";
// import { Router } from "express";
const express = require('express');
const Controller = require("./controller");

const router = express.Router();

class Routes {
    constructor(app=express()){
        const methods = new Controller();
        router.post("/user", methods.postUser);
        router.get("/", methods.getUser);
        router.get("/login", methods.login);
        app.use(router);
    }
}


module.exports = Routes;