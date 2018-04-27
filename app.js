var start = confirm('Lista para iniciar la trivia');

if (start) {
  var pregunta1 = prompt('¿En qué país se realizará el mundial de este año?').toUpperCase();
  var pregunta2 = prompt('¿En qué país se realizó en mundial del 2014?').toUpperCase();
  var pregunta3 = prompt('¿Qué país fue el campeón del mundial África 2010?').toUpperCase();
  alert('Veamos tu resultado');
  var correct = 0
  var incorrect = 0
  if (pregunta1 == 'RUSIA') {
    correct++
  }else {
    incorrect++
  }
  if (pregunta2 == 'BRASIL') {
    correct++
  }else {
    incorrect++
  }
  if (pregunta3 == 'ESPAÑA') {
    correct++
  }else {
    incorrect++
  }
document.write('¿En qué país se realizará el mundial de este año? <div> Rusia </div>');
document.write('¿En qué país se realizó en mundial del 2014? <div> Brasil </div>');
document.write('¿Qué país fue el campeón del mundial África 2010? <div> España </div>');
document.write('Tienes ' + correct + ' respuestas correctas y ' + incorrect + ' respuestas incorrectas');
}else {
  document.write('¡Que pena! <div> Será para una próxima </div>')
}
