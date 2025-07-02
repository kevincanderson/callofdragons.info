const pathname = window.location.pathname;
const marker = "/heroes/";
const startIndex = pathname.indexOf(marker);

let heroName = null; // Define heroName in outer scope
if (startIndex !== -1) {
  const contentAfterHeroes = pathname.substring(startIndex + marker.length);
  heroName = contentAfterHeroes.slice(0, -1);
  console.log(heroName); 
} else {
  console.log("'/heroes/' not found in the string.");
}

const heroInfo_nickname = document.getElementById("hero-nickname");
const heroInfo_name = document.getElementById('hero-name');

if (heroName) {
  fetch("../heroes.json")
    .then((response) => response.json())
    .then((data) => {
      const heroInfo = data.find(hero => hero.name === heroName);
      console.log(heroInfo);
      heroInfo_name.innerHTML = `${heroInfo.name}`
      heroInfo_nickname.innerHTML = `${heroInfo.heroTitle}`
      // You can now use heroInfo to display hero details
    })
    .catch((error) => console.error("Error fetching the JSON file:", error));
}







