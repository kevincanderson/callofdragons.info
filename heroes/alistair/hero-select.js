
const heroList = [];
const heroListDropdown = document.getElementById("heroes");
const heroFooterLinks = document.getElementById("hero-footer-links");
const heroInfo = document.getElementById("hero-info");
fetch("../heroes.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((hero) => {
            const heroName = hero.name.toUpperCase();
            heroList.push(heroName);
            heroListDropdown.innerHTML += `<option value="${heroName}">${heroName}</option>`;
            heroFooterLinks.innerHTML += `<a href="/heroes/${heroName.toLowerCase()}"><li>${heroName}</li></a>`
        });
        const currentUrl = window.location.href;
        const heroPage = currentUrl.slice((currentUrl.length - 9), currentUrl.length - 1);
        console.log(heroPage);
        data.filter((hero) => {
            const heroName = hero.name.toLowerCase();
            if (heroName === heroPage) {
              console.log(hero);
                heroInfo.innerHTML +=`<div id="hero-info-container" class="hero-info-container">
                                      <div class="hero-info-left">
                                      <p>${hero.heroTitle.toUpperCase()}</p>
                                      <h2>${hero.name.toUpperCase()}</h2>
                                      <p>${hero.specializations.specializationOne.toUpperCase()} | ${hero.specializations.specializationTwo.toUpperCase()} | ${hero.specializations.specializationThree.toUpperCase()}</p>
                                      </div>
                                      <div class="hero-info-right">
                                      <p class="hero-rarity hero-rarity-${hero.rarity}">${hero.rarity.toUpperCase()}</p>
                                      <img src="../../faction-icons/${hero.faction}.png" alt="${hero.faction}" class="faction-icon">
                                      </div>
                                      </div>
                                      
                                      <div id="hero-pairing-container" class="hero-pairings">
                                      </div>
                                      
                                      <div id="hero-pets-container" class="hero-pets"></div>`;
            }
        }
    )})
    .catch((error) => console.error("Error fetching the JSON file:", error));


// select hero and navigate to individual hero page
    const selectElement = document.getElementById("heroes");

    selectElement.addEventListener("change", function(event) {
      const selectedValue = event.target.value;
      console.log("Selected value:", selectedValue);
      // Perform actions based on the selected value
            const selectedHero = heroList.find(hero => hero.toUpperCase() === selectedValue);
            if (selectedHero) {
              if (selectedHero) {
                window.location.href = "/heroes/" + selectedValue.toLowerCase();
              }
            }
          });





