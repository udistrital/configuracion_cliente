'use strict';

/**
 * @ngdoc function
 * @name javierApp.controller:ConsultarperfilCtrl
 * @description
 * # ConsultarperfilCtrl
 * Controller of the javierApp
 */
angular.module('javierApp')
  .controller('ConsultarperfilCtrl', function (configuracionRequest, $scope, $mdDialog, $http) {
   	  	//Variable de template que permite la edición de las filas de acuerdo a la condición ng-if
   	  	   var tmpl = '<div ng-if="!row.entity.editable">{{COL_FIELD}}</div><div ng-if="row.entity.editable"><input ng-model="MODEL_COL_FIELD"</div>';

           var self = this;
   	  	   //Variable para mostar info en el modal
   	  	 $scope.prueba = {};
   	  	 //$menus_por_app = {};
   	  	 $scope.on_off = false;

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

   	  	 //Función que arma la tabla
   	  	 $scope.gridOptions1 = {
   	  	       enableSorting: true,
   	  	       enableFiltering: true,
   	  	       columnDefs: [
   	  	         { field: 'Nombre', cellTemplate: tmpl },
   	  	         { field: 'Permiso', cellTemplate: tmpl },
   	  	         { field: 'Aplicacion.Nombre',  displayName: 'Aplicación',  enableCellEdit: false, cellTemplate: tmpl},
   	  	         { field: 'Acciones',
   	  	         cellTemplate: '<button class="btn btn-danger btn-circle" ng-click="grid.appScope.deleteRow(row)" type="submit"><i class="glyphicon glyphicon-trash"></i></button>&nbsp;<button type="button" class="btn btn-success btn-circle" ng-click="grid.appScope.actualizar(row); change_state()" ng-show="on_off"><i class="glyphicon glyphicon-pencil"></i></button>&nbsp;<button type="button" class="btn btn-success btn-circle" ng-click="grid.appScope.actualizar(row);change_state()" ng-hide="on_off"><i class="glyphicon glyphicon-pencil"></i></button>&nbsp;<button type="button" class="btn btn-primary btn-circle" ng-click="grid.appScope.visualizar(row);grid.appScope.showAdvanced($event, row)" data-toggle="modal" data-target="#exampleModalLong"><i class="glyphicon glyphicon-eye-open"></i></button>'}
   	  	       ],

   	  	     };

   	  	   $scope.menus_x_perfil = {};

           //Función que obtiene todos los perfiles
           configuracionRequest.get('perfil', $.param({
               limit: 0
             }))
             .then(function(response) {
               $scope.gridOptions1.data = response.data;
             });


              //Función para borrar un registro de la tabla
              $scope.deleteRow = function(row) {
                     var index = $scope.gridOptions1.data.indexOf(row.entity);

                     //Borra la aplicación de la BD
                     configuracionRequest.delete('perfil', row.entity.Id)
                        .then(function(response) {

                           //Condicional
                          if (response.data === "OK"){
                                //$scope.gridOptions1.data.splice(index, 1); Sirve para hacer el borrado desde la vista
                                alert("El perfil se ha borrado exitosamente");

                                //Función que obtiene todas las aplicaciones
                                 configuracionRequest.get('perfil', $.param({
                                       limit: 0
                                 }))
                                 .then(function(response) {
                                      $scope.gridOptions1.data = response.data;
                                 });
                          }else{
                                alert("No se puede borrar el perfil");
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

                  configuracionRequest.put('perfil', $scope.gridOptions1.Id, jsonActualizado)
                  .then(function (response) {
                      $scope.ServerResponse = response.data;
                  })
            };

            //Función para visualizar los menús asociados
              $scope.visualizar = function(row) {
                  //El index indica la posición en la grilla
                  var index = $scope.gridOptions1.data.indexOf(row.entity);
                  $scope.id_perfil = row.entity.Id;
                  console.log(row.entity.Id);
                  $scope.prueba = row.entity;
                  console.log(row.entity.Nombre);

                  //Obtiene los menús asociados a ese perfil
                 configuracionRequest.get('menu_opcion_padre/ArbolMenus/'+row.entity.Nombre+'')
                    .then(function(response) {
                        $scope.opciones = response.data;
                        if ($scope.opciones === null) {
                            $scope.opciones = {};
                        };
                        console.log($scope.opciones);
                        //$scope.showComplex();
                      })

                  //Variable que contiene los menus de la app
                  $scope.dataForTheTree = {};

                  //Carga los menus por aplicación
                  configuracionRequest.get('perfil_x_menu_opcion/MenusPorAplicacion/' + row.entity.Aplicacion.Id +'')
                  .then(function(response) {
                    //Le asigna la respuesta de la petición a la variable
                    $scope.dataForTheTree = response.data;

                  });
              };


              //Función para guardar nuevos menus al perfil
               $scope.guardar_nuevos = function(){
                      //For para realizar el post a la tabla perfil_x_menu_opcion
                      for(var i = 0; i < $scope.nuevo_menu_x_perfil.length; i++){


                        console.log($scope.nuevo_menu_x_perfil[i]);

                        //Se realiza la petición POST, para guardar los menús asociados al perfil
                        configuracionRequest.post('perfil_x_menu_opcion', {"Perfil": $scope.prueba, "Opcion" :  $scope.nuevo_menu_x_perfil[i]})
                          .then(function(response){
                             //Condicional
                            if (response.data === "pq: llave duplicada viola restricción de unicidad «uq_perfil_x_menu_opcion_perfil_opcion»"){

                                  $scope.nombre_menu = response.config.data.Opcion.Nombre;
                                  console.log(response.config.data.Opcion.Nombre);

                                  alert("El menú " + $scope.nombre_menu +" ya se encuentra asociado al perfil");

                            }else{
                              $scope.nombre_menu = response.config.data.Opcion.Nombre;

                              alert("El nuevo menú " + $scope.nombre_menu + " se ha asociado al perfil satisfactoriamente");

                              //Cargar los nuevos menús asociados
                              //Obtiene los menús asociados a ese perfil
                              configuracionRequest.get('menu_opcion_padre/ArbolMenus/'+$scope.prueba.Nombre+'')
                              .then(function(response) {
                                $scope.opciones = response.data;
                                  if ($scope.opciones === null) {
                                      $scope.opciones = {};
                                  };

                              })

                            }
                        });

                      }



              };

              //Función para desvincular menus al perfil
               $scope.borrar = function(){

                        console.log("perfil: "+ $scope.id_perfil+" Menu: "+ $scope.menu_x_perfil[0].Id);

                        //Se realiza petición Get teniendo en cuenta los campos Perfil y Opcion de la tabla perfil_x_menu_opcion
                        configuracionRequest.get('perfil_x_menu_opcion', $.param({
                            limit: 0,
                            query: 'Perfil.Id:'+ $scope.id_perfil +',Opcion.Id:'+$scope.menu_x_perfil[0].Id
                          }))
                          .then(function(response){
                                //Variable que tiene el Id de la relaciÓn a borrar
                                var $scope.relacionId = response.data[0].Id
                                
                                console.log(response.data[0].Id + " este es el ID a borrar.");

                                //PeticiÓn que elimina la asociaciÓn entre el menÚ y el perfil
                                configuracionRequest.delete('perfil_x_menu_opcion', $scope.relacionId)
                                  .then(function(response){
                                      console.log(response.data);
                                      //Condicional
                                       if (response.data === "OK"){
                                             //$scope.gridOptions1.data.splice(index, 1); Sirve para hacer el borrado desde la vista
                                             alert("El menú asociado se ha desvinculado exitosamente");

                                       }else{
                                             alert("No se puede borrar el menú asociado");
                                       }
                                  });
                            };
                    };






  });
