import React from "react";
import ReactGA from 'react-ga';
import { createRoot } from "react-dom/client";
import App from "./App";
import './css/index.css'
import './css/about.css'
import './css/carousel.css'


const UA_ID = "G-9W1HCVT4SK";
ReactGA.initialize(UA_ID);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
