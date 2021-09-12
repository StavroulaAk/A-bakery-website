const bar = document.querySelector(".bar");

function displayMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.textContent = "MENU";
  bar.appendChild(menu);
  menu.style.cursor = "pointer";
}

export { displayMenu };

function displayContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = "CONTACT";
  bar.appendChild(contact);
  contact.style.cursor = "pointer";
}

export { displayContact };