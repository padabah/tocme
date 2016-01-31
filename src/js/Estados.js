var minijuego1 = { state_name : 'mini1', passed : false };
var minijuego2 = { state_name : 'minijuego02', passed : false, initial: true};
var minijuego3 = { state_name : 'minijuego03', passed : false };
var minijuego4 = { state_name : 'minijuego04', passed : false };

minijuego2.next_states = [minijuego1];
minijuego1.next_states = [minijuego3, minijuego4];
minijuego3.next_states = [minijuego4];
minijuego4.next_states = [minijuego3];

var listaCompleta = [minijuego1, minijuego2, minijuego3, minijuego4];
var estadosViables = null;

var logros = [0, 0, 0, 0, 0, 0];

function Estados() {

}

Estados.actualizarSiguientes = function(passedState){
  var next_states = [];
  for(var i in listaCompleta){
    if(passedState == undefined && listaCompleta[i].initial){
      next_states.push(listaCompleta[i]);
    }
    else if (passedState == listaCompleta[i]){
      listaCompleta[i].passed = false;
      return Estados.filterNotPassed(listaCompleta[i].next_states);
    }
  }
  return next_states;
}

Estados.filterNotPassed = function(estadosSiguientes){
  var notPassed = [];
  for(var i in estadosSiguientes){
    if(!estadosSiguientes[i].passed){
      notPassed.push(estadosSiguientes[i]);
    }
  }
  return notPassed;
}
