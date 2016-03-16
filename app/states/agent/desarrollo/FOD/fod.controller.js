angular.module( 'moose' ).controller( 'fodController', fodController );

fodController.$inject = [];

function fodController(){
  var vm = this;

  vm.fodNuevo = {
    np: "name"
  };

  vm.valores=[1,2,3,4,5];
  // vm.seccion = [
  //   {grupo1: 'Caracter e integridad'},
  //   {grupo2: 'Sentido común y agilidad mental'}
  // ];

  vm.secciones=[
      {seccion: 'Caracter e integridad'},
      {seccion: 'Sentido común y agilidad mental'},
      {seccion: "Empuje:"},
      {seccion: "Nivel de energía:"},
      {seccion: "Motivado por el dinero:"},
      {seccion: "Perseverancia/Constancia:"}
  ];

  vm.otros = [
    {sec: "Mercado Natural: "},
    {sec: "Apoyo familiar: "},
    {sec: "Estabilidad Financiera: "},
    {sec: "Imagen profesional: "},
    {sec: "Enfoque social: "},
    {sec: "Acuerdo de metas: "},
    {sec: "Autogestionable: "},
    {sec: "Enfoque en actividad: "},
    {sec: "Orientación a procesos: "},
    {sec: "Sentido de responsabilidad: "}
  ];

  vm.radioData=[
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' }
  ];


  vm.ciudades = ["Monterrey","San Pedro","San Nicolás","Guadalupe","Apodaca","Santa Catarina"];
  vm.entrevistaTipo = ["Inicial","Propuesta","Cierre","Adicional"];

  function click(eventoclick){

    console.log( 1 );
  }

  vm.click=click;

}


// {grupo1: "Caracter e integridad:"},
// {grupo2: "Sentido común y agilidad mental:"},
