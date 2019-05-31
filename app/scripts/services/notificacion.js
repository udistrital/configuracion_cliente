'use strict';

/**
 * @ngdoc service
 * @name configuracionApp.notificacion
 * @description
 * # notificacion
 * Factory in the configuracionApp.
 */
angular.module('configuracionApp')
.factory('notificacion', function($websocket, CONF, token_service) {
    var perfil = [];
    var id = "";
    if(token_service.live_token()){
            perfil = token_service.getRoles();
            id = token_service.getPayload().sub;
    }
    debugger;
    var dataStream = $websocket(CONF.GENERAL.NOTIFICACION_WS + "?id=" + id + "&profiles="+ perfil);

  //var dataStream = $websocket('ws://pruebasapi.intranetoas.udistrital.edu.co:8116/ws/join?id=utest02&profiles=ADMIN_CAMPUS'); //"ws://localhost:8080/register?id=2&profile=admin"
  var log = [];
  dataStream.onMessage(function(message) {
      console.log(message);
      log.unshift(JSON.parse(message.data));
  });

  var methods = {
      id: -1,
      log: log,
      get: function() {
          dataStream.send(JSON.stringify({
              action: 'get'
          }));
      },
      no_vistos: function() {
          var j = 0;
          angular.forEach(methods.log, function(notificiacion) {
              if (!notificiacion.viewed) {
                  j += 1;
              }
          });
          return j;
      }

  };
return methods;
  });
