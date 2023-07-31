/*
Tenendo in considerazione che:
1 yard = 90 cm (3 piedi)
1 piede = 30 cm (12 pollici)
1 pollice = 2,5 cm
Realizzare uno script (da inserire all'interno di una pagina html) che converta una misura in cm fornita in input dall'utente in yard, piedi e pollici in questa maniera:
1200 cm -> 13 yard, 1 piede, 0 pollici
1250 cm -> 13 yard, 2 piedi, 8 pollici 
*/

function convertitore(centimetri) {
    let yard = 0;
    let piede = 0;
    let pollice = 0;
    while (centimetri >= 90) {
        yard++;
        centimetri -= 90;
    }
    while (centimetri >= 30) {
        piede++;
        centimetri -= 30;
    }
    while (centimetri >= 2.5) {
        pollice++;
        centimetri -=2.5;
    }
    return [yard, piede, pollice];
}

let [yarde, piedi, pollici] = convertitore(prompt("inserisci un valore in centimetri: "));
alert(`Il valore in yard e' ${yarde}, il valore in pollici e' ${pollici} e il valore in piedi e' ${piedi}`);

