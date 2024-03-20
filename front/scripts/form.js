const form = document.getElementById("form");
const action = document.getElementById("action-checkbox");
const adventure = document.getElementById("adventure-checkbox");
const comedy = document.getElementById("comedy-checkbox");
const fantasy = document.getElementById("fantasy-checkbox");
const sciFi = document.getElementById("sciFi-checkbox");
const drama = document.getElementById("drama-checkbox");

const arr = [action, adventure, comedy, fantasy, sciFi, drama];

const onSubmit = (e) => {
  e.preventDefault();

  let genre = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked === true) {
      genre.push(arr[i].value);

      console.log(genre);
    }
  }
};

form.addEventListener("submit", onSubmit);
