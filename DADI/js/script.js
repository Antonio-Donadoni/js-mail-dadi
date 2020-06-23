// Per l'esercizio dei dadi creare un mini gioco in cui si lanciano due dadi,
// uno per il computer e uno per il giocatore e si determina chi ha vinto.

var btnLanciaDadi = document.getElementById('lancia-dadi');

btnLanciaDadi.addEventListener('click' , function() {

var dadoUser = Math.floor(Math.random()*6) +1;
var dadoAI = Math.floor(Math.random()*6) +1;
console.log(dadoUser);
console.log(dadoAI);
document.getElementById('risultato-user').innerHTML = "IL TUO PUNTEGGIO ";
document.getElementById('risultato-ai').innerHTML = "PUNTEGGIO AVVERSARIO";

var facceDadi = ["", "fas fa-dice-one", "fas fa-dice-two", "fas fa-dice-three", "fas fa-dice-four", "fas fa-dice-five", "fas fa-dice-six"  ]

for (var i = 0; i < facceDadi.length; i++) {
if ( i == dadoUser) {
    document.getElementById("dado-user").className = facceDadi[i];
    break;
}
}

for (var i = 0; i < facceDadi.length; i++) {
if ( i == dadoAI) {
    document.getElementById("dado-ai").className = facceDadi[i];
    break;
}
}


if (dadoUser > dadoAI) {
  document.getElementById('esito').innerHTML = "HAI VINTO!!!";
  }
 else if (dadoUser < dadoAI) {
   document.getElementById('esito').innerHTML = "HAI PERSO!!!";
 }
 else {
   document.getElementById('esito').innerHTML = "PAREGGIO";}

});
