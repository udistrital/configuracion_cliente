'use strict';

angular.module('configuracionApp')

  .controller('NotificacionesCtrl', function($scope, notificacion) {
    //path de imagenes de notificacion, esto será temporal
    $scope.imagePath = 'images/yeoman.png';
    //Paso de parametro a la vista por scope para uso desde vista de notificacion
    $scope.notificacion = notificacion;
    console.log(notificacion.log);
  });