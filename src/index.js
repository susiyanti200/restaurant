import "./style.css";
import { generateHeader, toggleActiveNav } from "./header";
import generateHomeContent from "./home";
import generateMenuContent from "./menu";
import generateContactContent from "./contact";

const content = document.querySelector("#content");

const navList = ["home", "menu", "contact"];
const header = generateHeader("FOODIE", navList);
const navEl = header.querySelector("nav");

content.append(header);
toggleActiveNav(navList[0]);

const homeContent = generateHomeContent();
const menuContent = generateMenuContent();
const contactContent = generateContactContent();
content.append(homeContent);

const homeButton = homeContent.querySelector("button");
homeButton.addEventListener("click", () => {
  content.removeChild(content.lastElementChild);
  content.append(contentList[navList[1]]);
  toggleActiveNav(navList[1]);
  navEl.classList.add("nav-close");
});

const contentList = {
  home: homeContent,
  menu: menuContent,
  contact: contactContent,
};

navEl.addEventListener("click", (e) => {
  for (const nav of navList) {
    if (e.target.parentElement.id === `nav-${nav}`) {
      content.removeChild(content.lastElementChild);
      content.append(contentList[nav]);
      toggleActiveNav(nav);
      navEl.classList.add("nav-close");
    }
  }
});
