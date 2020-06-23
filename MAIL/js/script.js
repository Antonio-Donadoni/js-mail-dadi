
/////////////////////////////////// JS MAIL CHECKER
// 
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
