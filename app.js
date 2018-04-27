//var user = prompt('Ingrese su nombre');
//console.log(user);

//var userName = document.getElementById("name");
//userName.textContent = 'Bienvenid@ ' + user.toUpperCase();
// Preguntando para confirmar iniciar el juego.
var start = confirm('Lista para iniciar la trivia');


if (start) {

  var pregunta1 = prompt('¿En qué país se realizará el mundial de este año?');
  
  var pregunta2 = prompt('¿En qué país se realizó en mundial del 2014?');
  
  var pregunta3 = prompt('¿Qué país fue el campeón del mundial África 2010?');
  
  alert('Veamos tu resultado');
  
  // Creando variables que guarden el puntaje de las respuestas correctas e incorrectas.
  var correct = 0
  var incorrect = 0
  
  // Creando variables de respuestas correctas e incorrectas

  var res1 = document.getElementsById("correcto1");
  var err1 = document.getElementsById("incorrecto1")
  var res2 = document.getElementsById("correcto2");
  var err2 = document.getElementsById("incorrecto2")
  var res3 = document.getElementsById("correcto3");
  var err3 = document.getElementsById("incorrecto3")



  // Comparando las respuestas para determinar el puntaje.
  if (pregunta1 == 'Rusia') {
    correct++;
    res1.textContent = "1. ¿En qué país se realizará el mundial de este año? Rspta: Rusia");
    
  }else {
    incorrect++;
    err1.textContent = "¿En qué país se realizará el mundial de este año?";
  }

  if (pregunta2 == 'Brasil') {
    correct++;
    res2.textContent = "¿En qué país se realizó en mundial del 2014?";
  }else {
    incorrect++;
    err2.textContent = "¿En qué país se realizó en mundial del 2014?";
  }
  
  if (pregunta3 == 'España') {
    correct++;
    res3.textContent = "¿Qué país fue el campeón del mundial África 2010?";
  }else {
    incorrect++;
    err3.textContent = "¿Qué país fue el campeón del mundial África 2010?";
  }

 //document.w'¿En qué país se realizará el mundial de este año? <div> Rusia</div>');
 // document.write('¿En qué país se realizó en mundial del 2014? <div> Brasil </div>');
 // document.write('¿Qué país fue el campeón del mundial África 2010? <div> España </div>');
 // document.write('Tienes ' + correct + ' respuestas correctas y ' + incorrect + ' respuestas incorrectas');
}else {
  //var menssageNegativo = document.getElementsById('noJuega');
  //menssageNegativo.textContent = '¡Qué pena!, Será para la próxima';
  document.write('<div>¡Que pena! Será para una próxima</div>')
}
