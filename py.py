const { log } = require("console");
 const { Socket } = require("socket.io");
 var nikki_node_1 = require("nikki.node");
 const app = require("express")();
 var srvInst = new nikki_node_1.serviceBase();
 const port = process.env.PORT | 3000;
 const server = app.listen(port);
 const io = require("socket.io")(server);
 srvInst.start();
 app.get("/", (req, res) => {
 console.log("ii");
 res.sendFile("index.html", { root: __dirname });
 });
 app.get("/anup", (req, res) => {
 console.log("ii");
 res.sendFile("index.html", { root: __dirname });
 });
 app.get("/anup", (req, res) => {
 console.log("ii");
 res.sendFile("index.html", { root: __dirname });
 });
 var i = [];
 io.on("connection", (socket) => {
 console.log(i);
 socket.emit("chatstater", i);
 console.log(socket.id);
 