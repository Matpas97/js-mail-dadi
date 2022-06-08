

//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Genero un numero random da 1 a 6 per il giocatore

let numberPlayer = Math.floor((Math.random() * 6) + 1);
console.log(numberPlayer);
//Genero un numero random da 1 a 6 per il comupter 

let numberComputer = Math.floor((Math.random() * 6) + 1);
console.log(numberComputer);

// Verifico il vincitore in base a chi fa il punteggio piu alto 
if(numberPlayer > numberComputer) {
    alert('Vince il Giocatore');
}
else if(numberComputer > numberPlayer) {
    alert('Vince il Computer');
}
else {
    alert('Pareggio');
}