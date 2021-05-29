import "./style.css";
import { generateHeader, toggleActiveNav } from "./header";

const content = document.querySelector("#content");

const navList = ["home", "menu", "contact"];
const header = generateHeader("FOODIE", navList);
content.append(header);
toggleActiveNav(navList[0]);
