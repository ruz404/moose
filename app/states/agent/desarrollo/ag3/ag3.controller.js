angular.module('moose').controller('ag3Controller', ag3Controller);

ag3Controller.$inject =[];

function ag3Controller(){
  var vm=this;

  vm.lissemana = [
    {Parametro: "Referidos obtenidos", Actual:"35", Pasado: "54", Suma: "312", Promedio:"21"},
    {Parametro: "Llamadas realizadas", Actual:"150", Pasado: "12", Suma: "273", Promedio:"18"},
    {Parametro: "Contactos ", Actual:"21", Pasado: "12", Suma: "207", Promedio:"14"},
    {Parametro: "Citas Agendadas", Actual:"12", Pasado: "54", Suma: "227", Promedio:"15"},
    {Parametro: "Entrevistas iniciales", Actual:"1", Pasado: "98", Suma: "299", Promedio:"20"},
    {Parametro: "Entrevistas de cierre", Actual:"5", Pasado: "45", Suma: "270", Promedio:"18"},
    {Parametro: "Total horas de venta", Actual:"7", Pasado: "21", Suma: "114", Promedio:"8"},
    {Parametro: "Solicitudes ingresadas", Actual:"10", Pasado: "12", Suma: "89", Promedio:"6"},
    {Parametro: "Comisones 1er año", Actual:"0", Pasado: "51247", Suma: "51249", Promedio:"3417"},
    {Parametro: "Polizas pagadas", Actual:"10", Pasado: "0", Suma: "12", Promedio:"1"},
    ];

    function sumatoria(){

      vm.lissemana.size();
    }
    vm.sumatoria=sumatoria;

	Highcharts.chart( 'firstAreaChart', {
		chart: {
			type: 'area'
		},
		title: {
			text: 'Resultados AG3'
		},
		subtitle: {
			text: '2015'
		},
		xAxis: {
			categories: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
			tickmarkPlacement: 'on',
			title: {
				enabled: false
			}
		},
		yAxis: {
			title: {
				text: 'Percent'
			}
		},
		tooltip: {
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
			shared: true
		},
		plotOptions: {
			area: {
				stacking: 'percent',
				lineColor: '#ffffff',
				lineWidth: 1,
				marker: {
					lineWidth: 1,
					lineColor: '#ffffff'
				}
			}
		},
		series: [{
			name: 'Referidos',
			data: [502, 635, 809, 947, 1402, 3634, 5268]
		}, {
			name: 'Llamadas',
			data: [106, 107, 111, 133, 221, 767, 1766]
		}, {
			name: 'Contactos',
			data: [163, 203, 276, 408, 547, 729, 628]
		}, {
			name: 'Citas',
			data: [18, 31, 54, 156, 339, 818, 1201]
		}, {
			name: 'Entrevistas iniciales',
			data: [15, 28, 53, 153, 336, 715, 1000]
		}, {
			name: 'Entrevistas de cierre',
			data: [10, 20, 40, 100, 300, 600, 700]
		}, {
			name: 'Solicitudes',
			data: [5, 15, 30, 80, 220, 430, 550]
		}]
	});



	Highcharts.chart( 'sidebarChart', {
		chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Funnel de ventas',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Llamadas', 156],
                ['Contactos', 40],
                ['Citas', 19],
                ['Entrevistas iniciales', 15],
                ['Entrevistas finales', 12],
                ['Solicitudes', 10]
            ]
        }]
	});


	Highcharts.chart( 'secondAreaChart', {
		chart: {
			type: 'area'
		},
		title: {
			text: 'Resultados AG3'
		},
		subtitle: {
			text: '2015'
		},
		xAxis: {
			categories: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
			tickmarkPlacement: 'on',
			title: {
				enabled: false
			}
		},
		yAxis: {
			title: {
				text: 'Percent'
			}
		},
		tooltip: {
			pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
			shared: true
		},
		plotOptions: {
			area: {
				stacking: 'percent',
				lineColor: '#ffffff',
				lineWidth: 1,
				marker: {
					lineWidth: 1,
					lineColor: '#ffffff'
				}
			}
		},
		series: [{
			name: 'Referidos',
			data: [502, 635, 809, 947, 1402, 3634, 5268]
		}, {
			name: 'Llamadas',
			data: [106, 107, 111, 133, 221, 767, 1766]
		}, {
			name: 'Contactos',
			data: [163, 203, 276, 408, 547, 729, 628]
		}, {
			name: 'Citas',
			data: [18, 31, 54, 156, 339, 818, 1201]
		}, {
			name: 'Entrevistas iniciales',
			data: [15, 28, 53, 153, 336, 715, 1000]
		}, {
			name: 'Entrevistas de cierre',
			data: [10, 20, 40, 100, 300, 600, 700]
		}, {
			name: 'Solicitudes',
			data: [5, 15, 30, 80, 220, 430, 550]
		}]
	});

	/*
	$(function () {
	    $('#container').highcharts({
	        chart: {
	            type: 'area'
	        },
	        title: {
	            text: 'Resultados AG3'
	        },
	        subtitle: {
	            text: '2015'
	        },
	        xAxis: {
	            categories: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
	            tickmarkPlacement: 'on',
	            title: {
	                enabled: false
	            }
	        },
	        yAxis: {
	            title: {
	                text: 'Percent'
	            }
	        },
	        tooltip: {
	            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
	            shared: true
	        },
	        plotOptions: {
	            area: {
	                stacking: 'percent',
	                lineColor: '#ffffff',
	                lineWidth: 1,
	                marker: {
	                    lineWidth: 1,
	                    lineColor: '#ffffff'
	                }
	            }
	        },
	        series: [{
	            name: 'Referidos',
	            data: [502, 635, 809, 947, 1402, 3634, 5268]
	        }, {
	            name: 'Llamadas',
	            data: [106, 107, 111, 133, 221, 767, 1766]
	        }, {
	            name: 'Contactos',
	            data: [163, 203, 276, 408, 547, 729, 628]
	        }, {
	            name: 'Citas',
	            data: [18, 31, 54, 156, 339, 818, 1201]
	        }, {
	            name: 'Entrevistas iniciales',
	            data: [15, 28, 53, 153, 336, 715, 1000]
	        }, {
	            name: 'Entrevistas de cierre',
	            data: [10, 20, 40, 100, 300, 600, 700]
	        }, {
	            name: 'Solicitudes',
	            data: [5, 15, 30, 80, 220, 430, 550]
	        }]
	    });
	});
	*/

	/*

	$(function () {

    $('#container').highcharts({
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Funnel de ventas',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Llamadas', 156],
                ['Contactos', 40],
                ['Citas', 19],
                ['Entrevistas iniciales', 15],
                ['Entrevistas finales', 12],
                ['Solicitudes', 10]
            ]
        }]
    });
});
*/


  }
