document.getElementById("lancio").onclick = function() {
    // Nascondi il pulsante di avvio
    document.getElementById("start").style.display = "none";

    // Genera numeri casuali iniziali per entrambi i giocatori
    let playerNumber = Math.floor(Math.random() * 6) + 1;
    let computerNumber = Math.floor(Math.random() * 6) + 1;

    // Mostra immagini dei dadi iniziali
    document.getElementById("my-number").innerHTML = `<img src="img/dice-face-${playerNumber}.png" alt="Dice Face ${playerNumber}">`;
    document.getElementById("computer-number").innerHTML = `<img src="img/dice-face-${computerNumber}.png" alt="Dice Face ${computerNumber}">`;

    // Animazione: aggiorna i numeri a intervalli regolari
    let intervalId = setInterval(function() {
        // Genera nuovi numeri casuali
        playerNumber = Math.floor(Math.random() * 6) + 1;
        computerNumber = Math.floor(Math.random() * 6) + 1;

        // Aggiorna le immagini dei dadi visualizzate
        document.getElementById("my-number").innerHTML = `<img src="img/inverted-dice-${playerNumber}.png" alt="Dice Face ${playerNumber}">`;
        document.getElementById("computer-number").innerHTML = `<img src="img/inverted-dice-${computerNumber}.png" alt="Dice Face ${computerNumber}">`;
    }, 100); // Intervallo di aggiornamento: 100 millisecondi (0.1 secondi)

    // Termina l'animazione dopo un po' di tempo (ad esempio, 3 secondi)
    setTimeout(function() {
        clearInterval(intervalId); // Ferma l'animazione
        // Mostra le immagini finali dei dadi
        document.getElementById("my-number").innerHTML = `<img src="img/inverted-dice-${playerNumber}.png" alt="Dice Face ${playerNumber}">`;
        document.getElementById("computer-number").innerHTML = `<img src="img/inverted-dice-${computerNumber}.png" alt="Dice Face ${computerNumber}">`;

        // Condizioni di vittoria
        var result;
        if (playerNumber > computerNumber) {
            var element = document.getElementById("message");
            element.classList.add("firework");
            result = "HAI VINTO";
        } else if (playerNumber < computerNumber) {
            result = "HAI PERSO";
        } else {
            result = "PAREGGIO";
        }

        // Mostra il messaggio di risultato
        document.getElementById("message").style.display = "flex";
        document.getElementById("result").innerHTML = result;
    }, 3000); // Termina l'animazione dopo 3 secondi (3000 millisecondi)
};
