//controllare se un elemento è presente o meno in un array
let nomi = ["riccardo", "lorenzo", "armando", "luca", "andrea", "simone"];
let nome = prompt("inserisci un nome: ");

if (nomi.includes(nome)) {
    console.log("si");
} else {
    console.log("no");
}



console.log("-------------------------------------------");


//creare un evento al click di un bottone
bottone.onclick = function saluta() {
    alert("hai cliccato il bottone");
}

bottone2.onmouseover = function sopra() {
    alert("sei sul bottone");
}


//controllare se un elemento inserito è un numero o meno
let elemento = prompt("inserisci un elemento: ")
if (isNaN(elemento)) {
    console.log("stringa");
} else {
    console.log("numero");
}


console.log("-------------------------------------------");



//fare una funzione che conti la lunghezza di una stringa
function controllo(stringa) {
    let count = 0;
    for (carattere in stringa) {
        count++;
    }
    return count;
}

let parola = prompt("inserisci una parola:");
console.log(controllo(parola));