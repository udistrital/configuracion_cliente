'use strict';

/**
 * @ngdoc function
 * @name configuracionApp.controller:CrearappCtrl
 * @description
 * # CrearappCtrl
 * Controller of the configuracionApp
 */
angular.module('configuracionApp')
  .controller('CrearmenuCtrl', function ($scope, configuracionRequest) {

    //Estructuras vacias que son llenadas al realizar el GET
    $scope.aplicacion = {};
    $scope.menus = {};
    $scope.menu_x_perfil = [];
    //Variable que contiene la información para dibujar el árbol
    $scope.treeOptions = {
      multiSelection: false,
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


    //Función que obtiene todas las aplicaciones
    configuracionRequest.get('aplicacion', $.param({
        limit: 0
      }))
      .then(function(response) {
        $scope.aplicaciones = response.data;
      });

      /*Función para incluir los menus de acuerdo a la app seleccionada*/
    $scope.visualizar = function(){
      console.log("Entro a visualizar")
      $scope.dataForTheTree = [];
      //Condicional
      if (typeof $scope.aplicacion.Id === 'undefined' || !$scope.aplicacion.Id || $scope.aplicacion.Id === null || $scope.nodeChildren === null){
          //Borra los seleccionados anteriormente
          $scope.menus = {};
          $scope.dataForTheTree = [];

      }else{

      $scope.dataForTheTree = [];

           //Carga los menus por aplicación
           configuracionRequest.get('perfil_x_menu_opcion/MenusPorAplicacion/' + $scope.aplicacion.Id +'','')
            .then(function(response) {
                if (response.data ==null) {
                  $scope.dataForTheTree = [];
                }else{
                  $scope.dataForTheTree = response.data;
                }
            });
      }
    };



    /*Función para insertar aplicaciones*/
    $scope.confirmar = function(){
      //console.log(padre);
      var json = {"Nombre":$scope.menu.nombre,
                  "Descripcion":$scope.menu.descripcion,
                  "Url": $scope.menu.url,
                  "Layout":$scope.menu.layout,
                  "Aplicacion": {"Id":$scope.aplicacion.Id},
                  "TipoOpcion": $scope.menu.tipo_opcion};


                  console.log(json);
                  console.log($scope.dataForTheTree);

              //Cuando la app no tiene opciones asociadas
              if($scope.dataForTheTree === null){
                    console.log("Entro aca 1");

                    //Función para hacer las inserciones en la tabla menu_opcion
                    configuracionRequest.post('menu_opcion', json)
                      .then(function(response) {

                        alert ("Guardo exitosamente");
                        console.log(response);

                        //Limpia los campos despues de hacer una inserción
                        $scope.menu = {};
                        $scope.aplicacion = {};
                        $scope.dataForTheTree = [];

                    });
              }
              else{

                    console.log("Entro aca 2");

                    //Función para hacer las inserciones en la tabla menu_opcion
                    configuracionRequest.post('menu_opcion', json)
                      .then(function(response){

                            $scope.menu_hijo = response.data;

                            console.log($scope.menu_padre);

                            //Condicional por si se selecciona un menú padre
                            if($scope.menu_padre!== undefined  ){

                                console.log("Entro a insertar padre");
                                console.log($scope.menu_padre.Id);
                                console.log(response.data.Id);


                                //Creación JSON para POST en menu_opcion_padre
                                var json_padre = {"Padre":{"Id": $scope.menu_padre.Id},
                                                  "Hijo": {"Id": $scope.menu_hijo.Id}};

                                //Se realiza la petición POST, para guardar los menús asociados al perfil
                                configuracionRequest.post('menu_opcion_padre', json_padre)
                                  .then(function(response){
                                        console.log(response.data);
                                });
                            }

                          alert ("Guardo exitosamente");
                          //Limpia los campos despues de hacer una inserción
                          $scope.menu = {};
                          $scope.aplicacion = {};
                          $scope.dataForTheTree = [];
                  });
              }
      };

    /*Función para limpiar todos los campos del formulario con el botón "Cancelar"*/
      $scope.reset = function(form) {
          $scope.menu = {};
          if (form) {
            form.$setPristine();
            form.$setUntouched();
          }
      };

  });
