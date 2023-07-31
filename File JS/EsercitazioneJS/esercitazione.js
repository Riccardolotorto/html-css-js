/*
Crea uno script che chieda all'utente di inserire 4 numeri; dopo che l'utente avrà inserito i 4 numeri dovrai stamparli sulla console in ordine decrescente (dal più grande al più piccolo).
Dovrai validare l'input dell'utente in maniera tale da impedire l'inserimento di valori non numerici.
*/


function restituisci_input(nElementi) {
    let numeri = [];
    for (let i = 0; i < nElementi; i++) {
        let numero;
        do  {
            numero = prompt("inserisci un numero: ");
        } while (isNaN(numero))
        numeri.push(numero);
    }
    return numeri.sort(function(a, b){return b-a});
}

let arr = restituisci_input(4);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

