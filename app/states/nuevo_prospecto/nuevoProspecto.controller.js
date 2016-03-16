angular.module('moose').controller('nuevoProspectoController', nuevoProspectoController);

nuevoProspectoController.$inject =[];

function nuevoProspectoController(){
  var vm=this;

  vm.persona = {
    Ejecutivo: "Fernando Garza Gomez",
    Fuente: "Bolsa de Trabajo",
    Subfuente: "Bolsa de Trabajo",
    Agencia: "AXA Seguros",
    Telefono: "83476769",
    Celular: "8115283964",
    email: "dchavez5165@gmail.com",
    Nombre: "Fernando",
    ApellidoPaterno: "Garza",
    ApellidoMaterno: "Gomez",
  };

  function click(eventoclick){
    console.log( 1 );
  }
  vm.click=click;
}
