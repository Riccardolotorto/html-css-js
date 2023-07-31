/*
Realizzare una pagina html che contiene un input button e un input text.
Per i due input dovrai gestire degli eventi:
input button: al click devi valutare se il click è stato fatto col pulsante destro, sinistro o centrale 
(scrivi il risultato nella console oppure mostralo con un alert)

input text: al keydown devi valutare quale tasto è stato premuto e, se è una lettera, 
indicare se oltre alla lettera è stato premuto anche il tasto ctrl, il tasto shift o entrambi
*/

const btn = document.getElementById("bottone");
btn.addEventListener("mousedown", function(event) {
    switch(event.button) {
		case 0:
			console.log("Hai cliccato con il pulsante sinistro");
			break;
		case 1:
			console.log("Hai cliccato con il pulsante centrale");
			break;
		case 2:
			console.log("Hai cliccato con il pulsante destro");
			break;
	}
});



console.log("------------------------------------------------")

const txt = document.getElementById("testo");
txt.addEventListener("keydown", function(event) {
    const lettera = event.key;
    if (/[a-zA-Z]/.test(lettera)) {   //controllo se la lettere fa parte dell'alfabeto
        const ctrl = event.ctrlKey;
        const shift = event.shiftKey;
        if (ctrl && shift) {
            console.log("Hai premuto", lettera, "con ctrl e shift");
        } else if (ctrl) {
            console.log("Hai premuto", lettera, "con ctrl");
        } else if (shift) {
            console.log("Hai premuto", lettera, "con shift");
        } else {
            console.log("Hai premuto", lettera);
        }
    }
});