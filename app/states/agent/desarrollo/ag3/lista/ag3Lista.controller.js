angular.module( 'moose' ).controller( 'ag3ListaController', ag3ListaController );

ag3ListaController.$inject = ['$filter', '$timeout'];

function ag3ListaController($filter, $timeout){
  var vm = this;
  var orderBy = $filter('orderBy');

  vm.prueba = prueba;

  vm.ordenar = ordenar;
    vm.ordering='ASC';
    vm.filtroActivo = ''; // string con nombre de atributo

  function prueba( item ) {   //el "item" es el que va entre {{item.atributo_del_objeto}}
    var target = document.getElementById( item.id ); //va el mismo item
    $timeout( function() {
      angular.element( target ).triggerHandler( 'click' );
    }, 0);

  }

  vm.ag3Array = [
    {fecha: "12/12/2015", score:250, iInterview: 14, cInterview:14, req:5, polizas: 4, hrsVenta: 158, id: '2'},
    {fecha: "24/01/2016", score:184, iInterview: 15, cInterview:14, req:6, polizas: 5, hrsVenta: 160, id: '1'},
    {fecha: "11/12/2015", score:100, iInterview: 16, cInterview:12, req:7, polizas: 6, hrsVenta: 125, id: '3'},
    {fecha: "14/12/2015", score:200, iInterview: 10, cInterview:13, req:8, polizas: 2, hrsVenta: 100, id: '4'},
    {fecha: "24/12/2015", score:245, iInterview: 28, cInterview:16, req:4, polizas: 6, hrsVenta: 101, id: '5'},
    {fecha: "13/12/2015", score:280, iInterview: 13, cInterview:17, req:5, polizas: 3, hrsVenta: 105, id: '6'},
    {fecha: "13/12/2015", score:235, iInterview: 01, cInterview:18, req:3, polizas: 3, hrsVenta: 120, id: '7'},
    {fecha: "07/12/2015", score:240, iInterview: 20, cInterview:15, req:5, polizas: 4, hrsVenta: 135, id: '8'},
    {fecha: "01/12/2015", score:250, iInterview: 25, cInterview:16, req:2, polizas: 1, hrsVenta: 180, id: '9'},
    ];

    vm.items = [
      {it:"Ver detalle"},
      {it:"Editar"},
    ];


active();

    /***************************************************/
    // despues las funciones se manipulan con puro javascript
    function active() {
      vm.reversa = false;
    }

    // vm.lista = orderBy( vm.lista, 'sem', false );  esta linea esta para pura referencia
    function ordenar( predicado ) { // es importante declarar la funcion y asignarla a una variable del vm
      vm.filtroActivo = predicado;
      vm.ordering = ( vm.ordering === 'ASC' ) ? 'DESC' : 'ASC';
      vm.predicado = predicado;
      vm.reversa = ( vm.predicado === predicado ) ? !vm.reversa : false;
      vm.ag3Array = orderBy( vm.ag3Array, vm.predicado, vm.reversa );
    }

}
