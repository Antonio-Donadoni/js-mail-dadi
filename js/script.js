// Per l'esercizio dei dadi creare un mini gioco in cui si lanciano due dadi,
// uno per il computer e uno per il giocatore e si determina chi ha vinto.

var btnLanciaDadi = document.getElementById('lancia-dadi');

btnLanciaDadi.addEventListener('click' , function() {

var dadoUser = Math.floor(Math.random()*6) +1;
var dadoAI = Math.floor(Math.random()*6) +1;
console.log(dadoUser);
console.log(dadoAI);
document.getElementById('risultato-user').innerHTML = "Il tuo punteggio: ";
document.getElementById('risultato-ai').innerHTML = "Il punteggio dell'avversario: ";

if ( dadoUser == 1) {
  document.getElementById("dado-user").className = "fas fa-dice-one";
}
  else if (dadoUser == 2) {
    document.getElementById("dado-user").className = "fas fa-dice-two";
   }
  else if (dadoUser == 3) {
    document.getElementById("dado-user").className = "fas fa-dice-three";
   }
  else if (dadoUser == 4) {
    document.getElementById("dado-user").className = "fas fa-dice-four";
    }
  else if (dadoUser == 5) {
    document.getElementById("dado-user").className = "fas fa-dice-five";
   }
  else   document.getElementById("dado-user").className = "fas fa-dice-six";


  if ( dadoAI == 1) {
    document.getElementById('dado-ai').className = "fas fa-dice-one";
  }
    else if (dadoAI == 2) {
      document.getElementById('dado-ai').className = "fas fa-dice-two";
     }
    else if (dadoAI == 3) {
      document.getElementById('dado-ai').className = "fas fa-dice-three";
     }
    else if (dadoAI == 4) {
      document.getElementById('dado-ai').className = "fas fa-dice-four";
      }
    else if (dadoAI == 5) {
      document.getElementById('dado-ai').className = "fas fa-dice-five";
     }
    else   document.getElementById('dado-ai').className = "fas fa-dice-six";


if (dadoUser > dadoAI) {
  document.getElementById('esito').innerHTML = "HAI VINTO!!!";
  }
 else if (dadoUser < dadoAI) {
   document.getElementById('esito').innerHTML = "HAI PERSO!!!";
 }
 else {
   document.getElementById('esito').innerHTML = "PAREGGIO";}

});

/////////////////////////////////// JS MAIL CHECKER

// Per quello delle mail far inserire all'utente una mail e controllare se è nell'array,
// che contiene quelle valide. Dare all'utente un messaggio opportuno.

// var btnInviaMail = document.getElementById('invia-mail');
//
// btnInviaMail.addEventListener('click' , function() {
//
//   var indirizziValidi = [ "pincopallo@gmail.com" , "tiziocaio@gmail.com", "proprioio@gmail.com"];
//   var mailInserita =  document.getElementById('mail').value;
//   console.log(mailInserita);
//
//
//   for (var i = 0; i < indirizziValidi.length; i++) {
//
//     if ( mailInserita === indirizziValidi[i]) {
//       document.getElementById('testo').innerHTML = "Indirizzo Mail Valido";
//       break;
//     } else {
//       document.getElementById('testo').innerHTML = "Indirizzo Mail NON Valido";
//     }
//   }






// });
