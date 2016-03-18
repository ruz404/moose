angular.module('moose').controller('ag2ConsultaController', ag2ConsultaController);

ag2ConsultaController.inject$=[];

function ag2ConsultaController(){
  var vm=this;

  vm.lista = {cliente: "Alejandra María Sánchez Abia", fecha:"24/12/15", telefono: "8115281739", sexo: "Femenino",
    dependientes:"5", edad: "36", ecivil:"Casado", piempleado:"Profesionista Independiente", ocupacion:"Arquitecta",
    empresa:"N/A", ingmensuales:"$25,000", fuente:"Honorarios", refobtenidos:"4",
    direccion:"Vereda de las privanzas 912 privanzas 6-7 sector cp 66277 San Pedro Garza García NL México",
    wuno: false, wdos: false, wtres: false, wcuatro:false, fechais:"24/12/15", fechaem:"24/12/15",
    pvendido:"Orvi 360 12p", sumaas:"$500,000", moneda:"MXN", paridad:"$500,000", comisiones:"$100,000",
    fechap:"24/12/15", fechae:"24/12/15", conducto:"Modo de Agente", formap:"Anual", prima:"$500,000",
    numpoliza:"548617951", fechas:"24/12/15", tuno: false, tdos: false, ttres: false, tcuatro:false,
    comentarios:"el señor comenta que es necesario reconsiderar los puntos platicados para mejorar el servicio que se le brinda diariamente",
  };
}
