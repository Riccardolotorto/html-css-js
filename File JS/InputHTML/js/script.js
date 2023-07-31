function stampaDati() {
    // Recupero dati

    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var eta = document.getElementById("age").value;
    var genere = document.querySelector('input[name="gender"]:checked').value;
    var valutazione = document.getElementById("range").value;
    var messaggio = document.getElementById("message").value;

    //stampa dati
    var output = "<h1>Dati inseriti:</h1>";
    output += "<p><strong>Nome:</strong> " + nome + "</p>";
    output += "<p><strong>Email:</strong> " + email + "</p>";
    output += "<p><strong>Password:</strong> " + password + "</p>";
    output += "<p><strong>Età:</strong> " + eta + "</p>";
    output += "<p><strong>Genere:</strong> " + genere + "</p>";
    output += "<p><strong>Valutazione:</strong> " + valutazione + "</p>";
    output += "<p><strong>Messaggio:</strong> " + messaggio + "</p>";

    document.body.innerHTML = output + '<button onclick="window.location.reload()">Indietro</button>';
    
}

  