angular.module( 'moose' ).controller('equipoController', equipoController);

equipoController.$inject =[];

function equipoController(){
  var vm=this;

  vm.equipo = [
    {Nombre: "David Chavez Espejo", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Ramón Ornelas Aguirre", UP:"Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Salvador Herrara Tamez", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Carlos Vargas Gutierrez", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Gabriel García Márquez", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Carlos Alberto Ortega Martín del Campo", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Alejandra María Sánchez Abia", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Alejandra María Sánchez Abia", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Alejandra María Sánchez Abia", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    ];
  }
