'use strict';

/**
 * @ngdoc overview
 * @name configuracionApp
 * @description
 * # configuracionApp
 *
 * Main module of the application.
 */
angular
  .module('configuracionApp', [
         // Librerias
         'ngCookies',
         'angular-loading-bar',
         'angular-md5',
         'ngAnimate',
         'ngCookies',
         'ngMessages',
         'ngResource',
         'ngRoute',
         'treeControl',
         'ngMaterial',
         'ui.grid',
         'ui.grid.edit',
         'ui.grid.rowEdit',
         'ui.grid.cellNav',
         'ui.grid.treeView',
         'ui.grid.selection',
         'ui.grid.pagination',
         'ui.grid.exporter',
         'ui.grid.autoResize',
         'ngStorage',
         'ngWebSocket',
         'angularMoment',
         'ui.utils.masks',
         'pascalprecht.translate',
         'nvd3',
         'ui.grid.expandable',
         'ui.grid.pinning',
         'ui.knob',
         'file-model',
         'angularBootstrapFileinput',
         // Servicios

  ])
    .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notificaciones', {
        templateUrl: 'views/notificaciones.html',
        controller: 'NotificacionesCtrl',
        controllerAs: 'notificaciones'
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
