let test = document.body;

let tabla = document.createElement("table");

let elsoSor = document.createElement("tr");

for (let i = 0; i < 4; i++) {
let tableHead = document.createElement("th");
tableHead.innerText = `${i}. elem: ${i + 1}`;
elsoSor.appendChild(tableHead);
}

tabla.appendChild(elsoSor);

test.appendChild(tabla);







































function myFunction() {
    alert("https://discord.gg/cyanlife");
}