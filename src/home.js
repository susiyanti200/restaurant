const generateHomeContent = () => {
  const main = document.createElement("main");
  main.className = "tab-home";

  const hero = document.createElement("div");
  hero.className = "hero";

  const h1 = document.createElement("h1");
  h1.textContent = "All YOU CAN EAT BUFFET";

  const p = document.createElement("p");
  p.textContent =
    "Enjoy our current offering of delicious dishes, made with local ingredients sourced from our friends and neighbors.";

  const button = document.createElement("button");
  button.textContent = "View our menu";

  hero.append(h1, p, button);
  main.appendChild(hero);
  return main;
};

export default generateHomeContent;
