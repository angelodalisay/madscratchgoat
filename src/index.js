// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) =>  {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });



// const helloDiv = document.createElement("div");
// helloDiv.innerHTML = "Hello from Javascript!";
// document.body.append(helloDiv);

// const sayHelloManyTimes = (times) =>
//   new Array(times).fill(1).map((_, i) => `Hello ${i + 1}`);

// const helloDiv = document.createElement("div");
// helloDiv.innerHTML = sayHelloManyTimes(10).join("<br/>");
// document.body.append(helloDiv);


import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./Hello";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Hello />);