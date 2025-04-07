// const heroesContainer = document.getElementById('heroes-container');

// async function getData() {
//     const url = "heroes.json";
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//       data.forEach(hero => {
//         const heroDiv = document.createElement('div');
//         heroDiv.classList.add('hero');
//         heroDiv.innerHTML = `<div>
//             <img src="heroimages/avatar_${hero.name}.png" alt="${hero.name}" class="hero-avatar">
//             <p class="hero-title">${hero.heroTitle}</p>
//             <h3 class="hero-name">${hero.name}</h3>
//             <p class="hero-specialization">${hero.specializations.specializationOne} | ${hero.specializations.specializationTwo} | ${hero.specializations.specializationThree} </p><div>`;
//         heroesContainer.appendChild(heroDiv);
//       })
//     } catch (error) {
//       console.error(error.message);
//     }
// }

// // Call the function to fetch and display data  

//   getData();



const heroesContainer = document.getElementById('heroes-container');

let heroesDataArr = [];

fetch('heroes.json')
  .then((res) => res.json())
  .then((data) => {
    heroesDataArr = data; 
    console.log(heroesDataArr);
    heroesDataArr.forEach(hero => {
        heroesContainer.innerHTML += `
        <div class="hero-card">
        <div class="hero-info-container">
        <div class="hero-info-top">
        <p class="hero-title">${hero.heroTitle}</p>
          <h2 class="hero-name">${hero.name}</h2>
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
  