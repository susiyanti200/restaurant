const generateContactContent = () => {
  const main = document.createElement("main");
  main.className = "tab-contact";

  const h2 = document.createElement("h2");
  h2.textContent = "FIND US";

  const p = document.createElement("p");
  p.textContent = "777 Z 0th Street";

  const p1 = document.createElement("p");
  p1.textContent = "otw 1st-2nd JS - 0000";

  const p2 = document.createElement("p");
  p2.textContent = "SOMEWHERE - EARTH";

  const p3 = document.createElement("p");
  p3.textContent = "777 Z 0th Street";

  const h2_2 = document.createElement("h2");
  h2_2.textContent = "CALL US";

  const p4 = document.createElement("p");
  p4.textContent = "+0 999 8765432";

  const h2_3 = document.createElement("h2");
  h2_3.textContent = "WRITE US";

  const p5 = document.createElement("p");
  p5.textContent = "foodie@email.com";

  main.append(h2, p, p1, p2, p3, h2_2, p4, h2_3, p5);
  return main;
};

export default generateContactContent;
