'use strict';

/**
 * @ngdoc function
 * @name configuracionApp.controller:CrearperfilCtrl
 * @description
 * # CrearperfilCtrl
 * Controller of the configuracionApp
 */
angular.module('configuracionApp')
  .controller('CrearperfilCtrl', function (configuracionRequest, $scope, $mdDialog) {

  		  	//Estructuras vacias que son llenadas al realizar el GET
  		  	$scope.aplicacion={};
  		  	$scope.menus = {};
  		  	$scope.menu_x_perfil = [];
  		  	$scope.treeOptions = {
  		  				multiSelection: true,
  					    nodeChildren: "Opciones",
  					    dirSelectable: true,
  					    injectClasses: {
  					        ul: "a1",
  					        li: "a2",
  					        liSelected: "a7",
  					        iExpanded: "a3",
  					        iCollapsed: "a4",
  					        iLeaf: "a5",
  					        label: "a6",
  					        labelSelected: "a8"
  					    }
  					};

            console.log("Ya entro");

  		  	//Función que obtiene todas las aplicaciones
          configuracionRequest.get('aplicacion', $.param({
              limit: 0
            }))
            .then(function(response) {
              $scope.aplicaciones = response.data;
            });


  		    /*Función para incluir los menus de acuerdo a la app seleccionada*/
  		    $scope.visualizar = function(){
  		    	//Condicional
  		    	if (typeof $scope.aplicacion.Id === 'undefined' || !$scope.aplicacion.Id || $scope.aplicacion.Id === null){
  		    		//Borra los seleccionados anteriormente
  		    		$scope.menus = {};

  		    	}else{

  		    		//Variable que contiene los menús
  					  $scope.dataForTheTree = [];

    					//Carga los menus por aplicación
    					configuracionRequest.get('perfil_x_menu_opcion/MenusPorAplicacion/' + $scope.aplicacion.Id +'')
              .then(function(response) {
    						$scope.dataForTheTree = response.data;
    				    });
    		    	}
  		   	}


  		    /*Función para insertar aplicaciones*/
  			  $scope.confirmar = function(){
  			    var json = {};
  			    json.Nombre = $scope.perfil.nombre;
  			    //json.Permiso = $scope.perfil.permiso
  			    json.Aplicacion = $scope.aplicacion;

  			    configuracionRequest.post('perfil',json)
  				    .then(function(response){

  				    	//For para realizar el post a la tabla perfil_x_menu_opcion
  				    	for(var i = 0; i < $scope.menu_x_perfil.length; i++){

  				    		//Cambio de menus
  				    		//console.log($scope.menu_x_perfil[i] +"este es el arreglo");

  				    		//Se realiza la petición POST, para guardar los menús asociados al perfil
  				    		configuracionRequest.post('perfil_x_menu_opcion/', {"Perfil": response.data, "Opcion" :  $scope.menu_x_perfil[i]})
  				    			.then(function(response){
  				    				console.log(response.data);
  				    				alert("Los menús asociados al perfil, se han guardado satisfactoriamente");
  				    		});

  				    	}

  				          alert ("Guardo exitosamente");
  				          //Limpia los campos despues de hacer una inserción
  				          $scope.perfil = {};
  				          $scope.aplicacion = {};
  				          $scope.menus = {};
  				          $scope.menu_x_perfil = [];
  				          $scope.dataForTheTree = [];

  				      });
  				    }



  				//Función para actualizar
  		      	$scope.actualizar = function(row) {
  		          //El index indica la posición en la grilla
  		          var index = $scope.gridOptions1.data.indexOf(row.entity);
  		          //Permite que la fila del index, sea editable
  		          $scope.gridOptions1.data[index].editable = !$scope.gridOptions1.data[index].editable;

  		          console.log("Entro a editar");

  		          var jsonActualizado = row.entity;

  		          configuracionRequest.put('perfil', $scope.gridOptions1.Id, jsonActualizado)
  		          		.success(function (data, status, headers) {
  		              		$scope.ServerResponse = data;
  		          })

  		        };


  			    /*Función para limpiar todos los campos del formulario con el botón "Cancelar"*/
  		   		$scope.reset = function(form) {
  		          $scope.perfil = {};
  		          if (form) {
  		            form.$setPristine();
  		            form.$setUntouched();
  		            $scope.dataForTheTree = [];
  		            $scope.menus ={};

  		          }
  		      	};
});
