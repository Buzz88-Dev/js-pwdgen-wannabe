
const nome = prompt("Come ti chiami?");
console.log(nome);

const cognome = prompt("Qual'è il tuo cognome?");
console.log(cognome);

const colore = prompt("Qual'è il tuo colore preferito?");
console.log(colore);

document.getElementById("mio_id").innerHTML = 'Ciao, mi chiamo ' + nome + " " + cognome + " e il mio colore preferito è il " + colore;

document.getElementById("secondo_id").innerHTML = `Mi chiamo ${nome} ${cognome} e il mio colore preferito è il ${colore}`;

document.getElementById("terzo_id").innerHTML = nome+cognome+colore+21;