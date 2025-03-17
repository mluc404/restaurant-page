import "./menu.css";
import "./contact.css";
import "./style.css";

import pageLoadFunc from "./initial-load.js";
import contactFunc from "./contact.js";
import menuFunc from "./menu.js";

window.onload = pageLoadFunc;

// Home Button Page
let homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", pageLoadFunc);

// Menu Button Page
let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", menuFunc);

//Contact Button Page
let contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click", contactFunc);
