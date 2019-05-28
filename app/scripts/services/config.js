'use strict';

/**
 * @ngdoc service
 * @name configuracionApp.config
 * @description
 * # config
 * Factory in the configuracionApp.
 */
var conf_cloud = {
  WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
  ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
  ADMINISTRATIVA_MID_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/api/administrativa_mid_api/v1/",
  ADMINISTRATIVA_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/api/administrativa_crud_api/v1/",
  ADMINISTRATIVA_PRUEBAS_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/api/administrativa_amazon_api/v1/",
  ARKA_SERVICE: "https://tuleap.udistrital.edu.co/go_api/arka_api_crud/v1/",
  CONFIGURACION_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/",
  CORE_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/api/core_api/v1/",
  CORE_AMAZON_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/api/core_amazon_crud/v1/",
  FINANCIERA_MID_SERVICE: "https://tuleap.udistrital.edu.co/go_api/financiera_mid_api/v1/",
  FINANCIERA_SERVICE: "https://tuleap.udistrital.edu.co/go_api/financiera_api/v1/",
  MODELS_SERVICE: "scripts/models/",
  NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
  OIKOS_SERVICE: "https://tuleap.udistrital.edu.co/go_api/oikos_api/v1/",
  OIKOS_AMAZON_SERVICE: "https://tuleap.udistrital.edu.co/go_api/oikos_amazon_api/v1",
  PAGOS_SERVICE: "https://tuleap.udistrital.edu.co/go_api/services/academicaProxyService/ingresos_concepto/",
  TITAN_SERVICE: "https://tuleap.udistrital.edu.co/go_api/titan_api_crud/v1/",
  SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
  CONTRATO_SERVICE: "https://autenticacion.udistrital.edu.co:8244/administrativa_jbpm/v1/",
  NUXEO_SERVICE: "https://documental.portaloas.udistrital.edu.co/nuxeo/",
  HOMOLOGACION_SERVICE:"https://autenticacion.udistrital.edu.co:8244/dependencias_api/v1/",
  TOKEN: {
    AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
      URL_USER_INFO: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/userinfo",
      CLIENTE_ID: "pszmROXqfec4pTShgF_fn2DAAX0a",
      REDIRECT_URL: "http://localhost:9000/",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email documento",
      BUTTON_CLASS: "btn btn-warning btn-sm",
      SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "http://localhost:9000/",
      SIGN_OUT_APPEND_TOKEN: "true",
  },
  MENU_APP: [{
    id: "kronos",
    title: "KRONOS",
    url: "http://10.20.0.254/kronos"
  }, {
    id: "agora",
    title: "AGORA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/agora"
  },
  {
    id: "argo",
    title: "ARGO",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/argo"
  },
  {
    id: "arka",
    title: "ARKA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/arka"
  },
  {
    id: "temis",
    title: "TEMIS",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/gefad"
  },
  {
    id: "polux",
    title: "POLUX",
    url: "http://10.20.0.254/polux"
  },
  {
    id: "jano",
    title: "JANO",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "kyron",
    title: "KYRON",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "sga",
    title: "SGA",
    url: "http://10.20.0.254/kronos"
  }
]
};
var conf_preproduccion = {
  WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
  ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
  ADMINISTRATIVA_MID_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_mid_api/v1/",
  ADMINISTRATIVA_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_crud_api/v1/",
  ADMINISTRATIVA_PRUEBAS_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_amazon_api/v1/",
  ARKA_SERVICE: "https://tuleap.udistrital.edu.co/go_api/arka_api_crud/v1/",
  CONFIGURACION_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/",
  CORE_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/core_api/v1/",
  CORE_AMAZON_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/core_amazon_crud/v1/",
  FINANCIERA_MID_SERVICE: "https://tuleap.udistrital.edu.co/go_api/financiera_mid_api/v1/",
  FINANCIERA_SERVICE: "https://tuleap.udistrital.edu.co/go_api/financiera_api/v1/",
  MODELS_SERVICE: "scripts/models/",
  NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
  OIKOS_SERVICE: "https://tuleap.udistrital.edu.co/go_api/oikos_api/v1/",
  OIKOS_AMAZON_SERVICE: "https://tuleap.udistrital.edu.co/go_api/oikos_amazon_api/v1",
  PAGOS_SERVICE: "https://tuleap.udistrital.edu.co/go_api/services/academicaProxyService/ingresos_concepto/",
  TITAN_SERVICE: "https://tuleap.udistrital.edu.co/go_api/titan_api_crud/v1/",
  SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
  CONTRATO_SERVICE: "https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_jbpm/v1/",
  NUXEO_SERVICE: "https://documental.portaloas.udistrital.edu.co/nuxeo/",
  HOMOLOGACION_SERVICE:"https://autenticacion.portaloas.udistrital.edu.co/apioas/dependencias_api/v1/",
  TOKEN: {
    AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
      URL_USER_INFO: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/userinfo",
      CLIENTE_ID: "f0zmi1cih0yKrLwEsoJdqI1vASQa",
      REDIRECT_URL: "https://pruebasadministrativa.portaloas.udistrital.edu.co",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email documento",
      BUTTON_CLASS: "btn btn-warning btn-sm",
      SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "https://pruebasadministrativa.portaloas.udistrital.edu.co",
      SIGN_OUT_APPEND_TOKEN: "true",
  },
  MENU_APP: [{
    id: "kronos",
    title: "KRONOS",
    url: "http://10.20.0.254/kronos"
  }, {
    id: "agora",
    title: "AGORA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/agora"
  },
  {
    id: "argo",
    title: "ARGO",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/argo"
  },
  {
    id: "arka",
    title: "ARKA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/arka"
  },
  {
    id: "temis",
    title: "TEMIS",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/gefad"
  },
  {
    id: "polux",
    title: "POLUX",
    url: "http://10.20.0.254/polux"
  },
  {
    id: "jano",
    title: "JANO",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "kyron",
    title: "KYRON",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "sga",
    title: "SGA",
    url: "http://10.20.0.254/kronos"
  }
]
};

var conf_pruebas = {
  WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
  ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
  ADMINISTRATIVA_MID_SERVICE: "https://tuleap.udistrital.edu.co/go_api/administrativa_mid_api/v1/",
  ADMINISTRATIVA_SERVICE: "https://tuleap.udistrital.edu.co/go_api/administrativa_api/v1/",
  ADMINISTRATIVA_PRUEBAS_SERVICE: "http://10.20.0.254/administrativa_amazon_api/v1/",
  ARKA_SERVICE: "https://autenticacion.udistrital.edu.co:8244/arka_api_crud/v1/",
  CONFIGURACION_SERVICE: "http://10.20.0.254/configuracion_api/v1/",
  CORE_SERVICE: "http://10.20.0.254/core_api/v1/",
  CORE_AMAZON_SERVICE: "http://10.20.0.254/core_amazon_crud/v1/",
  FINANCIERA_MID_SERVICE: "http://10.20.0.254/financiera_mid_api/v1/",
  FINANCIERA_SERVICE: "http://10.20.0.254/financiera_api/v1/",
  MODELS_SERVICE: "scripts/models/",
  NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
  OIKOS_SERVICE: "http://10.20.0.254/oikos_api/v1/",
  OIKOS_AMAZON_SERVICE: "http://10.20.0.254/oikos_amazon_api/v1/",
  PAGOS_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/academicaProxyService/ingresos_concepto/",
  TITAN_SERVICE: "http://10.20.0.254/titan_api_crud/v1/",
  SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
  CONTRATO_SERVICE: "https://autenticacion.udistrital.edu.co:8244/administrativa_jbpm/v1/",
  NUXEO_SERVICE: "https://documental.udistrital.edu.co/nuxeo/",
  HOMOLOGACION_SERVICE:"https://autenticacion.udistrital.edu.co:8244/dependencias_api/v1/",
  TOKEN: {
      AUTORIZATION_URL: "https://autenticacion.udistrital.edu.co/oauth2/authorize",
      URL_USER_INFO: "https://autenticacion.udistrital.edu.co/oauth2/userinfo",
      CLIENTE_ID: "pszmROXqfec4pTShgF_fn2DAAX0a",
      REDIRECT_URL: "http://localhost:9000/",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email",
      BUTTON_CLASS: "btn btn-warning btn-sm",
      SIGN_OUT_URL: "https://autenticacion.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "http://localhost:9000/",
      SIGN_OUT_APPEND_TOKEN: "true",
      REFRESH_TOKEN: "https://autenticacion.udistrital.edu.co/oauth2/token",
  },
  MENU_APP: [{
    id: "kronos",
    title: "KRONOS",
    url: "http://10.20.0.254/kronos"
  }, {
    id: "agora",
    title: "AGORA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/agora"
  },
  {
    id: "argo",
    title: "ARGO",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/argo"
  },
  {
    id: "arka",
    title: "ARKA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/arka"
  },
  {
    id: "temis",
    title: "TEMIS",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/gefad"
  },
  {
    id: "polux",
    title: "POLUX",
    url: "http://10.20.0.254/polux"
  },
  {
    id: "jano",
    title: "JANO",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "kyron",
    title: "KYRON",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "sga",
    title: "SGA",
    url: "http://10.20.0.254/kronos"
  }
]
};

var conf_local = {
  WSO2_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services",
  ACADEMICA_SERVICE: "http://10.20.0.127/urano/index.php?data=B-7djBQWvIdLAEEycbH1n6e-3dACi5eLUOb63vMYhGq0kPBs7NGLYWFCL0RSTCu1yTlE5hH854MOgmjuVfPWyvdpaJDUOyByX-ksEPFIrrQQ7t1p4BkZcBuGD2cgJXeD",
  ACADEMICA_WSO_SERVICE: "https://jbpm.udistritaloas.edu.co:8243/services/academicaProxy/",
  ADMINISTRATIVA_MID_SERVICE: "http://10.20.0.254/administrativa_mid_api/v1/",
  ADMINISTRATIVA_SERVICE: "http://localhost:8085/v1/",
  ADMINISTRATIVA_PRUEBAS_SERVICE: "http://localhost:8084/v1/",
  ARKA_SERVICE: "http://10.20.0.254/arka_api_crud/v1/",
  CONFIGURACION_SERVICE: "http://10.20.0.254/configuracion_api/v1/",
  CORE_SERVICE: "http://10.20.0.254/core_api/v1/",
  CORE_AMAZON_SERVICE: "http://localhost:8086/v1/",
  FINANCIERA_MID_SERVICE: "http://10.20.0.254/financiera_mid_api/v1/",
  FINANCIERA_SERVICE: "http://10.20.0.254/financiera_api/v1/",
  MODELS_SERVICE: "scripts/models/",
  NOTIFICACION_WS: "ws://10.20.2.134:8080/ws/join",
  OIKOS_SERVICE: "http://10.20.0.254/oikos_api/v1/",
  OIKOS_AMAZON_SERVICE: "http://10.20.0.254/oikos_amazon_api/v1",
  PAGOS_SERVICE: "http://10.20.0.210/services/academicaProxyService/ingresos_concepto/",
  TITAN_SERVICE: "http://10.20.0.210/titan_api_crud/v1/",
  SICAPITAL_SERVICE: "http://10.20.0.127/sicws/ws/sicapitalAPI.php/?/",
  CONTRATO_SERVICE: "http://jbpm.udistritaloas.edu.co:8280/services/contratoSuscritoProxyService/",
  NUXEO_SERVICE: "https://athento.udistritaloas.edu.co/nuxeo/",
  HOMOLOGACION_SERVICE:"https://autenticacion.udistrital.edu.co:8244/dependencias_api/v1/",
  TOKEN: {
      AUTORIZATION_URL: "https://autenticacion.udistrital.edu.co/oauth2/authorize",
      URL_USER_INFO: "https://autenticacion.udistrital.edu.co/oauth2/userinfo",
      CLIENTE_ID: "pszmROXqfec4pTShgF_fn2DAAX0a",
      REDIRECT_URL: "http://localhost:9000/",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email",
      BUTTON_CLASS: "btn btn-warning btn-sm",
      SIGN_OUT_URL: "https://autenticacion.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "http://localhost:9000/",
      SIGN_OUT_APPEND_TOKEN: "true",
      REFRESH_TOKEN: "https://autenticacion.udistrital.edu.co/oauth2/token",
  },
  MENU_APP: [{
    id: "kronos",
    title: "KRONOS",
    url: "http://10.20.0.254/kronos"
  }, {
    id: "agora",
    title: "AGORA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/agora"
  },
  {
    id: "argo",
    title: "ARGO",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/argo"
  },
  {
    id: "arka",
    title: "ARKA",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/arka"
  },
  {
    id: "temis",
    title: "TEMIS",
    url: "https://pruebasfuncionarios.intranetoas.udistrital.edu.co/gefad"
  },
  {
    id: "polux",
    title: "POLUX",
    url: "http://10.20.0.254/polux"
  },
  {
    id: "jano",
    title: "JANO",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "kyron",
    title: "KYRON",
    url: "http://10.20.0.254/kronos"
  },
  {
    id: "sga",
    title: "SGA",
    url: "http://10.20.0.254/kronos"
  }
]
};

angular.module('configuracionApp')
  .constant('CONF', {
      GENERAL: conf_local
});