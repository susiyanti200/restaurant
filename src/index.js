import "./style.css";
import { generateHeader, toggleActiveNav } from "./header";
import generateHomeContent from "./home";
import generateContactContent from "./contact";

const content = document.querySelector("#content");

const navList = ["home", "menu", "contact"];
const header = generateHeader("FOODIE", navList);
content.append(header);
toggleActiveNav(navList[0]);

// const homeContent = generateHomeContent();
// content.append(homeContent);
const contactContent = generateContactContent();
content.append(contactContent);