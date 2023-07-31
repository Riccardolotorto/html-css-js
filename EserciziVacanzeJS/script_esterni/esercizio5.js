function tariffa() {
    let posteggio = new Date(document.getElementById('data').value);
    let dataPosteggio = posteggio.getFullYear() + "-" + (posteggio.getMonth() + 1) + "-" + posteggio.getDate();
    let oggi = new Date();
    let dataOggi = oggi.getFullYear() + "-" + (oggi.getMonth() + 1) + "-" + oggi.getDate();
    let dataPosteggioVera = new Date(dataPosteggio);
    let dataOggiVera = new Date(dataOggi);

    //calcola la differenza in giorni tra le due date
    let differenzaMillisecondi = Math.abs(dataOggiVera - dataPosteggioVera);
    let differenzaGiorni = Math.ceil(differenzaMillisecondi / (1000 * 60 * 60 * 24));

    let prezzo;
    if (differenzaGiorni < 1) {
        prezzo = 50;
        alert('la tariffa da pagare é: ' + prezzo);
    } else if (differenzaGiorni > 1 && differenzaGiorni < 2) {
        prezzo = 90;
        alert('la tariffa da pagare é: ' + prezzo);
    } else if (differenzaGiorni > 2 && differenzaGiorni <= 5) {
        prezzo = 40 * differenzaGiorni;
        alert('la tariffa da pagare é: ' + prezzo);
    } else if (differenzaGiorni > 5 && differenzaGiorni <= 14) {
        prezzo = 36 * differenzaGiorni;
        alert('la tariffa da pagare é: ' + prezzo);
    } else if (differenzaGiorni > 14) {
        prezzo = 600;
        alert('la tariffa da pagare é: ' + prezzo);
    }
}