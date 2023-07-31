/*
 Devi gestire i dati dei clienti di un'autofficina; per ogni auto devi memorizzare:
-nome del proprietario
-marca del mezzo
-modello del mezzo
-data immatricolazione
-data ultima revisione
Costruisci un array di oggetti strutturati in maniera appropriata e popolalo con questi dati:
-veicolo 1: Fiat Duna; proprietario: Mario Rossi; data immatricolazione: 4 Aprile 1993; data ultima revisione: 3 Aprile 2022
-veicolo 2: Alfa Romeo Giulietta; proprietario: Antonio Bianchi; data immatricolazione: 3 Ottobre 2018; non ancora revisionato
-veicolo 3: Subaru Baracca; proprietario: Luca Verdi; data immatricolazione: 20 Dicembre 2016; ultima revisione: 21 Dicembre 2020
-veicolo 4: Ford Focus; proprietario: Marco Gialli; data immatricolazione: 2 Febbraio 2019; data ultima revisione: 3 Marzo 2022

Da questo array ricava poi un array contenente i dati dei mezzi che necessitano di essere revisionati tenendo conto che i veicoli 
devono fare la revisione dopo 4 anni dalla data di immatricolazione e successivamente ogni 2 anni.

Dovrai creare una funzione che itera l'array dei mezzi e, in base alle date di immatricolazione e revisione e dei criteri indicate, 
determini se il mezzo è da revisionare o meno.
*/


let veicoli = [{nome: "MarioRossi", marca: "Fiat", modello: "Duna", dataImmatricolazioene: new Date(1993, 3, 4), dataRevisione: new Date(2022, 3, 3)},
{nome: "AntonioBianchi", marca: "AlfaRomeo", modello: "Giulietta", dataImmatricolazioene: new Date(2018, 9, 3), dataRevisione: new Date(0, 0, 0)},
{nome: "LucaVerdi", marca: "Sabaru", modello: "Baracca", dataImmatricolazioene: new Date(2016, 11, 20), dataRevisione: new Date(2020, 11, 21)},
{nome: "MarcoGialli", marca: "Ford", modello: "Focus", dataImmatricolazioene: new Date(2019, 1, 2), dataRevisione: new Date(2022, 2, 3)}];

function mezzi() {
    let risultato = [];
    for (let i = 0; i < 4; i++) {
        if ((veicoli[i].dataRevisione.getFullYear() - veicoli[i].dataImmatricolazioene.getFullYear()) == 2 || (veicoli[i].dataRevisione.getFullYear() - veicoli[i].dataImmatricolazioene.getFullYear()) == 4) {
            risultato.push("la macchina non e' da revisionare");
        } else {
            risultato.push("la macchina e' da revisionare");
        }
    }
    return risultato;
}

let ris = mezzi()
for (let i = 0; i < ris.length; i++) {
    console.log(ris[i]);
}
