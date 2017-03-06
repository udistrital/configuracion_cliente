'use strict';

/**
 * @ngdoc overview
 * @name javierApp
 * @description
 * # javierApp
 *
 * Main module of the application.
 */
angular
  .module('javierApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'afOAuth2',
    'treeControl',
    'ngMaterial',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngStorage'
  ])
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/crearApp', {
        templateUrl: 'views/aplicacion/crearapp.html',
        controller: 'CrearappCtrl',
        controllerAs: 'crearapp'
      })
      .when('/consultarApp', {
        templateUrl: 'views/aplicacion/consultarapp.html',
        controller: 'ConsultarappCtrl',
        controllerAs: 'consultarapp'
      })
      .when('/crearPerfil', {
        templateUrl: 'views/perfil/crearperfil.html',
        controller: 'CrearperfilCtrl',
        controllerAs: 'crearperfil'
      })
      .when('/consultarPerfil', {
        templateUrl: 'views/perfil/consultarperfil.html',
        controller: 'ConsultarperfilCtrl',
        controllerAs: 'consultarperfil'
      })
      .when('/crearMenu', {
        templateUrl: 'views/menu/crearmenu.html',
        controller: 'CrearmenuCtrl',
        controllerAs: 'crearmenu'
      })
      .when('/consultarMenu', {
        templateUrl: 'views/menu/consultarmenu.html',
        controller: 'ConsultarmenuCtrl',
        controllerAs: 'consultarmenu'
      })
      .when('/consultarParametro', {
        templateUrl: 'views/parametro/consultarparametro.html',
        controller: 'ConsultarparametroCtrl',
        controllerAs: 'consultarparametro'
      })
      .when('/crearParametro', {
        templateUrl: 'views/parametro/crearparametro.html',
        controller: 'CrearparametroCtrl',
        controllerAs: 'crearparametro'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
