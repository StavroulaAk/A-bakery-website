function displayMainHeading() {
  const content = document.querySelector("#content");

  const nameRestaurant = document.createElement("h1");
  nameRestaurant.textContent = "Kahvaltı time";
  content.appendChild(nameRestaurant);
}

export {displayMainHeading};