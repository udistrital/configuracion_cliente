'use strict';

/**
 * @ngdoc service
 * @name javierApp.configuracionRequest
 * @description
 * # configuracionRequest
 * Factory in the javierApp.
 */
angular.module('javierApp')
  .factory('configuracionRequest', function ($http) {
 
   // Service logic
    // ...
    var path = "http://127.0.0.1/configuracion_api/v1/";
    // Public API here
    return {
      get: function (tabla,params) {
        return $http.get(path+tabla+"/?"+params);
      },
      post: function (tabla,elemento) {
        return $http.post(path+tabla,elemento);
      },
      put: function (tabla,id,elemento) {
        return $http.put(path+tabla+"/"+id,elemento);
      },
      delete: function (tabla,id) {
        return $http.delete(path+tabla+"/"+id);
      }
    };
  });
