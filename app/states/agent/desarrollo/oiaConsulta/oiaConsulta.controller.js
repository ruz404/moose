angular.module('moose').controller('oiaConsultaController', oiaConsultaController);

oiaConsultaController.$inject=[];

function oiaConsultaController(){
  var vm=this;

  vm.consulta = [
    {string: "Fecha", dato: "2015-12-23"},
    {string: "Semanas de Trabajo", dato:"54"},
    {string: "Objetivos de Ingresos", dato:"1,000,000"},
    {string: "Prima Promedio Anual", dato:"20,000"},
    ];

    vm.consultados = [
      {string: "Comisión Promedio/Poliza", dato: "20,000"},
      {string: "Comisión Promedio", dato:"30"},
      {string: "Meta en Pólizas Anual", dato:"-7"},
      {string: "% de NO tomadas", dato:"4%"},
      ];

      Highcharts.chart( 'container', {
    		chart: {
    			type: 'funnel',
    		},
    		title: {
    			text: '',
    		},
    		plotOptions: {
    			series: {
    				dataLabels: {
    					enabled: false,
    					format: '<b>{point.name}</b> ({point.y:,.0f})',
    					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
    					softConnector: true
    				},
    				neckWidth: '40%',
    				neckHeight: '0%'
    				//-- Other available options
    				// height: pixels or percent
    				// width: pixels or percent
    			},
    		},
    		series: [{
    			name: 'Formas',
    			data: [
            [ 'en proceso', 0 ],
            [ 'Contactos', 1 ],
            [ 'Citas', 14 ],
    				[ 'Entrevistas I', 14 ],
    				[ 'Entrevistas C', 1 ],
    				[ 'Solicitudes', 1 ],
    				[ 'Casos pagados', 1 ]
    			]
    		}]
    	});
}
