'use strict';

/**
 * @ngdoc function
 * @name javierApp.controller:ConsultarmenuCtrl
 * @description
 * # ConsultarmenuCtrl
 * Controller of the javierApp
 */
angular.module('javierApp')
  .controller('ConsultarmenuCtrl', function ($scope, configuracionRequest) {
   //Variable de template que permite la edición de las filas de acuerdo a la condición ng-if
   var tmpl = '<div ng-if="!row.entity.editable">{{COL_FIELD}}</div><div ng-if="row.entity.editable"><input ng-model="MODEL_COL_FIELD"</div>';


 	//Campos que tendra la tabla UI-GRID
 	$scope.gridOptions1 = {
       enableSorting: true,
       enableFiltering: true,
       autoResize:true,
       columnDefs: [
         //{ field: 'Id',  enableCellEdit: false, maxWidth:50 },
         { field: 'Nombre', cellTemplate: tmpl},
         { field: 'Descripcion', cellTemplate: tmpl},
         { field: 'Url', cellTemplate: tmpl},
         { field: 'Layout', cellTemplate: tmpl},
         { field: 'Aplicacion.Nombre',  displayName: 'App', cellTemplate: tmpl},
         { field: 'TipoOpcion', cellTemplate: tmpl},
         {field: 'Acciones',
         cellTemplate: '<button class="btn btn-danger btn-circle" ng-click="grid.appScope.deleteRow(row)"><i class="glyphicon glyphicon-trash"></i></button>&nbsp;<button type="button" class="btn btn-success btn-circle" ng-click="grid.appScope.actualizar(row)"><i class="glyphicon glyphicon-pencil"></i></button>', maxWidth:82}
       ],

     };

    //Función que obtiene todas los menús
    configuracionRequest.get('menu_opcion', $.param({
         limit: 0
       }))
       .then(function(response) {
         $scope.gridOptions1.data = response.data;
       });


    //Función para borrar un registro de la tabla
    $scope.deleteRow = function(row) {
            var index = $scope.gridOptions1.data.indexOf(row.entity);

            //Borra el menú de la BD
            configuracionRequest.delete('menu_opcion', row.entity.Id)
               .then(function(response) {

                     //Condicional
                    if (response.data === "OK"){

                          //$scope.gridOptions1.data.splice(index, 1); Sirve para hacer el borrado desde la vista
                          alert("El menu se ha borrado exitosamente");

                          //Función que obtiene todas las menús
                          configuracionRequest.get('menu_opcion', $.param({
                               limit: 0
                             }))
                             .then(function(response) {
                               $scope.gridOptions1.data = response.data;
                             });

                    }else{
                          alert("No se puede eliminar el menu");
                    }

               });
     };


     //Función para actualizar
     $scope.actualizar = function(row) {
         //El index indica la posición en la grilla
         var index = $scope.gridOptions1.data.indexOf(row.entity);
         //Permite que la fila del index, sea editable
         $scope.gridOptions1.data[index].editable = !$scope.gridOptions1.data[index].editable;

         console.log("Entro a editar");

         var jsonActualizado = row.entity;

         //Función que obtiene todas los menús
         configuracionRequest.put('menu_opcion', $scope.gridOptions1.Id, jsonActualizado )
            .then(function(response) {
              $scope.ServerResponse = response.data;
            });
       };

       /*Función para limpiar todos los campos del formulario con el botón "Cancelar"*/
     $scope.reset = function(form) {
         $scope.perfil = {};
         if (form) {
           form.$setPristine();
           form.$setUntouched();

         }
       };
  });
