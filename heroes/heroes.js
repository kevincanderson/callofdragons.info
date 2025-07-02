const heroes = document.getElementById("hero-list");
const heroList = [];
const heroLink = "";
fetch("../heroes.json")
    .then((response) => response.json())
    .then((data) => {
      
      data.forEach((hero) => {
        console.log(hero.name);
        heroes.innerHTML += `<a href="./${hero.name}" class="heroes-link">${hero.name}</a>`
       })
     })
     .catch((error) => console.error("Error fetching the JSON file:", error));







