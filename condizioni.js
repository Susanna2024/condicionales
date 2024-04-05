
function eta (){
    let eta= (document.getElementById('edad').value);

// Verifica se l'utente ha raggiunto l'età minima
if (eta >= 18) {
  resultado.innerHTML='Welcome to the Iron Disco!';
}
if (eta < 18) {
    resultado.innerHTML='Sorry,come back when you are of age';
  }

}







