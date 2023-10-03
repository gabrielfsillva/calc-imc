const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let descripiton = "";

  value.classList.add("attention");

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    descripiton = "Cuidado! Você está abaixo do peso!";
  } else if (bmi >= 18 && bmi <= 25) {
    descripiton = "Você está no peso ideal!";
    value.classList.remove("attention");
    value.classList.add("normal");
  } else if (bmi > 25 && bmi < 30) {
    descripiton = "Cuidado! Você está com sobrepreso!";
  } else if (bmi > 30 && bmi <= 35) {
    descripiton = "Cuidado! Você está com obesidade moderada!";
  } else if (bmi > 35 && bmi <= 40) {
    descripiton = "Cuidado! Você está com obesidade severa!";
  } else {
    descripiton = "Cuidado! Você está com obesidade morbida!";
  }

  value.textContent = bmi.replace(".", ",");
  document.getElementById("description").textContent = descripiton;
});
