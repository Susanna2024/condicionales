
document.getElementById("colorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita il comportamento predefinito del modulo

  // Ottieni il valore del colore selezionato
  var color = document.getElementById("color").value;

  // Seleziona il div dove verrà visualizzata la risposta
  var respuestaDiv = document.getElementById("respuesta");

  // Controlla il colore scelto dall'utente e visualizza la risposta appropriata
  switch (color) {
    case "azul":
      respuestaDiv.textContent = "NOW YOU SEE THE SEA ";
      break;
    case "verde":
      respuestaDiv.textContent = "NOW YOU SEE THE NATURE";
      break;
    case "rojo":
      respuestaDiv.textContent = "NOW YOU SEE YOUR HEARTH";
      break;
    case "amarillo":
      respuestaDiv.textContent = "NOW YOU SEE THE SUN";
      break;
    case "violeta":
      respuestaDiv.textContent = "NOW YOU SEE THE MAGIC";
      break;
    default:
      respuestaDiv.textContent = "CHOOSE A COLOR, NOW YOU SEE NOTHING.";
  }
});

function verificarLampara() {
  // Chiedi all'utente se la lampara está conectada
  var conectada = prompt("¿La lámpara está conectada? (si/no)").toLowerCase();

  // Se la lampara è connessa, chiedi se la bombilla è rotta
  if (conectada === "si") {
    var bombillaRota = prompt("¿La bombilla está rota? (si/no)").toLowerCase();

    // Se la bombilla non è rotta, la lampara dovrebbe funzionare
    if (bombillaRota === "no") {
      document.getElementById("respuesta").textContent = "La lámpara debería funcionar. Comprueba la conexión eléctrica.";
    } else {
      document.getElementById("respuesta").textContent = "La bombilla está rota. Reemplázala para que la lámpara funcione.";
    }
  } else {
    document.getElementById("respuesta").textContent = "La lámpara no está conectada. Conéctala para que funcione.";
  }
}





