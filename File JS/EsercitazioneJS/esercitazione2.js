/*
Dati gli oggetti
{ "base": 4, "altezza": 5, "numero_lati": 3 } 
e 
{ "base": 4, "altezza": 5, "numero_lati": 4 }
che rappresentano rispettivamente un triangolo ed un rettangolo, costruire uno script (da inserire in una pagina html) 
in cui, in base alle proprietà dell'oggetto, viene calcolata l'area del poligono e mostrata all'utente tramite un alert.
*/

let oggetti = [{ base: 4, altezza: 5, numero_lati: 3 }, { base: 4, altezza: 5, numero_lati: 4 }];
for (let oggetto = 0; oggetto < oggetti.length; oggetto++) {
    if (oggetti[oggetto].numero_lati == 3) {
        alert((oggetti[oggetto].base * oggetti[oggetto].altezza) / 2)
    } else {
        alert(oggetti[oggetto].base * oggetti[oggetto].base)
    }
}
