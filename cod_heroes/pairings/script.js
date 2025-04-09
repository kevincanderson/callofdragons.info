
const heroList = [];
const heroListDropdown = document.getElementById("heroes");

fetch("heroes.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((hero) => {
            const heroPlusRelease = hero.name.toUpperCase();
            heroList.push(heroPlusRelease);
            heroListDropdown.innerHTML += `<option value="${heroPlusRelease}">${heroPlusRelease}</option>`;
        });
    })
    .catch((error) => console.error("Error fetching the JSON file:", error));



    const selectElement = document.getElementById("heroes");

    selectElement.addEventListener("change", function(event) {
      const selectedValue = event.target.value;
    //   console.log("Selected value:", selectedValue);
      // Perform actions based on the selected value
        fetch("heroes.json")
        .then((response) => response.json())
        .then((data) => {
            const selectedHero = data.find(hero => hero.name.toUpperCase() === selectedValue);
            if (selectedHero) {
                const heroName = selectedHero.name;
                const heroDescription = selectedHero.description;

                const heroesContainer = document.getElementById("hero-info");
                heroesContainer.innerHTML = ``;
                heroesContainer.innerHTML += `
                <div href="" class="hero-card">
                <div class="hero-info-container">
                <div class="hero-info-top">
                <p class="hero-title">${selectedHero.heroTitle}</p>
                  <a href="./heroguide/${selectedHero.name}" class="hero-link"><h2 class="hero-name">${selectedHero.name}</h2></a>
                <p class="hero-specialization">${selectedHero.specializations.specializationOne} | ${selectedHero.specializations.specializationTwo} | ${selectedHero.specializations.specializationThree}</p>
                </div>
                <div class="hero-info-bottom">
                <img src="faction-icons/${selectedHero.faction}.png" class="faction-icon">
                <p class="hero-rarity-${selectedHero.rarity}">${selectedHero.rarity}</p>
                </div>
                </div>
                <div class="hero-image-container">
                <img src="hero-images/${selectedHero.name}.png" class="hero-image">
                </div>
              `;
              console. clear()
            }
        })
    });




