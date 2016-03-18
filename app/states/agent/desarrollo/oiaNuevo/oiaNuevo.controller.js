angular.module('moose').controller('oiaNuevoController', oiaNuevoController);

oiaController.inject$=[];

function oiaNuevoController(){
  var vm=this;

  vm.dato = {
    metaanual: 20,
    primaprom: 20000,
    comisionprom: 35,
    comisionanualini: 250000,
    primasgmm: 500000,
    comisionanualreno: 60000,
    ingresostot: 310000,
    //primasvida: null,
    //comisionpromreno: null,
    ingresosanuales: null,
    //ingresosanualesdes: null,
    //ingresosanualesgmm: null,
    //ingresosanualesrenovida: null,
    //ingresosanualeseces: null,
    comisionpromvida: 15,
    primapromvida: 500000,
    indicevidas: 85,
    casosvida: 65,
    primaanual: 310000,
    solicitudes: 125,
    semtrabajadas: 40,
    llamadas: 500,
    contactos: 80,
    citas: 50,
    entrevistaini: 25,
    entrevistacierre: 15,
    gastom: 310000,
    difingresosanuales: 310000,
  };

  vm.nuevo = [
    {actividad: "Ingresos Anuales Necesiarios", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Casos Pagados de Vida", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "No Tomadas de Vida", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Solicitudes Ingresadas", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Entrevistas de Cierre", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Entrevistas Iniciales", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Citas Obtenidas", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Contactos Obtenidos", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Llamadas Necesiarias", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    ];

    vm.valor = [
      {actividad: "Valor de cada Llamada", resp:0},
      {actividad: "Valor de cada Prospecto", resp:0},
      {actividad: "Valor de cada Cita Obtenida", resp:0},
      ];

      vm.valordos = [
        {actividad: "Valor de cada Entrevista de Diagnóstico", resp:0},
        {actividad: "Valor de cada Entrevista de Cierre", resp:0},
        {actividad: "Valor de cada Caso Pagado", resp:0},
        ];
}
