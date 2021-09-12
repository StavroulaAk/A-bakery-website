const content = document.querySelector("#content");
const text = document.createElement("div");
text.classList.add("text")
content.appendChild(text);


function displayIntroText() {
  const introText = document.createElement("h3");
  introText.textContent =
    "our baked goods are made with organic, healthy ingredients from local farms and of course,";
  text.appendChild(introText);
}
export { displayIntroText };

function displayLogo() {
  const logo = document.createElement("h2");
  logo.textContent =
    "with love";
  text.appendChild(logo);
}
export{displayLogo}