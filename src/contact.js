function showContact() {
  const contact = document.querySelector(".contact");

  contact.addEventListener("click", () => {
    location.href = "http://127.0.0.1:5500/dist/contact.html#";
  });
}

export { showContact };