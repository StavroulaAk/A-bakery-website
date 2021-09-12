function showMenu() {
  const menu = document.querySelector(".menu");

  menu.addEventListener("click", () => {
    location.href = "http://127.0.0.1:5500/dist/menu.html";
    // const products = document.createElement("p")
    // products.textContent = "hdehfjkdwfjk "
    // content.appendChild(products);
  });
}

export { showMenu };
