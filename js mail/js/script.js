//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.


// Chiedo all'utente la sua mail 

const userMail = prompt("Qual'è la tua mail ?");

// Lista user

const listLogin = ['mario.rossi@gmail.com','pippo-mauro@libero.com','francopluto@gmail.com','pincopallo99@gmail.com','passarellim@gmail.com'];
 

 // Controllo se la mia mail è nella lista list Login

 let mailFound = false;
 for(let i = 0; i < listLogin.length; i++) {
     const thisMail = listLogin[i];

     if(thisMail === userMail) {
         mailFound = true;
     }
 }
// Se la mail user è presente nell'lista array alora dico allo user che  presente altrimenti non lo è
 if(mailFound) {
     alert('La sua mail è presente nella lista userMail ');
 } 
 else {
     alert('La sua mail non è presente nella lista userMail');
 } 