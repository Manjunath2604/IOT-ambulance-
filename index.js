const { log } = require("console");
const { Socket } = require("socket.io");
// const nodeServiceBase = require("nikki.node");
var nikki_node_1 = require("nikki.node");

// var srvBase = require("./src/serviceBase");

const app = require("express")();

var srvInst = new nikki_node_1.serviceBase();

// const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const server = app.listen(port);
const io = require("socket.io")(server);
srvInst.start();
app.get("/", (req, res) => {
  // srvInst.start();

  // console.log("ii");
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

  socket.on("chat message", (msg) => {
    console.log(socket);

    var nm = msg.n1;
    var n = msg.n;

    // console.log(nm);
    i.push(nm);

    // console.log(msg.n1 + "1");
    // const spawn = require("child_process").spawn;
    // const p = spawn("python", ["./py.py"]);
    // p.stdout.on("data", (data) => {
    //   var r = data.toString();
    //   console.log(r, "jiji");
    //   io.emit("chat messag", { nm, r });
    // });
    // srvInst.onData = function (data) {
    //   io.emit("chat messag", { data: data });
    // };
    io.emit("chat messag", { nm, n });
    // srvInst.stop();
  });
});

// // http.listen(port, () => {
// //   console.log(`Socket.IO server running at http://localhost:${port}/`);
// // });
// const express = require('express'); //requires express module
// const socket = require('socket.io'); //requires socket.io module
// const fs = require('fs');
// const app = express();
// var PORT = process.env.PORT || 3000;
// const server = app.listen(PORT); //tells to host server on localhost:3000

// //Playing variables:
// app.use(express.static('public')); //show static files in 'public' directory
// console.log('Server is running');
// const io = socket(server);

// var count = 0;

// //Socket.io Connection------------------
// io.on('connection', (socket) => {

//     console.log("New socket connection: " + socket.id)

//     socket.on('counter', () => {
//         count++;
//         console.log(count)
//         io.emit('counter', count);
//     })
// })
