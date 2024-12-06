"use strict";
// import express from "express";
// const app = express();
// const port = 3000;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.get("/", (req, res) => {
//   res.send("Connect to node server!");
// });
// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
// Import the 'express' module along with 'Request' and 'Response' types from express
const express_1 = __importDefault(require("express"));
// Create an Express application
const app = (0, express_1.default)();
// Specify the port number for the server
const port = 3000;
// Define a route for the root path ('/')
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express!');
});
// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map