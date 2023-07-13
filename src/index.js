import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './css/index.css'
import './css/about.css'
import './css/carousel.css'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
