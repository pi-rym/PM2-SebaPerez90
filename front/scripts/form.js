const form = document.getElementById("form");
const action = document.getElementById("action-checkbox");
const adventure = document.getElementById("adventure-checkbox");
const comedy = document.getElementById("comedy-checkbox");
const fantasy = document.getElementById("fantasy-checkbox");
const sciFi = document.getElementById("sciFi-checkbox");
const drama = document.getElementById("drama-checkbox");
const elements = document.querySelectorAll(".input-item");
const btn = document.getElementById("send-btn");
const btn_clear = document.getElementById("clear-btn");
const error_message = document.querySelector(".error-message");
const input_error = document.querySelector(".input-error");
const successfully_message = document.querySelector(".successfully-message");
const clear_message = document.querySelector(".successfully-message");

const arr = [action, adventure, comedy, fantasy, sciFi, drama];
const genre = [];
let movieData = {};

elements[3].addEventListener("change", (e) => {
  e.target.value > 2024
    ? (input_error.style.opacity = "1")
    : (input_error.style.opacity = "0");
});

const capturingValues = () => {
  for (let i = 0; i < elements.length; i++) {
    const names = elements[i].name;
    const values = elements[i].value;

    movieData[names] = values;
  }
  return movieData;
};

const isChecked = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked) genre.push(arr[i].value);
  }
  movieData = { ...movieData, genre };

  return movieData;
};

const checkInputsValues = () => {
  let count = 0;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].value) count++;
  }

  if (count < 5) {
    error_message.classList.toggle("showing-error");
    form.style.filter = "blur(1px)";
    btn.style.pointerEvents = "none";

    setTimeout(() => {
      form.style.filter = "blur(0)";
      btn.style.pointerEvents = "all";
      error_message.classList.remove("showing-error");
    }, 3000);
  } else {
    successfully_message.style.opacity = "1";
    setTimeout(() => {
      successfully_message.style.opacity = "0";
      form.reset();
    }, 5000);
  }
};

const createMovie = async (movieData) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  };

  try {
    const response = await fetch(
      "http://localhost:3000/movies/",
      requestOptions
    );
    const data = await response.json();
    console.log("Respuesta exitosa:", data);
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
  }
};

const onSubmit = (e) => {
  e.preventDefault();

  capturingValues();

  isChecked();

  checkInputsValues();

  createMovie(movieData);
};

form.addEventListener("submit", onSubmit);

const clearAllInputs = () => {
  form.reset();
  elements.forEach((item) => {
    item.style.backgroundColor = "#f00";
    item.style.transition = "1s";

    setTimeout(() => {
      item.style.backgroundColor = "#fff";
      item.style.transition = "1s";
    }, 800);
  });
};

btn_clear.addEventListener("click", clearAllInputs);
