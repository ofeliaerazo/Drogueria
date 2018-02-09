'use strict';

angular.module('drogueriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cuidadoBebe', {
        url: '/cuidadoBebe',
        template: '<cuidado-bebe></cuidado-bebe>'
      });
  });
