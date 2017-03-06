'use strict';

/**
 * @ngdoc function
 * @name javierApp.controller:CrearappCtrl
 * @description
 * # CrearappCtrl
 * Controller of the javierApp
 */
angular.module('javierApp')
  .controller('CrearappCtrl', function ($scope, configuracionRequest) {

    /*Función para insertar aplicaciones*/
    $scope.confirmar = function() {
      var json = {
        "Nombre": $scope.aplicacion.nombre,
        "Descripcion": $scope.aplicacion.descripcion,
        "Dominio": $scope.aplicacion.dominio
      };

      //Registrar Aplicación
      configuracionRequest.post('aplicacion', json)
        .then(function() {
          alert("Guardo exitosamente");
          //Limpia los campos despues de hacer una inserción
          $scope.aplicacion = {};
        });
    }

    /*Función para limpiar todos los campos del formulario con el botón "Cancelar"*/
    $scope.reset = function(form) {
      $scope.aplicacion = {};
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
    };
  });
