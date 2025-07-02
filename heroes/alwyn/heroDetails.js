const pathname = window.location.pathname;
const marker = "/heroes/";
const startIndex = pathname.indexOf(marker);

let heroName = null;
let heroNameFinal = null; // Define heroName in outer scope
if (startIndex !== -1) {
  const contentAfterHeroes = pathname.substring(startIndex + marker.length);
  heroName = contentAfterHeroes.slice(0, -1);
  heroNameFinal = heroName.replaceAll(" ", "");
  console.log(heroNameFinal); 
} else {
  console.log("'/heroes/' not found in the string.");
}

const heroInfo_nickname = document.getElementById("hero-nickname");
const heroInfo_name = document.getElementById('hero-name');
const heroInfo_specOne = document.getElementById('specialization-one')
const heroInfo_specTwo = document.getElementById('specialization-two')
const heroInfo_specThree = document.getElementById('specialization-three')

if (heroName) {
  fetch("../heroes.json")
    .then((response) => response.json())
    .then((data) => {
      const heroInfo = data.find(hero => hero.name === heroNameFinal);
      console.log(heroInfo);
      heroInfo_name.innerHTML = `${heroInfo.name}`
      heroInfo_nickname.innerHTML = `${heroInfo.heroTitle}`
      heroInfo_specOne.innerHTML = `${heroInfo.specializations.specializationOne}` 
      heroInfo_specTwo.innerHTML = `${heroInfo.specializations.specializationTwo}` 
      heroInfo_specThree.innerHTML = `${heroInfo.specializations.specializationThree}` 
      // You can now use heroInfo to display hero details
    })
    .catch((error) => console.error("Error fetching the JSON file:", error));
}







