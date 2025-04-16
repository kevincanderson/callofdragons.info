
const heroList = [];
const heroListDropdown = document.getElementById("heroes");
const heroFooterLinks = document.getElementById("hero-footer-links");



fetch("../heroes.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((hero) => {
            const heroName = hero.name.toUpperCase();
            heroList.push(heroName);
            heroListDropdown.innerHTML += `<option value="${heroName}">${heroName}</option>`;
            heroFooterLinks.innerHTML += `<a href="/heroes/${heroName.toLowerCase()}"><li>${heroName}</li></a>`
            const currentUrl = window.location.href;
            console.log(currentUrl.length - heroName.length);

        });
    })
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





