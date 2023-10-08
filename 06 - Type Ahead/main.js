window.addEventListener("DOMContentLoaded", () => {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const cities = [];

  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => cities.push(...data));

  const handelText = (word) => {
    word = word.replace(/\./g, "\\.");

    return word.toLocaleLowerCase().replace(/\s+/g, " ").trim();
  };

  const handelMatches = (search) => {
    search = handelText(search);
    const regex = new RegExp(search, "gi");
    return cities.filter(
      (place) => place.city.match(regex) || place.state.match(regex)
    );
  };

  const handelSuggestiosn = (cities, word) => {
    suggestions.innerHTML = "";
    word = handelText(word);
    cities.map((city) => {
      const place = document.createElement("span");
      place.className = "name";
      let name = city.city + ", " + city.state;

      const regex = new RegExp(word.trim(), "gi");
      const matches = name.match(regex);

      if (matches) {
        name = name.replace(regex, `<span class="hl">${matches[0]}</span>`);
      }

      place.innerHTML = name;

      const population = document.createElement("span");
      population.className = "population";
      population.textContent = Number(city.population).toLocaleString();

      const newCity = document.createElement("li");
      newCity.appendChild(place);
      newCity.appendChild(population);

      suggestions.appendChild(newCity);
    });
  };

  function listCities() {
    const resCities = handelMatches(this.value);
    console.log("array length : " + resCities.length);
    handelSuggestiosn(resCities, this.value);
  }

  const searchInput = document.querySelector("input.search");
  const suggestions = document.querySelector("ul.suggestions");

  searchInput.addEventListener("change", listCities);
  searchInput.addEventListener("keyup", listCities);
});
