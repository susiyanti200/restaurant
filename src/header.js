const generateHeader = (title, menuList) => {
  const header = document.createElement("header");
  const logo = document.createElement("a");
  logo.textContent = title;
  logo.className = "logo";

  const hamburger = document.createElement("i");
  hamburger.className = "fas fa-bars";

  const nav = document.createElement("nav");
  nav.className = "nav-close";

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-close");
  });

  const ul = document.createElement("ul");
  for (const menu of menuList) {
    const a = document.createElement("a");
    a.textContent = menu;
    const li = document.createElement("li");
    li.id = `nav-${menu}`;
    li.append(a);
    ul.append(li);
  }
  nav.appendChild(ul);

  header.append(logo, hamburger, nav);
  return header;
};

const toggleActiveNav = (activeNav) => {
  const navlist = document.querySelectorAll("nav li");
  for (const li of navlist) {
    if (li.id === `nav-${activeNav}`) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  }
};

export { generateHeader, toggleActiveNav };
