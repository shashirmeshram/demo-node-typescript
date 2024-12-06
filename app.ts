// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Connect to node server!");
// });

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });


// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';

// Create an Express application
const app = express();

// Specify the port number for the server
const port: number = 3000;

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});