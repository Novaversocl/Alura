const userText = document.querySelector(".input-area");
const infoAlert = document.querySelector(".info-alert");
const warningAlert = document.querySelector(".warning-alert");
const messageContainer = document.querySelector(".message-container");
const outputArea = document.querySelector(".output-area");
const copyButton = document.getElementById("copy-btn");
const encryptButton = document.getElementById("encrypt-btn");
const decryptButton = document.getElementById("decrypt-btn");

// Función para validar si el texto solo contiene letras minúsculas y espacios
const isValidText = (text) => {
  // Verifica si el texto solo contiene letras minúsculas y espacios
  return /^[a-z\s]+$/.test(text);
};

// Función para habilitar o deshabilitar los botones
const updateButtonStates = (isEnabled) => {
  encryptButton.disabled = !isEnabled;
  decryptButton.disabled = !isEnabled;
};

// Función para mostrar mensajes de advertencia
const showWarning = (message) => {
  warningAlert.style.display = "block";
  warningAlert.textContent = message;
  infoAlert.style.display = "none";
  messageContainer.style.display = "block";
  outputArea.style.display = "none";
  copyButton.style.display = "none";
};

// Función para encriptar
const encryptText = (text) => {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
};

// Función para desencriptar
const decryptText = (text) => {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

// Función para copiar el texto
const copyText = () => {
  outputArea.select();
  document.execCommand("copy");
};

// Función para manejar el texto ingresado
const handleTextInput = () => {
  const userTextValue = userText.value.trim();

  if (userTextValue === "") {
    showWarning("You must enter some text.");
    userText.value = "";
    updateButtonStates(false);
  } else if (!isValidText(userTextValue)) {
    showWarning("Only lowercase letters are allowed. No accents or special characters.");
    updateButtonStates(false);
  } else {
    warningAlert.style.display = "none";
    infoAlert.style.display = "block";
    updateButtonStates(true);
  }
};

userText.addEventListener("input", handleTextInput);

encryptButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userTextValue = userText.value.toLowerCase().trim();

  if (userTextValue === "") {
    showWarning("You must enter some text.");
    userText.value = "";
  } else if (!isValidText(userTextValue)) {
    showWarning("Only lowercase letters are allowed. No accents or special characters.");
  } else {
    warningAlert.style.display = "none";
    infoAlert.style.display = "block";
    const encryptedText = encryptText(userTextValue);
    messageContainer.style.display = "none";
    outputArea.style.display = "block";
    outputArea.value = encryptedText;
    copyButton.style.display = "block";
  }
});

decryptButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userTextValue = userText.value.toLowerCase().trim();

  if (userTextValue === "") {
    showWarning("You must enter some text.");
    userText.value = "";
  } else if (!isValidText(userTextValue)) {
    showWarning("Only lowercase letters are allowed. No accents or special characters.");
  } else {
    warningAlert.style.display = "none";
    infoAlert.style.display = "block";
    const decryptedText = decryptText(userTextValue);
    messageContainer.style.display = "none";
    outputArea.style.display = "block";
    outputArea.value = decryptedText;
    copyButton.style.display = "block";
  }
});

copyButton.addEventListener("click", () => {
  copyText();
});
