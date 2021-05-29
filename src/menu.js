import basil from "./images/basil-leaves.jpg";
import pasta from "./images/pasta.jpg";
import sandwich from "./images/vegetable-sandwich.jpg";
import potato from "./images/fried-potato.jpg";
import rice from "./images/fried-rice.jpeg";
import bbq from "./images/grill-bbq.jpg";
import cake from "./images/cupcakes.jpg";
import pizza from "./images/pizza.jpg";

const menuList = [
  {
    title: "Basil Leaves and Avocado on Sliced Bread",
    imageSrc: basil,
  },
  {
    title: "Vegetable Sandwich",
    imageSrc: sandwich,
  },
  {
    title: "Pasta",
    imageSrc: pasta,
  },
  {
    title: "Fried potato",
    imageSrc: potato,
  },
  {
    title: "Grilled BBQ",
    imageSrc: bbq,
  },
  {
    title: "Fried rice",
    imageSrc: rice,
  },
  {
    title: "Cupcake",
    imageSrc: cake,
  },
  {
    title: "Pizza",
    imageSrc: pizza,
  },
];

const generateMenuContent = () => {
  const main = document.createElement("main");
  main.className = "tab-menu";

  const menuarea = document.createElement("div");
  menuarea.className = "menu";

  const h1 = document.createElement("h1");
  h1.textContent = "MENU";

  main.append(h1, menuarea);

  for (const menu of menuList) {
    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = menu.imageSrc;
    image.alt = menu.title;

    const info = document.createElement("div");
    info.className = "card-info";

    const p = document.createElement("p");
    p.textContent = menu.title;

    info.appendChild(p);
    card.append(image, info);
    menuarea.appendChild(card);
  }
  return main;
};

console.log(menuList);

export default generateMenuContent;
