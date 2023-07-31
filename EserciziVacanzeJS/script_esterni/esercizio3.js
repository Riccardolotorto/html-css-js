let dati = [
    {
        "luogo": "Milano",
        "latitudine": 45.4654219,
        "longitudine": 9.1859243,
        "altitudine": 120, 
        "clima": "temperato umido"
    },
    {
        "luogo": "Roma",
        "latitudine": 41.9027835,
        "longitudine": 12.4963655,
        "altitudine": 21, 
        "clima": "mediterraneo"
    },
    {
        "luogo": "Aosta",
        "latitudine": 45.734955,
        "longitudine": 7.313076,
        "altitudine": 583, 
        "clima": "alpino"
    },
    {
        "luogo": "Palermo",
        "latitudine": 38.1156879,
        "longitudine": 13.3612671,
        "altitudine": 14, 
        "clima": "mediterraneo"
    }
];

function stampaDati(luoghi) {
    for (let luogo of luoghi) {
        for (let proprieta in luogo) {
            console.log(proprieta + ":" + luogo[proprieta]);
        }
    }
}
button1.onclick = function() {
    arr1 = dati.sort(function(a,b) {return b.altitudine - a.altitudine});
    stampaDati(arr1);
}
button2.onclick = function() {
    arr2 = dati.sort(function(a,b) {return a.clima.localeCompare(b.clima)});
    stampaDati(arr2);
}