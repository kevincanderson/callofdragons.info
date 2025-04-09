let heroesDataArr = [];

fetch('cod_heroes/heroes.json')
  .then((res) => res.json())
  .then((data) => {
    heroesDataArr = data; 
    console.log(heroesDataArr.alistair);
    heroesDataArr.forEach(hero => {
        heroesContainer.innerHTML += `
        <div href="" class="hero-card">
        <div class="hero-info-container">
        <div class="hero-info-top">
        <p class="hero-title">${hero.heroTitle}</p>
          <a href="./heroguide/${hero.name}" class="hero-link"><h2 class="hero-name">${hero.name}</h2></a>
        <p class="hero-specialization">${hero.specializations.specializationOne} | ${hero.specializations.specializationTwo} | ${hero.specializations.specializationThree}</p>
        </div>
        <div class="hero-info-bottom">
        <img src="faction-icons/${hero.faction}.png" class="faction-icon">
        <p class="hero-rarity-${hero.rarity}">${hero.rarity}</p>
        </div>
        </div>
        <div class="hero-image-container">
        <img src="hero-images/${hero.name}.png" class="hero-image">
        </div>
      `;
      });
    });
  
    displayHeroes();
  