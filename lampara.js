

function verificarEnchufe(respuesta) {
    console.log("Respuesta enchufe:", respuesta);
    
    // Controllo se la risposta è 'si' o 'no'
    if (respuesta === 'si') {
        // Mostro la seconda domanda
        document.getElementById('pregunta2').style.display = 'block';
    } else if (respuesta === 'no') {
        // Visualizzo un messaggio se la risposta è 'no'
        document.getElementById('respuesta').textContent = 'Enchufarla';
    } else {
        // Messaggio di log se la risposta non è 'si' o 'no'
        console.log("Respuesta no reconocida");
    }
}

  function verificarFoco(respuesta) {
    console.log("Respuesta foco:", respuesta);
    
    // Controllo se la risposta è 'si' o 'no'
    if (respuesta === 'si') {
      document.getElementById('respuesta').textContent = 'Remplazar el foco'; // Visualizzo un messaggio se la risposta è 'si'
    } else if (respuesta === 'no') {
      document.getElementById('respuesta').textContent = 'Comprar nueva lámpara'; // Visualizzo un messaggio se la risposta è 'no'
    } else {
      console.log("Respuesta no reconocida"); // Messaggio di log se la risposta non è 'si' o 'no'
    }
  }
  
  
  