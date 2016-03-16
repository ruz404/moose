angular.module('moose').controller('compromisosController', compromisosController);

compromisosController.inject$=['$filter', '$mdDialog', '$scope'];

function compromisosController($filter, $mdDialog, $scope){
  var vm=this;

  var orderBy  = $filter( 'orderBy' );
	vm.ordering = 'ASC';
	vm.ordernar = ordenar; // se declara asi hasta arriba como interface

  vm.datos = [
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16", id:'1'},
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16", id:'2'},
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16", id:'3'},
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16", id:'4'}
  ];

    active();

/***************************************************/
// despues las funciones se manipulan con puro javascript
  function active() {
    vm.reversa = false;
    vm.datos = orderBy( vm.datos, 'usuario', false );
  }

  function ordenar( predicado ) { // es importante declarar la funcion y asignarla a una variable del vm
    vm.ordering = ( vm.ordering === 'ASC' ) ? 'DESC' : 'ASC';
    vm.predicado = predicado;
    vm.reversa = ( vm.predicado === predicado ) ? !vm.reversa : false;
    vm.datos = orderBy( vm.datos, vm.predicado, vm.reversa );
  }

//modular
  vm.showDialogPOP=showDialogPOP;
  vm.newDialogPOP=newDialogPOP;
function showDialogPOP($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl: 'states/agent/desarrollo/compromisos/dialogos/editarcompromiso.dialog.html',
         scope: $scope,
         preserveScope: true,
      });
   }

function newDialogPOP($event){
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        templateUrl: 'states/agent/desarrollo/compromisos/dialogos/nuevocompromiso.dialog.html',
        scope: $scope,
        preserveScope: true,
      });
}

function eliminar(){
  console.log("true");
}

vm.eliminar=eliminar;

   function aceptDialog(){
     $mdDialog.hide();
   }

   function cancelDialog(){
     $mdDialog.cancel();
   }

   vm.aceptDialog=aceptDialog;
   vm.cancelDialog=cancelDialog;

   function prueba( fecha ) {
     var target = document.getElementById( fecha.id );
     $timeout( function() {
       angular.element( target ).triggerHandler( 'click' );
     }, 0);

   }

}
