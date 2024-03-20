const form = document.getElementById("form");
const action = document.getElementById("action-checkbox");
const adventure = document.getElementById("adventure-checkbox");
const comedy = document.getElementById("comedy-checkbox");
const fantasy = document.getElementById("fantasy-checkbox");
const sciFi = document.getElementById("sciFi-checkbox");
const drama = document.getElementById("drama-checkbox");
const elements = document.querySelectorAll(".input-item");
const btn = document.getElementById("send-btn");
const error_message = document.querySelector(".error-message");

const arr = [action, adventure, comedy, fantasy, sciFi, drama];
const genre = [];
const obj = {};

//!DONE
const capturingValues = () => {
  for (let i = 0; i < elements.length; i++) {
    const names = elements[i].name;
    const values = elements[i].value;

    obj[names] = values;
  }
  console.log(obj);
  return obj;
};

//!DONE
const isChecked = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked) genre.push(arr[i].value);
  }
  console.log(genre);
  return genre;
};

//!DONE
const checkNotNull = () => {
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
    setTimeout(() => {
      form.reset();
    }, 2000);
  }
};

//! MAIN EVENT
const onSubmit = (e) => {
  e.preventDefault();

  
  capturingValues();

  isChecked();

  checkNotNull();
};

form.addEventListener("submit", onSubmit);
