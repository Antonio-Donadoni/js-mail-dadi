// Per l'esercizio dei dadi creare un mini gioco in cui si lanciano due dadi,
// uno per il computer e uno per il giocatore e si determina chi ha vinto.

// var btnLanciaDadi = document.getElementById('lancia-dadi');
//
// btnLanciaDadi.addEventListener( 'click', function(){
//
// var dadoUser = Math.floor(Math.random()*6) +1;
// var dadoAI = Math.floor(Math.random()*6) +1;
// console.log(dadoUser);
// console.log(dadoAI);
//
// document.getElementById('risultato-user').innerHTML = "Il tuo punteggio: " + dadoUser;
// document.getElementById('risultato-ai').innerHTML = "Il punteggio avversario: " + dadoAI;
//
// if (dadoUser > dadoAI) {
//   document.getElementById('esito').innerHTML = "HAI VINTO!!!";
// }
//  else if (dadoUser < dadoAI) {
//    document.getElementById('esito').innerHTML = "HAI PERSO!!!";
//  }
//  else {
//    document.getElementById('esito').innerHTML = "PAREGGIO";
//  }
// });

/////////////////////////////////// JS MAIL CHECKER

// Per quello delle mail far inserire all'utente una mail e controllare se è nell'array,
// che contiene quelle valide. Dare all'utente un messaggio opportuno.

var btnInviaMail = document.getElementById('invia-mail');

btnInviaMail.addEventListener('click' , function() {

  var indirizziValidi = [ "pincopallo@gmail.com" , "tiziocaio@gmail.com", "proprioio@gmail.com"];
  var mailInserita =  document.getElementById('mail').value;
  console.log(mailInserita);


  for (var i = 0; i < indirizziValidi.length; i++) {

    if ( mailInserita === indirizziValidi[i]) {
      document.getElementById('testo').innerHTML = "Indirizzo Mail Valido";
      break;
    } else {
      document.getElementById('testo').innerHTML = "Indirizzo Mail NON Valido";
    }
  }






});
