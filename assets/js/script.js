// Variables

let yourName;
let yourSurname;
let yourColor;
let yourPassword;
const passwordEl = document.getElementById("password");

// Ask name

yourName = prompt("Quale è il tuo nome?");

// Ask surname

yourSurname = prompt("Quale è il tuo cognome?");

// Ask color

yourColor = prompt("Quale è il tuo colore preferito?");

// Print password

yourPassword = yourName + yourSurname + yourColor + "23";
passwordEl.innerHTML = yourPassword;
