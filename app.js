const $cardHolderName = document.querySelector(".card-holder-name"); // 1. Je selectionne les éléments avec le javascript
const $cardHolder = document.querySelector(".card-holder");
const $cardNumberInput = document.querySelector(".cardNumber2");
const $cardNumber = document.querySelector(".card-number");
const $cardGetMonth = document.querySelector(".get-months");
const $cardExpMonth = document.querySelector(".exp-months");
const $cardGetYears = document.querySelector(".get-years");
const $cardExpYears = document.querySelector(".exp-years");
const $cardEnterCvc = document.querySelector(".enter-cvc");
const $cardCvcNumber = document.querySelector(".cvc-number");

const $confirmButton = document.querySelector(".confirmBtn");
const $nameErrorMessage = document.querySelector(".name-error-message");
const $numberErrorMessage = document.querySelector(".number-error-message");
const $dateErrorMessage = document.querySelector(".date-error-message");
const $CvcErrorMessage = document.querySelector(".cvc-error-message");

// 2. J'affiche l'élément dans la console

$cardHolderName.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Remplace tous les caractères non alphabétiques
});

$cardHolderName.addEventListener("keyup", function (e) {
  console.log(e.target.value);

  const holderName = e.target.value;

  if (holderName === "") {
    $cardHolder.textContent = "Jane Appleseed";
  } else if (/^[a-zA-Z\s]+$/.test(holderName)) {
    $cardHolder.textContent = holderName;
  } else {
    console.log(
      "Le nom du titulaire contient des caractères non alphabétiques."
    );
  }
});

$cardNumberInput.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, ""); // Remplace tous les caractères non numériques par une chaîne vide

  // Ajoute un espace tous les quatre caractères
  e.target.value = e.target.value.replace(/(.{4})/g, "$1 ").trim();
});

$cardNumberInput.addEventListener("keyup", function (e) {
  console.log(e.target.value);

  let numberCB = e.target.value.replace(/\s+/g, ""); // Supprime tous les espaces

  if (numberCB === "") {
    $cardNumber.textContent = "0000 0000 0000 0000";
  } else if (isNaN(Number(numberCB))) {
    console.log("Ne fais rien");
  } else {
    // Ajoute un espace tous les quatre caractères
    numberCB = numberCB.match(/.{1,4}/g).join(" ");
    $cardNumber.textContent = numberCB;
  }
});

$cardGetMonth.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");
});

$cardGetMonth.addEventListener("keyup", function (e) {
  console.log(e.target.value);

  const expMonth = e.target.value;

  console.log(typeof expMonth);

  console.log(Number(expMonth));

  console.log(typeof Number(expMonth));

  if (expMonth === "") {
    $cardExpMonth.textContent = "00";
  } else if (isNaN(Number(expMonth))) {
    console.log("Ne fais rien");
  } else {
    $cardExpMonth.textContent = expMonth;
  }
});

$cardGetYears.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");
});

$cardGetYears.addEventListener("keyup", function (e) {
  console.log(e.target.value);

  const expYears = e.target.value;

  if (expYears === "") {
    $cardExpYears.textContent = "00";
  } else if (isNaN(Number(expYears))) {
    console.log("Ne fais rien");
  } else {
    $cardExpYears.textContent = expYears;
  }
});

$cardEnterCvc.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");
});

$cardEnterCvc.addEventListener("keyup", function (e) {
  console.log(e.target.value);

  const cvcNumber = e.target.value;

  if (cvcNumber === "") {
    $cardCvcNumber.textContent = "000";
  } else if (isNaN(Number(cvcNumber))) {
    console.log("Ne fais rien");
  } else {
    $cardCvcNumber.textContent = cvcNumber;
  }
});

$confirmButton.addEventListener("click", function (e) {
  let isValid = true;

  if ($cardHolderName.value.length < 2) {
    $nameErrorMessage.classList.remove("hidden");
    isValid = false;
  } else {
    $nameErrorMessage.classList.add("hidden");
  }

  if ($cardNumberInput.value.length !== 19) {
    $numberErrorMessage.classList.remove("hidden");
    isValid = false;
  } else {
    $numberErrorMessage.classList.add("hidden");
  }

  if (
    $cardGetMonth.value.length !== 2 ||
    $cardGetMonth.value > 12 ||
    $cardGetMonth.value < 1 ||
    $cardGetYears.value.length !== 2 ||
    $cardGetYears.value < 25 ||
    $cardGetYears.value > 29
  ) {
    $dateErrorMessage.classList.remove("hidden");
    isValid = false;
  } else {
    $dateErrorMessage.classList.add("hidden");
  }

  if ($cardEnterCvc.value.length !== 3) {
    $CvcErrorMessage.classList.remove("hidden");
    isValid = false;
  } else {
    $CvcErrorMessage.classList.add("hidden");
  }

  if (isValid) {
    console.log($cardHolderName.value);
    console.log($cardNumberInput.value);
    console.log($cardGetMonth.value);
    console.log($cardGetYears.value);
    console.log($cardEnterCvc.value);

    alert("Merci pour votre enregistrement !");

    return true;
  } else {
    e.preventDefault();
    return false;
  }
});
