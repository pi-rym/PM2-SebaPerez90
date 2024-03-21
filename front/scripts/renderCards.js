const main_cont = document.querySelector(".main-section-container");

function transformDataToElement(dataFetched) {
  dataFetched.map((item) => {
    const card_info_container = document.createElement("section");

    card_info_container.classList.add("movie-card");

    card_info_container.innerHTML = `
      <div class=image-container>
          <img class='poster' src=${item.poster} alt=${item.title} />
      </div>
      <div class="data-container">
          <h1>${item.title}</h1>
          <span class='rate'><strong>⭐</strong> ${item.rate}</span>
          <div class='more-details'>
              <span>director: ${item.director}</span>
              <span>año: ${item.year}</span>
          </div>
          <span class='genre'>${item.genre[0]} | ${item.genre[1]}</span>
      </div>
      `;

    main_cont.appendChild(card_info_container);
  });
}

module.exports = transformDataToElement;
