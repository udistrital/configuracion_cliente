'use strict';

/**
 * @ngdoc function
 * @name configuracionApp.controller:CrearparametroCtrl
 * @description
 * # CrearparametroCtrl
 * Controller of the configuracionApp
 */
angular.module('configuracionApp')
  .controller('CrearparametroCtrl', function ($scope, configuracionRequest) {

    $scope.aplicaciones = {};
  
    //Función que obtiene todas las aplicaciones
    configuracionRequest.get('aplicacion', $.param({
        limit: 0
      }))
      .then(function(response) {
        $scope.aplicaciones = response.data;
      });

      //Función para insertar parametros
   	  $scope.confirmar = function(){
   	    var json = {"Nombre":$scope.parametro.nombre,
   	                "Valor": $scope.parametro.valor,
   	                "Aplicacion": {"Id":$scope.aplicacion.Id}};

   	                console.log(json);

   		//Función para hacer la inserción
   		configuracionRequest.post('parametro',json)
   		    .then(function(){
   		          alert ("Guardo exitosamente");
   		          //Limpia los campos despues de hacer una inserción
   		          $scope.parametro = {};
   		          $scope.aplicacion = {};
   		    });
   	  }

   	  //Función para limpiar todos los campos del formulario con el botón "Cancelar"
      		$scope.reset = function(form) {
             $scope.parametro = {};
             if (form) {
               form.$setPristine();          
               form.$setUntouched();
             }
     		};
  });
