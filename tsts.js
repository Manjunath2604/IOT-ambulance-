"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var log = require("console").log;
var Socket = require("socket.io").Socket;
// const { nodeServiceBase } = require("nikki.node");
var nikki_node_1 = require("nikki.node");
// var srvBase = require("./src/serviceBase");
var app = require("express")();
var srvInst = new nikki_node_1.serviceBase();
// const http = require('http').Server(app);
var port = process.env.PORT || 3000;
var server = app.listen(port);
var io = require("socket.io")(server);
srvInst.start();
var count = 0;
setInterval(function () {
    count++;
    srvInst.sendData({ count: count });
}, 3000);
var myderv = /** @class */ (function (_super) {
    __extends(myderv, _super);
    function myderv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myderv.prototype.onData = function (data) {
        io.emit("chat messag", { data: data });
    };
    return myderv;
}(nikki_node_1.serviceBase));
app.get("/", function (req, res) {
    srvInst.start();
    console.log("ii");
    res.sendFile("index.html", { root: __dirname });
});
app.get("/anup", function (req, res) {
    console.log("ii");
    res.sendFile("index.html", { root: __dirname });
});
app.get("/anup", function (req, res) {
    console.log("ii");
    res.sendFile("index.html", { root: __dirname });
});
var i = [];
io.on("connection", function (socket) {
    console.log(i);
    socket.emit("chatstater", i);
    console.log(socket.id);
    socket.on("chat message", function (msg) {
        console.log(socket.id);
        var nm = msg.n1;
        var n = msg.n;
        // console.log(nm);
        // i.push(nm);
        console.log(msg.n1 + "1");
        var spawn = require("child_process").spawn;
        var p = spawn("python", ["./py.py"]);
        p.stdout.on("data", function (data) {
            var r = data.toString();
            console.log(r, "jiji");
            io.emit("chat messag", { nm: nm, r: r });
        });
        io.emit("chat messag", { nm: nm, n: n });
        srvInst.stop();
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
